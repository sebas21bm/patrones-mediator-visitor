import type { Mediator } from "../patterns/mediator/Mediator";
import type { Componente } from "./Componente";

export class PanelVentas implements Componente{
    mediador: Mediator;

    constructor(mediador: Mediator){
        this.mediador = mediador;
    }
}