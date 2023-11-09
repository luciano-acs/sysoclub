export const ExisteUsuario = (props) => {

    // Este codigo permite validar si el usuario ingresado por el usuario existe en la base de datos
    let { user, socios } = props;

    if (socios.some(socio => {
        return socio['usuario'] === user;
    })) {
        return true;
    } else {
        return false;
    };
};