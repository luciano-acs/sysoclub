export const ExisteUsuarioContraseña = (props) => {

    let { user, password, socios } = props;

    if (socios.some(socio => {
        return socio['usuario'] === user && socio['contraseña'] === password;
    })) {
        return true;
    } else {
        return false;
    };
};