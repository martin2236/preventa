import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import { StackNavigation } from './src/navigation/StackNavigation';
import { PermissionsProvider } from './src/context/PermissionsContext';
import {
    MD2Colors,
    MD3LightTheme as DefaultTheme,
    PaperProvider,
  } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
       ...DefaultTheme.colors,
    // Specify custom property in nested object
    colors: {
        primary: MD2Colors.cyan400,
        onPrimary: "rgb(255, 255, 255)",
        primaryContainer: "rgb(240, 219, 255)",
        onPrimaryContainer: "rgb(44, 0, 81)",
        secondary: "rgb(102, 90, 111)",
        onSecondary: "rgb(255, 255, 255)",
        secondaryContainer: "rgb(237, 221, 246)",
        onSecondaryContaine: "rgb(33, 24, 42)",
        tertiary: "rgb(128, 81, 88)",
        onTertiary: "rgb(255, 255, 255)",
        tertiaryContainer: "rgb(255, 217, 221)",
        onTertiaryContainer: "rgb(50, 16, 23)",
        error: "rgb(186, 26, 26)",
    errorContainer: "rgb(255, 218, 214)",
        onErrorContainer: "rgb(65, 0, 2)",
        background: "rgb(255, 251, 255)",
        onBackground: "rgb(29, 27, 30)",
        surface: "rgb(255, 251, 255)",
        onSurface: "rgb(29, 27, 30)",
        surfaceVariant: "rgb(233, 223, 235)",
        onSurfaceVariant: MD2Colors.white,
        outline: "rgb(124, 117, 126)",
        outlineVariant: "rgb(204, 196, 206)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(50, 47, 51)",
        inverseOnSurface: "rgb(245, 239, 244)",
        inversePrimary: "rgb(220, 184, 255)",
        elevation: {
          level0: "transparent",
          level1: "rgb(248, 242, 251)",
          level2: "rgb(244, 236, 248)",
          level3: "rgb(240, 231, 246)",
          level4: "rgb(239, 229, 245)",
          level5: "rgb(236, 226, 243)"
        },
        surfaceDisabled: "rgba(29, 27, 30, 0.12)",
        onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
        backdrop: "rgba(51, 47, 55, 0.4)"
      }
};

const AppState = ({children}:any)=>{
    return(
        <PermissionsProvider>
            {children}
        </PermissionsProvider>
    )
}


export const App = ():JSX.Element => {
    
    useEffect(() => {
        SplashScreen.hide()
       }, [])

  return (
      <AppState>
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        </PaperProvider>
      </AppState>
  );
}

