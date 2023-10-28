//Components
import { Socios } from "./helpers/data.js";

//Helpers
import { Registrarse } from "./helpers/registrarse.js";
import { CargarLogin } from "./helpers/cargarLogin.js";
import { ChangeRoute } from "./helpers/routes/changeRoute.js";

export const App = () => {
    let appRoot = document.querySelector('#root');

    const mostrarIncio = () => {
        appRoot.innerHTML = '';
        ChangeRoute({routes: ['inicio','asociate'], appRoot: appRoot});
    }

    mostrarIncio();

    const buttonRegister = document.querySelector('#btn-registro');
    buttonRegister.addEventListener('click', () => {
        ChangeRoute({routes: ['registro'], appRoot: appRoot});        
        Registrarse({socios: Socios});
    });

    const buttonAsociate = document.querySelector('#btn-asociate');
    buttonAsociate.addEventListener('click', () => {
        ChangeRoute({routes: ['registro'], appRoot: appRoot});
        Registrarse({socios: Socios});
    });

    const buttonLogin = document.querySelector('#btn-inicio');
    buttonLogin.addEventListener('click', () => {
        ChangeRoute({routes: ['login'], appRoot: appRoot});
        CargarLogin({socios: Socios, appRoot: appRoot});
    });

}