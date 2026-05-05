import {Usuario} from "../../elements/Usuario.js"
import {Venta} from "../../elements/Venta.js"

export interface Visitor{
    visitarUsuario(usuario: Usuario): void;
    visitarVenta(venta: Venta): void;
}