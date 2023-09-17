import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { check, openSettings, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { AppState, Platform } from 'react-native';

interface permissionsState {
    locationStatus: PermissionStatus
}

export const permissionsInitState: permissionsState = {
    locationStatus:'unavailable',
}

interface User {
    id:number,
    nombre:string,
    email:string
}

type PermissionsContextProps = {
    permissions: permissionsState,
    user:User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
    askLocationsPermissions: () => Promise<void>,
    checkLocationsPermissions: () => Promise<void>
}

export const permissionsContext = createContext({} as PermissionsContextProps) //que exporta

export const PermissionsProvider = ({children}:any) =>{

    const [permissions, setPermissions] = useState(permissionsInitState)
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      AppState.addEventListener('change',state=>{
          if(state !== 'active') return

            checkLocationsPermissions();
      })
    }, [])
    
    const askLocationsPermissions= async ()=> {
        let permissionStatus;

        if(Platform.OS == 'ios'){
          permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        }else{
          permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        if(permissionStatus == 'blocked'){
            openSettings()
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    };
    const checkLocationsPermissions= async ()=> {
        let permissionStatus;

        if(Platform.OS == 'ios'){
          permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        }else{
          permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })
    }; 

    return(
        <permissionsContext.Provider value={{
            user,
            setUser,
            permissions,
            askLocationsPermissions,
            checkLocationsPermissions
        }}>
            {children}
        </permissionsContext.Provider>
    )
}