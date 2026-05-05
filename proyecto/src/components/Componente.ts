import type { Mediator } from "../patterns/mediator/Mediator.js";

export interface Componente{
    mediador: Mediator | undefined
    setMediator(mediador: Mediator): void;
}