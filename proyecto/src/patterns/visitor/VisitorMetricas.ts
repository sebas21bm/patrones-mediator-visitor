import type { Usuario } from "../../elements/Usuario";
import type { Venta } from "../../elements/Venta";
import type { Visitor } from "./Visitor";

export class VisitorMetricas implements Visitor {
    //Usuarios
    private totalUsuarios = 0;
    private usuariosActivos = 0;
    private sumaPedidosRealizados = 0;
    private cuentasPremium = 0;

    //Ventas
    private totalVentas = 0;
    private sumaTotalPagado = 0;
    private dias: Record<string, number> = {};
    private facturasGeneradas = 0;

    visitarUsuario(usuario: Usuario): void {
        this.totalUsuarios++

        if(usuario.activo){
            this.usuariosActivos++
        }

        this.sumaPedidosRealizados += usuario.totalCompras

        if(usuario.conMembresia){
            this.cuentasPremium++
        }
        
    }

    visitarVenta(venta: Venta): void {
        this.totalVentas++

        this.sumaTotalPagado += venta.totalPagado

        const dia = venta.fecha.toDateString();
        this.dias[dia] = (this.dias[dia] || 0) + 1;

        if(venta.facturada){
            this.facturasGeneradas++
        }
    }

    getMetricasUsuario(){
        return{
            totalUsuario : 
                this.totalUsuarios,
            promedioActivos:
                this.totalUsuarios === 0 ? 0 : this.usuariosActivos / this.totalUsuarios,
            promedioCompras:
                this.totalUsuarios === 0 ? 0 : this.sumaTotalPagado / this.totalUsuarios,
            cuentasPremium: 
                this.cuentasPremium
        };

    }

    getMetricasVentas(){
        /*let maxDia = "N/A";
        let max = 0;

        for (let dia in this.dias) {
            if (this.dias[dia] > max) {
                max = this.dias[dia];
                maxDia = dia;
            }*/

        return{
            totalVentas:
                this.totalVentas,
            gastoPromedio:
                this.totalVentas = 0 ? 0 : this.sumaTotalPagado / this.totalVentas,
            facturasGeneradas : this.facturasGeneradas
        }
    }

}