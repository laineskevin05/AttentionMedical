import { useState } from "react";
    const letra = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
    const password = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{4,8}$/);
    const telefono = new RegExp(/^([0-9]){8}$/);

export const useLogin = (initialState = {})=>{
    const [value, setValue] = useState(initialState);
        
    // const reset = ()=>{
    //     setValue(initialState);
    // }
    
    const handleBlur = (targe)=>{
        const hasError = {};
        
        if(!targe.correo){
            hasError.correo ='Este campo es obligatorio';
        }

        if(!targe.contraseña){
            hasError.contraseña ='Este campo es obligatorio';
        }
        
        // userList.map(user => {
            //     if(!(targe.correo === user.correo) || !(targe.contraseña === user.contraseña)){
                //         console.log(user.correo);
                //         console.log(targe.contraseña);
                //         hasError.correo = 'Correo invalido';
                //         hasError.contraseña = 'Contraseña invalido';
                //     }
                // })
             
        let counter = 0;        
        const userList = JSON.parse(localStorage.getItem('user'));
        for(let i = 0; i < userList.length; i++){
            //console.log(userList[i].correo);
            if(targe.correo === userList[i].correo && targe.contraseña === userList[i].contraseña){
                counter = 0;
                console.log('session iniciada');
            }
            else{
                counter++;
            }
            if(counter == userList.length){
                hasError.correo = 'Correo o Contraseña invalido';
                hasError.contraseña = 'Correo o Contraseña invalido';
            }
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

    return [value, handleInputChange, handleBlur, setValue]
}