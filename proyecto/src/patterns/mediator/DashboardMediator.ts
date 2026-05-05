import { cargarDatosUsuarios } from "../../app/cargarDatosUsuarios.js";
import { cargarDatosVentas } from "../../app/cargarDatosVentas.js";
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
            const resultado = await cargarDatosUsuarios();

            localStorage.setItem(
                "resumenUsuarios",
                JSON.stringify(resultado)
            );
        }
        if (componente instanceof PanelVentas && evento === "actualizar"){
            const resultado = await cargarDatosVentas();

            localStorage.setItem(
                "resumenVentas",
                JSON.stringify(resultado)
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
        
        const guardado = localStorage.getItem("resumenUsuarios");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarUltimosDatosUsuario(resultado.metricas);
    }

    mostrarAlertasUsuarioInicio(): void {
        if (!this.resumenInicio) {
            return;
        }

        const guardado = localStorage.getItem("resumenUsuarios");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarAlerta(resultado.alerta);
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
        
        const guardado = localStorage.getItem("resumenVentas");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarUltimosDatosVentas(resultado.metricas);
    }

    mostrarAlertasVentasInicio(): void {
        if (!this.resumenInicio) {
            return;
        }

        const guardado = localStorage.getItem("resumenVentas");

        if (!guardado) {
            return;
        }

        const resultado = JSON.parse(guardado);

        this.resumenInicio.mostrarAlerta(resultado.alerta);
    }
}