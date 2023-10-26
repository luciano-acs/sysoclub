export const Reserva = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'reserva');

    section.innerHTML =
        `
        <h2>Reservas</h2>
        <div class="card-container">
            <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">
                <h2>A</h2>                    
                <form id="form-reserva">
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" id="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
                <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">
                <h2>B</h2>
                <form id="form-reserva">
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" id="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
            <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">
                <h2 id="lugar">C</h2>
                <form id="form-reserva">
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" id="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
        </div>
        
        `

    return section;
}