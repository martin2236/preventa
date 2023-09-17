import React,{useContext} from 'react'
import { permissionsContext } from '../context/PermissionsContext';
import { Button, Text } from 'react-native-paper';
import { View } from 'react-native';

export const PermissionsScreen = () => {
    const {permissions, askLocationsPermissions} = useContext(permissionsContext)
    console.log(permissions)
  return (
      <View style={{flex:1, backgroundColor:'#3c3c44', display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        {
            permissions.locationStatus == 'denied' || permissions.locationStatus == 'unavailable' ?
            <>
                <Text  variant='displayMedium' style={{color:'#fff'}}>Hola !</Text>
                <Text variant='headlineSmall'  style={{marginTop:15,marginBottom:10,textAlign:'center',color:'white'}}>Hola para usar esta app nececitamos conocer tu ubicación</Text>
                <Button onPress={askLocationsPermissions} mode='elevated' buttonColor='#04acb4' style={{marginTop:10}}>
                    <Text  variant='headlineSmall' style={{marginTop:15 ,fontWeight:'500',color:'#fff'}}>Compartir Mi Ubicacion</Text>
                </Button>
            </>
            :
            null
        }
      </View>
    )
} 