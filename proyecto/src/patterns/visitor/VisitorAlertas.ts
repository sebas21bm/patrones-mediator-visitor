import type { Usuario } from "../../elements/Usuario";
import type { Venta } from "../../elements/Venta";
import type { Visitor } from "./Visitor";

export class VistorAlertas implements Visitor{
    
    visitarUsuario(elemento: Usuario): void {
        //
    }

    visitarVenta(elemento: Venta): void {
        //
    }

}