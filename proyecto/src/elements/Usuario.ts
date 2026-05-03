import type {Elemento} from "../elements/Elemento"
import type {Visitor} from "../patterns/visitor/Visitor"

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