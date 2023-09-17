import React,{useContext} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileScreen } from '../screen/ProfileScreen';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { permissionsContext } from '../context/PermissionsContext';
import { UserStackNavigation } from './UserStackNavigation';

export type RootBottomTabParams = {
    Client: undefined;
    Perfil: undefined;
    Logout: undefined;
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
        initialRouteName="Client"
        activeColor="#3c3c44"
        inactiveColor="#777"
        barStyle={{ backgroundColor: '#04acb4' }}
    >
      <Tab.Screen 
      name="Client" 
      component={UserStackNavigation} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen name="Logout" component={LogoutComponent} 
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