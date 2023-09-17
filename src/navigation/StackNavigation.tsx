import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import { PermissionsScreen } from '../screen/PermissionsScreen';
import { permissionsContext } from '../context/PermissionsContext';
import { UserStackNavigation } from './UserStackNavigation';

export type RootStackParams = {
    Permissions:undefined;
    Login:undefined;
    Tabs:undefined;
    Cliente:any;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {

  const {permissions,user} = useContext(permissionsContext)

    return (
        <Stack.Navigator>
          {
            permissions.locationStatus == 'denied' || permissions.locationStatus == 'unavailable' ?
            <Stack.Screen name="Permissions" options={{headerShown:false}} component={PermissionsScreen} />
            :
            <>
              {
                !user ? 
                <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
                :
                <>
                    <Stack.Screen name="Tabs" options={{headerShown:false}} component={BottomTabsNavigation} />
                    <Stack.Screen name="Cliente" component={UserStackNavigation}/>
                </>
              }
            </>
          }
        </Stack.Navigator>
      );
}
