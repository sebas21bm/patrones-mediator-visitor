import { Venta } from "../elements/Venta.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

export async function obtenerMetricasVentas(){
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());

    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitorMetricas = new VisitorMetricas();

    for (const venta of ventas){
        venta.accept(visitorMetricas);
    }

    return visitorMetricas.getMetricasVenta()
}