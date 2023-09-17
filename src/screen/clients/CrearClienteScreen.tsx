import React, {useEffect, useState, useCallback} from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Button, Card, Divider, IconButton, MD2Colors, Text } from 'react-native-paper'
import { CustomInput } from '../../components/CustomInput'
import { Formik } from 'formik';
import { createClientScheme } from '../../schemas/ValidationSchema';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

export const CrearClienteScreen = () => {

    const onCreate = (value:any) => {

    }

  return (
    <View style={{flex:1, backgroundColor:'#3c3c44'}}>
        <Text style={{fontSize:20,marginTop:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>REGISTRAR NUEVO CLIENTE</Text>
        <Divider bold style={{backgroundColor:'#04acb4', width:'90%' ,alignSelf:'center'}}/>
        <Formik
            initialValues={{ nombreNegocio: '', nombreDueño:'', telefono:'', email:'', localidad:'', direccion:'', altura:''}}
            validationSchema={createClientScheme}
            validateOnChange={false}
            onSubmit={onCreate}
        >
                 {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.nombreNegocio}
                    placeholder={'Nombre del negocio'}
                    keyboardType={'default'}
                    type={'nombreNegocio'}
                    width={'90%'}
                    errorCheck={errors.nombreNegocio}
                    mt={15}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.nombreDueño}
                    placeholder={'Nombre del dueño'}
                    keyboardType={'default'}
                    type={'nombreDueño'}
                    width={'90%'}
                    errorCheck={errors.nombreDueño}
                    mt={10}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.telefono}
                    placeholder={'Telefono'}
                    keyboardType={'numeric'}
                    type={'telefono'}
                    width={'90%'}
                    errorCheck={errors.telefono}
                    mt={10}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.email}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    type={'email'}
                    width={'90%'}
                    errorCheck={errors.email}
                    mt={10}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.localidad}
                    placeholder={'Localidad'}
                    keyboardType={'default'}
                    type={'localidad'}
                    width={'90%'}
                    errorCheck={errors.localidad}
                    mt={10}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.direccion}
                    placeholder={'Direccion'}
                    keyboardType={'default'}
                    type={'direccion'}
                    width={'90%'}
                    errorCheck={errors.direccion}
                    mt={10}
                />
                <CustomInput
                    handleChange={handleChange}
                    errors={errors}
                    value={values.altura}
                    placeholder={'Altura'}
                    keyboardType={'numeric'}
                    type={'altura'}
                    width={'90%'}
                    errorCheck={errors.altura}
                    mt={10}
                />
                <Button mode='contained' style={{marginTop:20, width:'90%', alignSelf:'center'}}>
                    REGISTRAR
                </Button>
        </>
          )}
        </Formik>
    </View>
  )
}
