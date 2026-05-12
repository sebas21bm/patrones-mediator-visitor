import { PanelUsuarios } from "../components/PanelUsuarios.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { obtenerMetricasUsuarios } from "./cargadorDatos.js";

const resultado = await obtenerMetricasUsuarios();

const panelUsuarios = new PanelUsuarios();
const mediador = new DashboardMediator();

panelUsuarios.setMediator(mediador);
mediador.setPanelUsuarios(panelUsuarios);

mediador.actualizarMetricasUsuario(resultado);
panelUsuarios.btnActualizarOnClick();