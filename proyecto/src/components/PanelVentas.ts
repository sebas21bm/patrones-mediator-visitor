import type { Mediator } from "../patterns/mediator/Mediator.js";
import { Componente } from "./Componente.js";

export class PanelVentas extends Componente{

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

    btnActualizarOnClick(): void{
        const boton = document.getElementById("btn_actualizarVentas");
        
        boton!.addEventListener("click", () => {
            this.mediador?.notificar(this, "actualizar");
        })
    }

}