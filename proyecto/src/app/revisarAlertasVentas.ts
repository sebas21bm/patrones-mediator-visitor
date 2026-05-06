import { Venta } from "../elements/Venta.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";

export async function revisarAlertasVentas(){
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());

    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitorAlertas = new VistorAlertas();

    for (const venta of ventas){
        venta.accept(visitorAlertas);
    }

    return visitorAlertas.getAlertasVenta()
}