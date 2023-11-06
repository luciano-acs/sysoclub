export const Registro = () => {
    let form = document.createElement('form');
    form.setAttribute('class','form-register');
    form.setAttribute('id','form-register');

    form.innerHTML = 
    `
        <h2>Registro</h2>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido" required>
        <input type="number" name="dni" id="dni" placeholder="DNI" required>
        <input type="text" name="direccion" id="direccion" placeholder="Dirección" requerid>
        <input type="number" name="telefono" id="telefono" placeholder="Teléfono" requerid>
        <input type="email" name="email" id="email" placeholder="Correo electrónico" requerid>
        <input type="password" name="contraseña" id="contraseña" placeholder="Contraseña" requerid>
        <button class="button-login" type="submit">Registrarse</button>
        <h1 id="mensajeRegistro" class="mensaje"></h1>  
    `

    return form;
}