import { PanelVentas } from "../components/PanelVentas.js";
import { Venta } from "../elements/Venta.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

const ventasData = await fetch("/proyecto/src/data/ventas.json").then(res => res.json());

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

const metricas = visitor.getMetricasVenta();

const panelVentas = new PanelVentas();
const mediador = new DashboardMediator();


panelVentas.setMediator(mediador);
mediador.setPanelVentas(panelVentas);

mediador.actualizarMetricasVentas(metricas);