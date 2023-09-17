import React, {useEffect, useState, useCallback} from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Card, Divider, IconButton, MD2Colors, Text } from 'react-native-paper'
import { CustomInput } from '../../components/CustomInput'
import { Formik } from 'formik';
import { seachScheme } from '../../schemas/ValidationSchema';
import axios from 'axios';
import { FlashList } from '@shopify/flash-list';


export const NuevaOrdenScreen = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    
    useEffect(()=>{
        getProducts();
    },[])

    const handleSearch = (value:any) => {

    }
   const getProducts = useCallback(async() =>{
    try {
        setCargando(true);
        const res = await axios.get('https://fakestoreapi.com/products');
        const data = await res.data;
        console.log('trayendo productos')
        setProductos(data);
        setCargando(false);

    } catch (error) {
        console.log();
        setCargando(false);
    }
   },[])

   const renderItem = (item:any) => {return(
    <Card style={{width:'90%', marginTop:15, alignSelf:'center'}}>
        <Card.Title title={item.item.title}  />
        <Card.Cover style={{marginBottom:10, width:100, height:100, alignSelf:'center'}} source={{ uri: item.item.image }} />
        <Card.Content>
            <Text style={{alignSelf:'center'}}>Precio: $ {item.item.price}</Text>
        </Card.Content>
        <Card.Actions style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <IconButton
                icon="minus"
                iconColor={'#04acb4'}
                size={25}
                onPress={() => console.log('Pressed')}
            />
           <Formik
            initialValues={{ cantidad: ''}}
            validationSchema={seachScheme}
            validateOnChange={false}
            onSubmit={handleSearch}
        >
                 {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.cantidad}
                    placeholder={'0'}
                    keyboardType={'numeric'}
                    type={'cantidad'}
                    width={60}
                    errorCheck={errors.cantidad}
                    height={30}
                />
        </>
          )}
        </Formik>
           <IconButton
                icon="plus"
                iconColor={'#04acb4'}
                size={25}
                onPress={() => console.log('Pressed')}
            />
            </Card.Actions>
    </Card>
   )}
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
        <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>PRODUCTOS</Text>
        <Divider bold style={{backgroundColor:'#04acb4', width:'90%' ,alignSelf:'center'}}/>
        {cargando || !productos.length?
            <View style={{flex:1, flexDirection:'column',alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size={'large'} animating={true} color={MD2Colors.cyan400} />
                <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>CARGANDO PRODUCTOS</Text>
            </View>
            :
            <FlashList
                data={productos}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item:any)=>`${item.id}`}
                estimatedItemSize={100}
            />
        }
       
   </View>
  )
}
