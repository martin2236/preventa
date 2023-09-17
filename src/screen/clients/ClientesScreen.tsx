import React, {useState, useEffect} from 'react'
import { View, TouchableOpacity, Animated } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator, Button, Divider, IconButton, List, MD2Colors, Text } from 'react-native-paper';
import { clientes } from '../../clientes';
import { theme } from '../../../App';
import { StackScreenProps } from '@react-navigation/stack';
import { RootUserStackParams } from '../../navigation/UserStackNavigation';
import { FlashList } from '@shopify/flash-list';
import { Formik } from 'formik';
import { seachScheme } from '../../schemas/ValidationSchema';
import { CustomInput } from '../../components/CustomInput';

interface Props extends StackScreenProps<RootUserStackParams,'Cliente'>{}
export const ClientesScreen = ({navigation,route}:Props) => {
    const [clientesBack, setClientesBack] = useState<any[]>([]);
    useEffect(()=>{
        setTimeout(() => {
            setClientesBack(clientes)
        }, 1500);
    },[])

    const handleSearch = () =>{

    }

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
    <View style={{flex:1, backgroundColor:'#3c3c44'}}>

        <Formik
            initialValues={{ buscar: ''}}
            validationSchema={seachScheme}
            validateOnChange={false}
            onSubmit={handleSearch}
        >
                 {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.buscar}
                    placeholder={'BUSCAR'}
                    keyboardType={'default'}
                    type={'buscar'}
                    width={'90%'}
                    right='magnify'
                    errorCheck={errors.buscar}
                    mt={5}
                />
        </>
          )}
        </Formik>
        <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>CLIENTES</Text>
        <Divider bold style={{backgroundColor:'#04acb4', width:'90%' ,alignSelf:'center'}}/>
    {clientesBack ? 
    <>
        <FlashList
            data={clientesBack}
            renderItem={renderItem}
            keyExtractor={(item)=>`${item.id}`}
            estimatedItemSize={100}
        />
    </>
    :
    <View style={{flex:1, flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator size={'large'} animating={true} color={MD2Colors.cyan400} />
    <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>CARGANDO PRODUCTOS</Text>
</View>
}
<IconButton
            icon="plus"
            iconColor={'#3c3c44'}
            style={{position:'absolute',right:10, bottom:10, backgroundColor:'#04acb4'}}
            mode='contained'
            size={40}
            onPress={() => navigation.navigate('CrearCliente')}
        />
   </View>
);
}