import type { Mediator } from "../patterns/mediator/Mediator.js";
import type { Componente } from "./Componente";

export class ResumenInicio implements Componente{
    private mediador?: Mediator;

    setMediator(mediador: Mediator): void {
        this.mediador = mediador;
    }
}