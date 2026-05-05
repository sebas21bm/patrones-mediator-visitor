import type { Usuario } from "../../elements/Usuario.js";
import type { Venta } from "../../elements/Venta.js";
import type { Visitor } from "./Visitor.js";

export class VistorAlertas implements Visitor{
    private alertaUsuarios = ""
    private alertaVentas = ""

    private totalUsuarios = 0
    private usuariosInactivos = 0
    private totalVentas = 0
    private ventasGrande = 0

    visitarUsuario(usuario: Usuario): void {
       this.totalUsuarios++

       if(! usuario.activo){
        this.usuariosInactivos++
       }

    }

    visitarVenta(venta: Venta): void {
        const valorVentaGrande = 1000

        this.totalVentas++

        if(venta.totalPagado >= valorVentaGrande){
            this.ventasGrande++
        }
    }

    getAlertasUsuario(): string {  
        this.alertaUsuarios = ""
        
        if(this.totalUsuarios > 0){
            const porcentajeUsuariosInactivos = (this.usuariosInactivos * 100 ) / this.totalUsuarios

            if(porcentajeUsuariosInactivos > 50){
                this.alertaUsuarios = "Más de 50% de usuarios inactivos"
            }
        }

        return this.alertaUsuarios
    }

    getAlertasVenta(): string {
        this.alertaVentas = ""


        if(this.totalVentas > 0){
            const porcentajeVentasGrandes = (this.ventasGrande * 100 ) / this.totalVentas

            if(porcentajeVentasGrandes < 50){
                this.alertaVentas = "Menos del 50% de ventas de más de $1000"
            }
        }

        return this.alertaVentas
    }

}