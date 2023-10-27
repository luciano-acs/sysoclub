export const ExisteUsuario = (props) => {

    let { user, socios } = props;

    if (socios.some(socio => {
        return socio['usuario'] === user;
    })) {
        return true;
    } else {
        return false;
    };
};