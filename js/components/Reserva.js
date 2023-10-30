export const Reserva = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'reserva');
    
    section.innerHTML =
        `
        <h2>Reservas</h2>
        <div class="card-container">
            <div class="card-reserva">
                <img src="../assets/basquet.jpg">                                   
                <form class="form-reserva">
                    <h2 class="lugar">Cancha</h2> 
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <select type="time" name="hora" class="hora" placeholder="Hora" id="selectCancha">
                    </select>
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
            <div class="card-reserva">
                <img src="../assets/piscina.jpg">                
                <form class="form-reserva">
                    <h2 class="lugar">Piscina</h2>
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <select type="time" name="hora" class="hora" placeholder="Hora" id="selectPiscina">                        
                    </select>
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
            <div class="card-reserva">
                <img src="../assets/salon.jpg">
                <form class="form-reserva">
                    <h2 class="lugar">Salón</h2>
                    <label for="fecha">Fecha</label>
                    <input type="date" name="fecha" class="fecha" placeholder="Fecha">
                    <label for="hora">Hora</label>
                    <select type="time" name="hora" class="hora" placeholder="Hora" id="selectSalon">                        
                    </select>
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
        </div>
        
        `

    return section;
}