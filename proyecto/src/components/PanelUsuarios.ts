import type { Mediator } from "../patterns/mediator/Mediator.js";
import { Componente } from "./Componente.js";

export class PanelUsuarios extends Componente{

    actualizarMetricas(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void{
        document.getElementById("totalUsuarios")!.textContent = metricas.totalUsuario.toString();
        document.getElementById("promedioActivos")!.textContent = metricas.promedioActivos.toFixed(1)+"%";
        document.getElementById("promedioPedidos")!.textContent = metricas.promedioCompras.toFixed(2);
        document.getElementById("cuentasPremium")!.textContent = metricas.cuentasPremium.toString();
    }

    btnActualizarOnClick(): void{
        const boton = document.getElementById("btn_actualizarUsuarios");
        
        boton!.addEventListener("click", () => {
            this.mediador?.notificar(this, "actualizar");
        })
    }

}