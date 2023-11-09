export const BusquedaSocio = (props) => {

    // Este codigo permite buscar un socio en la base de datos a partir del usuario y contraseña ingresados por el usuario
    let { user, password, socios } = props;

    const socioBusqueda = socios.find(socio => socio.usuario === user && socio.contraseña === password);
    
    return socioBusqueda;
}