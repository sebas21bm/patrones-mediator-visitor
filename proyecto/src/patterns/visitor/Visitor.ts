import {Usuario} from "../../elements/Usuario"
import {Venta} from "../../elements/Venta"

export interface Visitor{
    visitarUsuario(elemento: Usuario): void;
    visitarVenta(elemento: Venta): void;
}