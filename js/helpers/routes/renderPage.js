export const RenderPage = (props) => {

    let { pages, appRoot } = props;

    appRoot.innerHTML = '';
    pages.forEach(page => {        
        appRoot.append(page);
    });
    
};