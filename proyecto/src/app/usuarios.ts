import { Usuario } from "../elements/Usuario";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas";

const usuariosData = await fetch("/proyecto/src/data/usuarios.json").then(res => res.json());

const Usuarios = [
    usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    )
];

Usuarios.forEach(usuario => {
    usuario.accept(VisitorMetricas);
});