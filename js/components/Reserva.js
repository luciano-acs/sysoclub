export const Reserva = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'reserva');
    
    section.innerHTML =
        `
        <h2>Reservas</h2>
        <h3>Reserva tu espacio favorito</h3>
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
        <div class="recordatorio">
            <h4>Recorda que:</h4>
            <div class="recordatorio-item">
                <div class="recordatorio-group">
                    <button class="btn-reserva" id="btn-reserva">Reservar</button>
                    <p>Dicho espacio está disponible en esa fecha y hora para ser reservado</p>
                </div> 
                <div class="recordatorio-group">
                    <button class="btn-reserva" id="btn-reserva">No disponible</button>
                    <p>Dicho espacio se reservó por otro socio en esa fecha y hora y no está disponible</p>
                </div>   
                <div class="recordatorio-group">
                    <button class="btn-reserva" id="btn-reserva">Reservado</button>
                    <p>Dicho espacio se encuentra reservado para tu uso</p>
                </div>                         
            </div>            
        </div>
        `

    return section;
}