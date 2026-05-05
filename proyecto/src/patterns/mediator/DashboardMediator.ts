import type { Componente } from "../../components/Componente.js";
import { PanelUsuarios } from "../../components/PanelUsuarios.js";
import type { PanelVentas } from "../../components/PanelVentas.js";
import type { ResumenInicio } from "../../components/ResumenInicio.js";
import { VisitorMetricas } from "../visitor/VisitorMetricas.js";
import type { Mediator } from "./Mediator.js";

export class DashboardMediator implements Mediator{

    panelUsuarios?: PanelUsuarios;
    panelVentas?: PanelVentas;
    resumenInicio?: ResumenInicio;

    setPanelUsuarios(panelUsuarios: PanelUsuarios){
        this.panelUsuarios = panelUsuarios
    }

    setPanelVentas(panelVentas: PanelVentas){
        this.panelVentas = panelVentas;
    }

    setResumenInicio(resumenInicio: ResumenInicio){
        this.resumenInicio = resumenInicio;
    }

    notificar(componente: Componente): void {
        //TODO Implementacion del mediador
        if (componente instanceof PanelUsuarios){

        }
    }

    actualizarMetricasUsuario(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void {
        if (this.panelUsuarios == null){
            return;
        }

        this.panelUsuarios.actualizarMetricas(metricas);
    }

    actualizarMetricasVentas(metricas: {
        totalVentas: number,
        gastoPromedio: number,
        diaMasFrecuente: string,
        facturasGeneradas: number;
    }): void {
        if (this.panelVentas == null) {
            return;
        }
        this.panelVentas.actualizarMetricas(metricas);
    }
}