import React,{useContext} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileScreen } from '../screen/ProfileScreen';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { permissionsContext } from '../context/PermissionsContext';
import { UserStackNavigation } from './UserStackNavigation';

export type RootBottomTabParams = {
    Clientes: undefined;
    Productos: undefined;
    Salir: undefined;
  };

const Tab = createMaterialBottomTabNavigator<RootBottomTabParams>();

export const BottomTabsNavigation = () => {
  const {permissions, setUser} = useContext(permissionsContext)

        const handleLogout = () => {
          // Lógica de logout aquí
          setUser(null);
        };

  return (
    <Tab.Navigator
        initialRouteName="Clientes"
        activeColor="#3c3c44"
        inactiveColor="#777"
        barStyle={{ backgroundColor: '#04acb4' }}
    >
      <Tab.Screen 
      name="Clientes" 
      component={UserStackNavigation} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="store" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
        name="Productos" 
        component={ProfileScreen} 
        options={{
            tabBarIcon: ({ color }) => (
              <Icon name="shopping" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen name="Salir" component={LogoutComponent} 
            options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="power" color={color} size={26} />
                ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // Evita la navegación predeterminada
            handleLogout(); // Ejecuta la función de logout
          },
        })}
       />
        
    </Tab.Navigator>
  );
}

const  LogoutComponent = () => {
    return null;
  }