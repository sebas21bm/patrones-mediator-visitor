import { Venta } from "../elements/Venta";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas";

const ventasData = await fetch("/proyecto/src/data/ventas.json").then(res => res.json());

const Ventas = [
    ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    )
];

Ventas.forEach(venta => {
    venta.accept(VistorAlertas);
});