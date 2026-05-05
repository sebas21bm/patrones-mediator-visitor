import { Usuario } from "../elements/Usuario.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";

export async function cargarDatosUsuarios() {
    const usuariosData = await fetch("../data/usuarios.json").then(res => res.json());

    const usuarios = usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    );
    
    const visitorMetricas = new VisitorMetricas();
    const visitorAlertas = new VistorAlertas();
    
    for (const usuario of usuarios){
        usuario.accept(visitorMetricas);
        usuario.accept(visitorAlertas);
    }
    
    return {
        metricas : visitorMetricas.getMetricasUsuario(),
        alerta : visitorAlertas.getAlertasUsuario()
    }
}