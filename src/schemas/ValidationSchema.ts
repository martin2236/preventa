import { object, string, ref } from 'yup';

//* LOGIN
export const loginSchema = object({
    email: 
    string()
    .required('Ingrese un email'),

    password: 
      string().min(5,'La contraseña debe tener mas de 5 caracteres').required('ingrese una contraseña'),
  });


//*REGISTRO  
  export const seachScheme = object({
    buscar:
    string()
    .required('Ingrese un filtro')
    .min(5,'El filtro debe tener más de 5 caracteres'),
   
  })

  //*REGISTRO  
  export const cantScheme = object({
    buscar:
    string()
    .required('Ingrese un filtro')
    .min(5,'El filtro debe tener más de 5 caracteres'),
   
  })

  export const createClientScheme = object({
    buscar:
    string()
    .required('Ingrese un filtro')
    .min(5,'El filtro debe tener más de 5 caracteres'),
   
  })

