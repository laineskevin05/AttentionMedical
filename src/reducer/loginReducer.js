
export const loginReducer = (state = [], action) => {
    switch (action.type) {


        case 'login':
            const listaUsuarios = JSON.parse(localStorage.getItem('user'));
            listaUsuarios.map( user => {
                const {correo, contraseña} = action.payload;
                if(user.correo === correo && user.contraseña === contraseña){
                    //console.log('sesion iniciada');
                    return user;
                }
                
            })

        
    
        default:
            return state;
    }
}

        