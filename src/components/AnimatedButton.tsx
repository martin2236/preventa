import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const AnimatedButton = () => {
  return (
    <TouchableOpacity>
      <Animatable.View style={{backgroundColor:'purple'}} animation="pulse" easing="ease-out" iterationCount="infinite">
        <Text>Botón</Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}
