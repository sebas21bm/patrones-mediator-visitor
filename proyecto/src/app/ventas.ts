import { PanelVentas } from "../components/PanelVentas.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { obtenerMetricasVentas } from "./cargadorDatos.js";

const resultado = await obtenerMetricasVentas();

const panelVentas = new PanelVentas();
const mediador = new DashboardMediator();

panelVentas.setMediator(mediador);
mediador.setPanelVentas(panelVentas);

mediador.actualizarMetricasVentas(resultado);
panelVentas.btnActualizarOnClick();