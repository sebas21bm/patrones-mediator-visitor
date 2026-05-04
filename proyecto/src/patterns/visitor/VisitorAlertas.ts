import type { Usuario } from "../../elements/Usuario";
import type { Venta } from "../../elements/Venta";
import type { Visitor } from "./Visitor";

export class VistorAlertas implements Visitor{
    private alertasUsuarios: string[] = []
    private alertasVentas: string[] = []

    private totalUsuarios = 0
    private usuariosInactivos = 0
    private totalVentas = 0
    private ventasSinFacturar = 0
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

        if(!venta.facturada){
            this.ventasSinFacturar++
        }

        if(venta.totalPagado >= valorVentaGrande){
            this.ventasGrande++
        }
    }

    getAlertasUsuario(): string[] {  
        this.alertasUsuarios = []
        
        if(this.totalUsuarios > 0){
            const porcentajeUsuariosInactivos = (this.usuariosInactivos * 100 ) / this.totalUsuarios

            if(porcentajeUsuariosInactivos > 50){
                this.alertasUsuarios.push("Más de 50% de usuarios inactivos")
            }

            if(porcentajeUsuariosInactivos < 10){
                this.alertasUsuarios.push("Más del 90% de usuarios activos")
            }
        }

        return this.alertasUsuarios
    }

    getAlertasVenta(): string[]{
        this.alertasVentas = []

        if(this.totalVentas > 0){
            const porcentajeVentasSinFactura = (this.ventasSinFacturar * 100 ) / this.totalVentas

            if(porcentajeVentasSinFactura > 50){
                this.alertasVentas.push("Más del 50% de ventas sin facturar")
            }

            const porcentajeVentasGrandes = (this.ventasGrande * 100 ) / this.totalVentas

            if(porcentajeVentasGrandes < 50){
                this.alertasVentas.push("Menos del 50% de ventas de más de $1000")
            }
        }

        return this.alertasVentas
    }

}


/*
// Necesito esto para poder usar este visitor de alertas
const elementos: Elemento[] = [
 //con datos: Usuarios y Ventas, los que decias del json
];

const visitor = new VisitorAlertas()

elementos.forEach(elemento => elemento.accept(vistor))

const alertasUsuario = visitor.getAlertasUsuario()
const alertasVenta = visitor.getAlertasVenta()
*/