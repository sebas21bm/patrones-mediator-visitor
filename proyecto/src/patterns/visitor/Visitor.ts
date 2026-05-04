import {Usuario} from "../../elements/Usuario"
import {Venta} from "../../elements/Venta"

export interface Visitor{
    visitarUsuario(usuario: Usuario): void;
    visitarVenta(venta: Venta): void;
}