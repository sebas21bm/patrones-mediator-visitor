import { Venta } from "../elements/Venta.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";

export async function cargarDatosVentas(){
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());

    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitorMetricas = new VisitorMetricas();
    const visitorAlertas = new VistorAlertas();

    for (const venta of ventas){
        venta.accept(visitorMetricas);
        venta.accept(visitorAlertas);
    }

    return {
        metricas : visitorMetricas.getMetricasVenta(),
        alerta : visitorAlertas.getAlertasVenta()
    }
}