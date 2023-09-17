import React,{useState, useContext} from 'react'
import { RootStackParams } from '../navigation/StackNavigation';
import {StackScreenProps} from'@react-navigation/stack' 
const logo = require('../assets/loginLogo.png');
import { Formik } from 'formik';
import { CustomInput } from '../components/CustomInput';
import { loginSchema } from '../schemas/ValidationSchema';
import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { permissionsContext } from '../context/PermissionsContext';
import { Button, Text } from 'react-native-paper';

const height = Dimensions.get('window').height;

interface Props extends StackScreenProps<RootStackParams,'Login'>{}

interface Login {
    email:string,
    password:string
}
export const LoginScreen = ({navigation}:Props) => {

    const {permissions, setUser} = useContext(permissionsContext)
    const [cargando,setCargando] = useState(false)

    const onLogin = (values:Login) =>{
        console.log("algo")
        setCargando(true)
       
            setCargando(false);
            setUser({
                id:1,
                nombre:'Martin Medina',
                email:'martin@email.com'
            })
       
    }

  return (
    <View style={{flex:1, flexDirection:'column',justifyContent:'space-around',backgroundColor:'#3c3c44'}}>
      {
        !cargando ? 
        <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={60} behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <View style={{flex:1}}>
            <Image  style={{height:200,width:200,marginTop:10,alignSelf:'center'}} source={logo} alt='logo'/>
        </View>
        
         <View style={{flex:2,display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        
             {
                 cargando ? 
                 <View style={{backgroundColor:'red'}}>
                     <ActivityIndicator style={{marginTop:10}} animating={true} size={50} color={'#fff'} />
                     <Text variant='labelMedium' style={{marginTop:8, fontWeight:'bold', alignSelf:'center', color:'#fff'}}>
                         Iniciando sesión
                     </Text>
                 </View>
                 :
                 <Formik
                 initialValues={{ email: '', password:'' }}
                 validationSchema={loginSchema}
                 validateOnChange={false}
                 onSubmit={onLogin}
             >
                 {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                 <>
                     <CustomInput
                         handleChange={handleChange}
                         errors={errors}
                         value={values.email}
                         placeholder={'USUARIO'}
                         keyboardType={'email-address'}
                         type={'email'}
                         errorCheck={errors.email}
                         mt={5}
                     />
                     <CustomInput
                         handleChange={handleChange}
                         errors={errors}
                         value={values.password}
                         placeholder={'CONTRASEÑA'}
                         type={'password'}
                         errorCheck={errors.password}
                         mt={15}
                     />
                    
                     <Text 
                        variant='labelMedium'
                        style={{textAlign:'center',fontSize:14, color:'#fff', marginTop:15}}
                      >
                             OLVIDÉ MI CONTRASEÑA
                     </Text>
                     <Button 
                         onPress={() => handleSubmit()}
                         buttonColor={'#04acb4'}
                         textColor='#fff'
                         style={{ marginTop:20,width:'80%',alignSelf:'center',paddingVertical:5}}>
                                 INGRESAR
                     </Button>
                 </>
             )}
             </Formik>
             }
         </View>
        </KeyboardAvoidingView>
        :
        <View style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <ActivityIndicator animating={true} size={40} color={'#fff'} />
            <Text style={{color:'#fff'}}>
                iniciando sesion
            </Text>
        </View>
      }
    </View>
  )
}
