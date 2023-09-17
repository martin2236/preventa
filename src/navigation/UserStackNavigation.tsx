import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import { ClientesScreen } from '../screen/clients/ClientesScreen';
import { UpdateClientScreen } from '../screen/clients/UpdateClientScreen';
import { OrderClientScreen } from '../screen/clients/OrderClientScreen';
import { VerClienteScreen } from '../screen/clients/VerClienteScreen';

export type RootUserStackParams = {
    Clientes:undefined;
    VerCliente:undefined;
    OrdenCliente:undefined;
    EditarCliente:undefined;
}

const Stack = createStackNavigator<RootUserStackParams>();

export const UserStackNavigation = () => {


    return (
        <Stack.Navigator>
                <Stack.Screen name="Clientes" options={{headerShown:false}} component={ClientesScreen} />
                <Stack.Screen name="VerCliente" options={{headerShown:false}} component={VerClienteScreen} />
                <Stack.Screen name="OrdenCliente" options={{headerShown:false}} component={OrderClientScreen} />
                <Stack.Screen name="EditarCliente" options={{headerShown:false}} component={UpdateClientScreen} />
        </Stack.Navigator>
      );
}
