import type { Componente } from "../../components/Componente";

export interface Mediator{
    notificar(Componente : Componente): void;
}