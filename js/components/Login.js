export const Login = () => {

    let form = document.createElement('form');
    form.setAttribute('class','form-login');
    form.setAttribute('id','form-login');

    form.innerHTML = 
    `
        <h2>Login</h2>
        <input type="email" name="usuario" id="usuario" placeholder="Usuario" required>
        <input type="password" name="contraseña" id="contraseña" placeholder="Contraseña" required>
        <button class="button-login" id="button-login">Ingresar</button>
        <h1 id="mensaje" class="mensaje"></h1>       
    `;      

    return form;
}