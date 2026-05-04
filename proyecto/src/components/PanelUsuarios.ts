import type { Mediator } from "../patterns/mediator/Mediator.js";
import type { Componente } from "./Componente";

export class PanelUsuarios implements Componente{
    private mediador?: Mediator;

    setMediator(mediador: Mediator): void {
        this.mediador = mediador;
    }

    actualizarMetricas(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void{
        document.getElementById("totalUsuarios")!.textContent = metricas.totalUsuario.toString();
        document.getElementById("promedioActivos")!.textContent = metricas.promedioActivos.toString();
        document.getElementById("promedioPedidos")!.textContent = metricas.promedioCompras.toString();
        document.getElementById("cuentasPremium")!.textContent = metricas.cuentasPremium.toString();
    }

}