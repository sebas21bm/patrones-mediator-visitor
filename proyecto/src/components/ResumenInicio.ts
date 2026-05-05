import type { Mediator } from "../patterns/mediator/Mediator.js";
import type { Componente } from "./Componente.js";

export class ResumenInicio implements Componente{
    private mediador?: Mediator;

    setMediator(mediador: Mediator): void {
        this.mediador = mediador;
    }

    mostrarUltimosDatosUsuario(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void {
        document.getElementById("totalUsuariosInicio")!.textContent = metricas.totalUsuario.toString();
        document.getElementById("cuentasPremiumInicio")!.textContent = metricas.cuentasPremium.toString();
    }

    mostrarUltimosDatosVentas(metricas: {
        totalVentas: number,
        gastoPromedio: number,
        diaMasFrecuente: string,
        facturasGeneradas: number;
    }): void {
        document.getElementById("totalVentasInicio")!.textContent = '$'+metricas.totalVentas.toString();
        document.getElementById("gastoPromedioInicio")!.textContent = metricas.gastoPromedio.toFixed(2);
    }
}