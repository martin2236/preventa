import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity, Animated } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import * as Animatable from 'react-native-animatable';
import { Button, Divider, List, MD2Colors, Text } from 'react-native-paper';
import { clientes } from '../../clientes';
import { FlatList } from 'react-native-gesture-handler';
import { theme } from '../../../App';
import { StackScreenProps } from '@react-navigation/stack';
import { RootUserStackParams } from '../../navigation/UserStackNavigation';
interface Props extends StackScreenProps<RootUserStackParams,'Clientes'>{}
export const ClientesScreen = ({navigation,route}:Props) => {
    const [clientesBack, setClientesBack] = useState<any[]>([]);
    useEffect(()=>{
        setClientesBack(clientes)
    },[])

    const renderItem = (item:any) => { 
        
        return(
            <View style={{backgroundColor:'#3c3c44'}}>
                <Button 
                    icon="store"
                    style={{marginTop:10, width:'80%', alignItems:'flex-start'}} 
                    mode="text" 
                    onPress={() => navigation.navigate('VerCliente',item.item)}
                    labelStyle={{ fontSize: 30, color:'#fff' }} 
                    contentStyle={{height:40}}
                    >
                    <Text style={{fontSize: 18,color:MD2Colors.white, fontWeight:'700'}} >{item.item.nombreNegocio}</Text>
                </Button>
                <Divider bold />
            </View>
    )
}

  return (
    <View style={{flex:1, flexDirection:'column',justifyContent:'space-around',backgroundColor:'#fff'}}>
    {clientesBack ? 
    <>
        <FlatList
            data={clientesBack}
            renderItem={renderItem}
            keyExtractor={(item)=>`${item.id}`}
        />
    </>
    :
    <>
    </>    
}
   </View>
);
}