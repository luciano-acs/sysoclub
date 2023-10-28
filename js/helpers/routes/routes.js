import { Inicio } from '../../components/inicio.js';
import { Asociate } from '../../components/Asociate.js';
import { Login } from '../../components/Login.js';
import { Registro } from '../../components/Registro.js';
import { Reserva } from '../../components/Reserva.js';
import { Perfil } from '../../components/Perfil.js';
import { Pago } from '../../components/Pago.js';

export const Routes = {
    inicio: Inicio(),
    asociate: Asociate(),
    login: Login(),
    registro: Registro(),
    perfil: Perfil(),
    pago: Pago(),
    reserva: Reserva(),
}