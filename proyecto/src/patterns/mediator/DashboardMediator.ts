import { obtenerMetricasUsuarios } from "../../app/obtenerMetricasUsuarios.js";
import { obtenerMetricasVentas } from "../../app/obtenerMetricasVentas.js";
import { revisarAlertasUsuarios } from "../../app/revisarAlertasUsuarios.js";
import { revisarAlertasVentas } from "../../app/revisarAlertasVentas.js";
import type { Componente } from "../../components/Componente.js";
import { PanelUsuarios } from "../../components/PanelUsuarios.js";
import { PanelVentas } from "../../components/PanelVentas.js";
import { ResumenInicio } from "../../components/ResumenInicio.js";
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

    async notificar(componente: Componente, evento: string): Promise<void>{

        if (componente instanceof PanelUsuarios && evento === "actualizar"){
            const metricas = await obtenerMetricasUsuarios();
            const alertas = await revisarAlertasUsuarios();

            localStorage.setItem(
                "metricasUsuarios",
                JSON.stringify(metricas)
            );

            localStorage.setItem(
                "alertasUsuarios",
                JSON.stringify(alertas)
            );
        }
        if (componente instanceof PanelVentas && evento === "actualizar"){
            const metricas = await obtenerMetricasVentas
            const alertas = await revisarAlertasVentas();

            localStorage.setItem(
                "metricasVentas",
                JSON.stringify(metricas)
            );
            
            localStorage.setItem(
                "alertasVentas",
                JSON.stringify(alertas)
            );
        }
    }

    actualizarMetricasUsuario(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void {
        if (!this.panelUsuarios){
            return;
        }

        this.panelUsuarios.actualizarMetricas(metricas);
    }

    mostrarMetricasUsuarioInicio(): void {
        if (!this.resumenInicio){
            return;
        }
        
        const guardado = localStorage.getItem("metricasUsuarios");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarUltimosDatosUsuario(resultado);
    }

    mostrarAlertasUsuarioInicio(): void {
        if (!this.resumenInicio) {
            return;
        }

        const guardado = localStorage.getItem("alertasUsuarios");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarAlerta(resultado);
    }

    actualizarMetricasVentas(metricas: {
        totalVentas: number,
        gastoPromedio: number,
        diaMasFrecuente: string,
        facturasGeneradas: number;
    }): void {
        if (!this.panelVentas) {
            return;
        }
        this.panelVentas.actualizarMetricas(metricas);
    }

    mostrarMetricasVentasInicio(): void {
        if (!this.resumenInicio){
            return;
        }
        
        const guardado = localStorage.getItem("metricasVentas");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarUltimosDatosVentas(resultado);
    }

    mostrarAlertasVentasInicio(): void {
        if (!this.resumenInicio) {
            return;
        }

        const guardado = localStorage.getItem("alertasVentas");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarAlerta(resultado);
    }
}