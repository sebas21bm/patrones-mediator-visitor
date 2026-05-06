import { PanelUsuarios } from "../components/PanelUsuarios.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { cargarDatosUsuarios } from "./cargarDatosUsuarios.js";

const resultado = await cargarDatosUsuarios();

const panelUsuarios = new PanelUsuarios();
const mediador = new DashboardMediator();

panelUsuarios.setMediator(mediador);
mediador.setPanelUsuarios(panelUsuarios);

mediador.actualizarMetricasUsuario(resultado);
panelUsuarios.btnActualizarOnClick();