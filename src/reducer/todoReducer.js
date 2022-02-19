export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'login':
            const listaUsuarios = JSON.parse(localStorage.getItem('user'));
            listaUsuarios.map( user => {
                const {correo, contraseña} = action.payload;
                if(user.correo === correo && user.contraseña === contraseña){
                    console.log(user.correo);
                    console.log(correo);
                    console.log(user.contraseña);
                    console.log(contraseña);
                    //console.log('sesion iniciada');
                    return user;
                }
                
            })
            
            // for(let i = 0; i == listaUsuarios.length; i++){
            //     if(listaUsuarios[i].correo === correo && listaUsuarios[i].contraseña === contraseña){
            //         return listaUsuarios[i];
            //     }
            // }
        default:
            return state;
    }

}