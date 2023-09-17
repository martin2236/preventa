import { StackScreenProps } from '@react-navigation/stack'
import React, {useEffect, useState, useCallback} from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Divider, IconButton, MD2Colors, Text } from 'react-native-paper'
import { RootUserStackParams } from '../../navigation/UserStackNavigation'
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { FlashList } from '@shopify/flash-list'

interface Props extends StackScreenProps<RootUserStackParams,'VerOrden'>{}
export const VerOrdenScreen = ({route}:Props) => {
    const orden = route.params;
    const productos = orden.orden;
    console.log(orden)
    const renderItem = (item:any) => {
        return(
            <View style={{width:'96%',alignSelf:'center',flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
                <Text style={{flex:1,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>{item.item.id}</Text>
                <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>{item.item.producto}</Text>
                <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>{item.item.marca}</Text>
                <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>${item.item.precio}</Text>
                <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>{item.item.cantidad}</Text>
                <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>${item.item.precio * item.item.cantidad}</Text>
            </View>
        )
    }
  return (
    <View style={{flex:1, backgroundColor:'#3c3c44'}}>
        <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>PEDIDO N° {orden.id}</Text>
        <Divider bold style={{backgroundColor:'#04acb4', width:'90%' ,alignSelf:'center'}}/>
        <View style={{width:'96%',marginBottom:5,alignSelf:'center',flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
            <Text style={{flex:1,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>Id</Text>
            <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>Producto</Text>
            <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>Marca</Text>
            <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>Precio</Text>
            <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>Cantidad</Text>
            <Text style={{flex:2,fontSize:16,textAlign:'center', fontWeight:'800', color:'#fff'}}>SubTotal</Text>
        </View>
        <Divider bold style={{backgroundColor:'#fff', width:'96%' ,alignSelf:'center'}}/>
        <FlashList
            data={productos}
            renderItem={renderItem}
            keyExtractor={(item)=>`${item.id}`}
            estimatedItemSize={100}
        />
        <Text style={{fontSize:22,alignSelf:'flex-end',fontWeight:'bold',marginRight:15,color:'#fff'}}>
            TOTAL: $ {orden.total}
        </Text>
    </View>
  )
}
