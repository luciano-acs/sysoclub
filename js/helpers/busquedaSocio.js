export const BusquedaSocio = (props) => {

    let { user, password, socios } = props;

    const socioBusqueda = socios.find(socio => socio.usuario === user && socio.contraseña === password);
    
    return socioBusqueda;
}