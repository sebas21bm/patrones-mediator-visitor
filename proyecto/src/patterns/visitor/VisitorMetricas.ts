import type { Usuario } from "../../elements/Usuario.js";
import type { Venta } from "../../elements/Venta.js";
import type { Visitor } from "./Visitor.js";

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
                this.totalUsuarios === 0 ? 0 : this.sumaPedidosRealizados / this.totalUsuarios,
            cuentasPremium: 
                this.cuentasPremium
        };

    }

    getMetricasVenta(){
        let maxDia = " ";
        let max = 0;

        for (let dia in this.dias) {
            const valor = this.dias[dia] ?? 0;
            if (valor > max) {
                max = valor;
                maxDia = dia;
            }
        }

        return{
            totalVentas:
                this.totalVentas,
            gastoPromedio:
                this.totalVentas === 0 ? 0 : this.sumaTotalPagado / this.totalVentas,
            diaMasFrecuente:
                maxDia,
            facturasGeneradas: 
                this.facturasGeneradas
        }
    }

}


/*
// Necesito esto para poder usar este visitor de métricas
const elementos: Elemento[] = [
 //con datos: Usuarios y Ventas, los que decias del json
];

const visitor = new VisitorMetricas();

elementos.forEach(elemento => elemento.accept(visitor));

// resultados
const usuarios = visitor.getMetricasUsuario();
const ventas = visitor.getMetricasVenta();

*/