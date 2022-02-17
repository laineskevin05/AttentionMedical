import { useState } from "react";
    const letra = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
    const password = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,8}$/);
    const telefono = new RegExp(/^([0-9]){8}$/);

export const useForm = (initialState = {
nombre: '',
apellido: '',
contraseña: '',
confContraseña: '',
correo: '',
telefono: '',
hasError: {}
})=>{
    const [value, setValue] = useState(initialState);
        
    const reset = ()=>{
        setValue(initialState);
    }
    
    const handleBlur = (targe)=>{
        const hasError = {};
        
        if(!targe.nombre){
            hasError.nombre ='Este campo es obligatorio';
        }
        
        if(!letra.test(targe.nombre) && targe.nombre!==''){
            hasError.nombre ='Este campo solo acepta caracteres';
        }
        if(!targe.apellido){
            hasError.apellido ='Este campo es obligatorio';
        }
        
        if(!letra.test(targe.apellido) && targe.apellido!==''){
            hasError.apellido ='Este campo solo acepta caracteres';
        }

        if(!targe.correo){
            hasError.correo ='Este campo es obligatorio';
        }

        if(!targe.contraseña){
            hasError.contraseña ='Este campo es obligatorio';
        }
        
        if(!password.test(targe.contraseña) && targe.contraseña!==''){
            hasError.contraseña ='La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula';
        }
        
        if(!targe.confContraseña){
            hasError.confContraseña ='Este campo es obligatorio';
        }

        if (targe.confContraseña!==targe.contraseña) {
            hasError.confContraseña = 'Contraseña no Valida'
        }
        
        if(!targe.telefono){
            hasError.telefono ='Este campo es obligatorio';
        }
        
        if(!telefono.test(targe.telefono) && targe.telefono!==''){
            hasError.telefono ='Este campo solo acepta numeros';
        }

        return hasError
    }


    const handleInputChange = ({target})=>{
        setValue({
            ...value,
            [target.name]: target.value
        });
        console.log(target.value);
    }

    return [value, handleInputChange, handleBlur, setValue, reset]
}