import { ResumenInicio } from "../components/ResumenInicio.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";

const resumenInicio = new ResumenInicio();
const mediador = new DashboardMediator();

resumenInicio.setMediator(mediador);
mediador.setResumenInicio(resumenInicio);

mediador.mostrarMetricasUsuarioInicio();
mediador.mostrarMetricasVentasInicio();