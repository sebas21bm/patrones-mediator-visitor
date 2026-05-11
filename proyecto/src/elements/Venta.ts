import type { Visitor } from "../patterns/visitor/Visitor.js";
import type { Elemento } from "./Elemento.js";

export class Venta implements Elemento{
    
    totalPagado: number
    fecha: Date
    facturada: boolean

    constructor(totalPagado: number, fecha: Date, facturada: boolean){
        this.totalPagado = totalPagado
        this.fecha = fecha
        this.facturada = facturada
    }


    accept(visitor: Visitor): void {
        visitor.visitarVenta(this)
    }

}