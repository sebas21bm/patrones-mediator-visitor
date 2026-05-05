import { PanelVentas } from "../components/PanelVentas.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { cargarDatosVentas } from "./cargarDatosVentas.js";

const resultado = await cargarDatosVentas();

const panelVentas = new PanelVentas();
const mediador = new DashboardMediator();


panelVentas.setMediator(mediador);
mediador.setPanelVentas(panelVentas);

mediador.actualizarMetricasVentas(resultado.metricas);
panelVentas.btnActualizarOnClick();