import type { Componente } from "../../components/Componente.js";

export interface Mediator{
    notificar(Componente : Componente): void;
}