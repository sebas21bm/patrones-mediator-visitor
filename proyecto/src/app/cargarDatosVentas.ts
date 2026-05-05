import { Venta } from "../elements/Venta.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

export async function cargarDatosVentas(){
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());

    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitor = new VisitorMetricas();

    for (const venta of ventas){
        venta.accept(visitor);
    }

    return visitor.getMetricasVenta();
}