import type { Mediator } from "../patterns/mediator/Mediator.js";

export class Componente{

    mediador: Mediator | undefined;
    
    setMediator(mediador: Mediator): void {
        this.mediador = mediador;
    }
}