export const Reserva = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'reserva');

    const horarioPiscina = ['06:00','07:00','08:00','09:00','10:00', '11:00', '12:00', '13:00', '14:00', '15:00','16:00','17:00'];
    const horarioCancha = ['18:00','19:00','20:00','21:00','22:00','23:00','00:00'];

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
                    <select type="time" name="hora" class="hora" placeholder="Hora">
                        ${
                            horarioCancha.map(hora => {
                                return `<option value="${hora}">${hora}</option>`
                            })
                        }
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
                    <select type="time" name="hora" class="hora" placeholder="Hora">
                        ${
                            horarioPiscina.map(hora => {
                                return `<option value="${hora}">${hora}</option>`
                            })
                        }
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
                    <select type="time" name="hora" class="hora" placeholder="Hora">
                        <option value="22:00">22:00</option>
                    </select>
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                </form>
            </div>
        </div>
        
        `

    return section;
}