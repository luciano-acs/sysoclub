import { RenderPage } from '/js/helpers/routes/renderPage.js';
import { Routes } from '/js/helpers/routes/routes.js';

export const ChangeRoute = (props) => {

    console.log(props);
    let { routes, appRoot } = props;

    const pages = [];
    routes.forEach(route => {
        pages.push(Routes[route]);
    });

    if (pages) {
        RenderPage({ pages: pages, appRoot: appRoot });
    }
};