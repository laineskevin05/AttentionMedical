export const getHospitalByName = (name='', hospitales) => {
    if(name===''){
        return[]
    }else{
        name.toLocaleLowerCase();
        return hospitales.filter(hos => hos.nombre.toLocaleLowerCase().includes(name));
    }
}