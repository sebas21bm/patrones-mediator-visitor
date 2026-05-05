import { PanelVentas } from "../components/PanelVentas.js";
import { Venta } from "../elements/Venta.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";
import { cargarDatosVentas } from "./cargarDatosVentas.js";

const metricas = await cargarDatosVentas();

const panelVentas = new PanelVentas();
const mediador = new DashboardMediator();


panelVentas.setMediator(mediador);
mediador.setPanelVentas(panelVentas);

mediador.actualizarMetricasVentas(metricas);
panelVentas.btnActualizarOnClick();