import type {Elemento} from "../elements/Elemento.js"
import type {Visitor} from "../patterns/visitor/Visitor.js"

export class Usuario implements Elemento {
    
    conMembresia : boolean
    activo: boolean
    totalCompras: number

    constructor(conMembresia:boolean,activo:boolean,totalCompras:number){
        this.conMembresia = conMembresia
        this.activo = activo
        this.totalCompras = totalCompras
    }

    accept(visitor: Visitor): void {
        visitor.visitarUsuario(this)
    }

}