import { Componente } from "./Componente.js";

export class ResumenInicio extends Componente{

    mostrarUltimosDatosUsuario(metricas: {
        totalUsuario: number;
        promedioActivos: number;
        promedioCompras: number;
        cuentasPremium: number;
    }): void {
        document.getElementById("totalUsuariosInicio")!.textContent = metricas.totalUsuario.toString();
        document.getElementById("promedioActivosInicio")!.textContent = metricas.promedioActivos.toFixed(1)+"%"
    }

    mostrarUltimosDatosVentas(metricas: {
        totalVentas: number,
        gastoPromedio: number,
        diaMasFrecuente: string,
        facturasGeneradas: number;
    }): void {
        document.getElementById("totalVentasInicio")!.textContent = metricas.totalVentas.toString();
        document.getElementById("gastoPromedioInicio")!.textContent = '$'+metricas.gastoPromedio.toFixed(2);
    }

    mostrarAlerta(alerta: string): void {
        const alertBox = document.getElementById("alertBox");
        const alertContent = document.getElementById("alertContent");

        if (!alertBox || !alertContent) {
            return;
        }

        if (!alerta) {
            return;
        }

        alertBox.style.display = "flex";

        const mensaje = document.createElement("div");
        mensaje.textContent = alerta;

        alertContent.appendChild(mensaje);
    }

    limpiarAlertas(): void {
        const alertBox = document.getElementById("alertBox");
        const alertContent = document.getElementById("alertContent");

        if (!alertBox || !alertContent) {
            return;
        }

        alertContent.innerHTML = "";
        alertBox.style.display = "none";
    }
}