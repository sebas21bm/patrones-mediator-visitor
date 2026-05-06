import { Usuario } from "../elements/Usuario.js";
import { VistorAlertas } from "../patterns/visitor/VisitorAlertas.js";

export async function revisarAlertasUsuarios() {
    const usuariosData = await fetch("../data/usuarios.json").then(res => res.json());

    const usuarios = usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    );
    
    const visitorAlertas = new VistorAlertas();
    
    for (const usuario of usuarios){
        usuario.accept(visitorAlertas);
    }
    
    return visitorAlertas.getAlertasUsuario()
}