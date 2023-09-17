import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import { ClientesScreen } from '../screen/clients/ClientesScreen';
import { UpdateClientScreen } from '../screen/clients/UpdateClientScreen';
import { OrderClientScreen } from '../screen/clients/OrderClientScreen';
import { VerClienteScreen } from '../screen/clients/VerClienteScreen';
import { CrearClienteScreen } from '../screen/clients/CrearClienteScreen';
import { VerOrdenScreen } from '../screen/clients/VerOrdenScreen';
import { NuevaOrdenScreen } from '../screen/clients/NuevaOrdenScreen';

export type RootUserStackParams = {
    Cliente:undefined;
    VerCliente:undefined;
    OrdenCliente:undefined;
    EditarCliente:undefined;
    CrearCliente:undefined;
    VerOrden:{id:number, orden:Orden[], total:number};
    NuevaOrden:undefined;
}

interface Orden {id: number; producto: string; marca: string; precio: number; cantidad: number; }

const Stack = createStackNavigator<RootUserStackParams>();

export const UserStackNavigation = () => {


    return (
        <Stack.Navigator>
                <Stack.Screen name="Cliente" options={{headerShown:false}} component={ClientesScreen} />
                <Stack.Screen name="VerCliente" options={{headerShown:false}} component={VerClienteScreen} />
                <Stack.Screen name="OrdenCliente" options={{headerShown:false}} component={OrderClientScreen} />
                <Stack.Screen name="EditarCliente" options={{headerShown:false}} component={UpdateClientScreen} />
                <Stack.Screen name="CrearCliente" options={{headerShown:false}} component={CrearClienteScreen} />
                <Stack.Screen name="VerOrden" options={{headerShown:false}} component={VerOrdenScreen} />
                <Stack.Screen name="NuevaOrden" options={{headerShown:false}} component={NuevaOrdenScreen} />
        </Stack.Navigator>
      );
}
