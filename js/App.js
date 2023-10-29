//Components
import { Socios } from "./helpers/data.js";
import { Datos } from "./components/Datos.js";
//Helpers
import { Registrarse } from "./helpers/registrarse.js";
import { CargarLogin } from "./helpers/cargarLogin.js";
import { ChangeRoute } from "./helpers/routes/changeRoute.js";
import { CargarPerfil } from "./helpers/cargarPerfil.js";

export const App = () => {
    let appRoot = document.querySelector('#root');

    const mostrarIncio = () => {
        appRoot.innerHTML = '';
        if (localStorage.getItem('socioDatos')) {
            Datos();
            ChangeRoute({ routes: ['inicio'], appRoot: appRoot });
            CargarPerfil({ socios: Socios, appRoot: appRoot });
        } else {
            ChangeRoute({ routes: ['inicio', 'asociate'], appRoot: appRoot });
            let listNav = document.querySelector('#list-nav');
            let liNav = listNav.querySelectorAll('li');

            liNav.forEach(li => {
                li.parentNode.removeChild(li);
            });

            let liLogin = document.createElement('li');
            liLogin.innerHTML = `<button id="btn-inicio">Iniciar Sesión</button>`;
            let liRegister = document.createElement('li');
            liRegister.innerHTML = `<button id="btn-registro">Registrarse</button>`;

            listNav.appendChild(liLogin);
            listNav.appendChild(liRegister);

            const buttonRegister = document.querySelector('#btn-registro');
            buttonRegister.addEventListener('click', () => {
                ChangeRoute({ routes: ['registro'], appRoot: appRoot });
                Registrarse({ socios: Socios });
            });

            const buttonAsociate = document.querySelector('#btn-asociate');
            buttonAsociate.addEventListener('click', () => {
                ChangeRoute({ routes: ['registro'], appRoot: appRoot });
                Registrarse({ socios: Socios });
            });

            const buttonLogin = document.querySelector('#btn-inicio');
            buttonLogin.addEventListener('click', () => {
                ChangeRoute({ routes: ['login'], appRoot: appRoot });
                CargarLogin({ socios: Socios, appRoot: appRoot });
            });
        }
    }
    mostrarIncio();
}