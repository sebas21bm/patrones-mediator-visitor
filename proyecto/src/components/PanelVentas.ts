import type { Mediator } from "../patterns/mediator/Mediator.js";
import type { Componente } from "./Componente";

export class PanelVentas implements Componente{
    private mediador?: Mediator;

    setMediator(mediador: Mediator): void {
        this.mediador = mediador;
    }

    actualizarMetricas(metricas: {
        totalVentas: number,
        gastoPromedio: number,
        diaMasFrecuente: string,
        facturasGeneradas: number;
    }): void{
        document.getElementById("totalVentas")!.textContent = '$'+metricas.totalVentas.toString();
        document.getElementById("gastoPromedio")!.textContent = metricas.gastoPromedio.toFixed(2);
        document.getElementById("diaMasFrecuente")!.textContent = metricas.diaMasFrecuente.toString();
        document.getElementById("facturasGeneradas")!.textContent = metricas.facturasGeneradas.toString();
    }

}