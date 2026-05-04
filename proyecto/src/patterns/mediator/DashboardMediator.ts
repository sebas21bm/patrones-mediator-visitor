import type { Componente } from "../../components/Componente";
import type { PanelUsuarios } from "../../components/PanelUsuarios";
import type { PanelVentas } from "../../components/PanelVentas";
import type { ResumenInicio } from "../../components/ResumenInicio";
import type { Mediator } from "./Mediator";

export class DashboardMediator implements Mediator{

    panelUsuarios : PanelUsuarios;
    panelVentas : PanelVentas;
    resumenInicio : ResumenInicio;

    notificar(Componente: Componente): void {
        //TODO Implementacion del mediador
    }

    constructor(panelUsuarios: PanelUsuarios, panelVentas: PanelVentas, resumenInicio: ResumenInicio){
        this.panelUsuarios = panelUsuarios;
        this.panelVentas = panelUsuarios;
        this.resumenInicio = resumenInicio;
    }

}