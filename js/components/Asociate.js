export const Asociate = () => {
    let section = document.createElement('section');
    section.setAttribute('class','logo-index');

    section.innerHTML = 
    `
        <img src="./assets/logo-sysoclub.png" alt="">
        <h2><p id="btn-asociate">Asociáte!</p></h2>
    `;

    return section;
}