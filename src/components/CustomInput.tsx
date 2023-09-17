import { FormikErrors } from 'formik/dist/types';
import { TextInput } from 'react-native-paper';
import React from 'react'
import { KeyboardTypeOptions } from 'react-native';

interface Props{
    handleChange:{
                    (e: React.ChangeEvent<any>): void;
                    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
                },
    errors:     FormikErrors<{}>,
    value:any
    placeholder:string,
    keyboardType?:KeyboardTypeOptions,
    type:string,
    errorCheck:string | undefined,
    mt?:number
    width?: number | string
    right?:string
    height?:number
}

export const CustomInput = ({handleChange,right,height, errors, value, placeholder,keyboardType, type, mt = 0 ,errorCheck, width = '80%'}:Props) => {
 
  return (
        <TextInput
            
            right={right ? <TextInput.Icon color={'black'} icon={right} /> : null}
            onChangeText={handleChange(type)}
            mode='outlined'
            outlineColor='#04acb4'
            placeholder={placeholder}
            placeholderTextColor={'black'}
            keyboardType={keyboardType}
            style={{width,height,marginTop:mt,textAlign:'center',alignSelf:'center'}}
            value={value}
            secureTextEntry={type === 'clave' ? true : false}
        />
  )
}
