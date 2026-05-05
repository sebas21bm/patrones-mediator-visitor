import type { Mediator } from "../patterns/mediator/Mediator.js";

export interface Componente{
    setMediator(mediador: Mediator): void;
}