export const Reserva = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'reserva');

    section.innerHTML =
        `
        <h2>Reservas</h2>
        <div class="card-container">
            <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">                                   
                <form class="form-reserva">
                    <h2 class="lugar">A</h2> 
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" class="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
            <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">                
                <form class="form-reserva">
                    <h2 class="lugar">B</h2>
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" class="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
            <div class="card-reserva">
                <img src="../assets/logo-sysoclub.png">
                <form class="form-reserva">
                    <h2 class="lugar">C</h2>
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <input type="time" name="hora" class="hora" placeholder="Hora">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
        </div>
        
        `

    return section;
}