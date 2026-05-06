import { Usuario } from "../elements/Usuario.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

export async function obtenerMetricasUsuarios() {
    const usuariosData = await fetch("../data/usuarios.json").then(res => res.json());

    const usuarios = usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    );
    
    const visitorMetricas = new VisitorMetricas();
    
    for (const usuario of usuarios){
        usuario.accept(visitorMetricas);
    }
    
    return visitorMetricas.getMetricasUsuario()
}