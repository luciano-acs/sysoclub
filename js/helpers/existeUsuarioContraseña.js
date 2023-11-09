export const ExisteUsuarioContraseña = (props) => {

    // Este codigo permite validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
    let { user, password, socios } = props;

    if (socios.some(socio => {
        return socio['usuario'] === user && socio['contraseña'] === password;
    })) {
        return true;
    } else {
        return false;
    };
};