import { PanelUsuarios } from "../components/PanelUsuarios.js";
import { Usuario } from "../elements/Usuario.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";
import { cargarDatosUsuarios } from "./cargarDatosUsuarios.js";

const metricas = await cargarDatosUsuarios();

const panelUsuarios = new PanelUsuarios();
const mediador = new DashboardMediator();

panelUsuarios.setMediator(mediador);
mediador.setPanelUsuarios(panelUsuarios);

mediador.actualizarMetricasUsuario(metricas);
panelUsuarios.btnActualizarOnClick();