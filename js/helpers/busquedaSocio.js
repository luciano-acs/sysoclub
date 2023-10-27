export const BusquedaSocio = (props) => {

    let { user, password, socios } = props;

    console.log(user, password, socios);
    const socioBusqueda = socios.find(socio => socio.usuario === user && socio.contraseña === password);
    
    return socioBusqueda;
}