import { PanelUsuarios } from "../components/PanelUsuarios.js";
import { Usuario } from "../elements/Usuario.js";
import { DashboardMediator } from "../patterns/mediator/DashboardMediator.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

const usuariosData = await fetch("../data/usuarios.json").then(res => res.json());

const usuarios = usuariosData.map(
    (u: any) => new Usuario(
        u.conMembresia,
        u.activo,
        u.totalCompras
    )
);

const visitor = new VisitorMetricas();

for (const usuario of usuarios){
    usuario.accept(visitor);
}

const metricas = visitor.getMetricasUsuario();

const panelUsuarios = new PanelUsuarios();
const mediador = new DashboardMediator();

panelUsuarios.setMediator(mediador);
mediador.setPanelUsuarios(panelUsuarios);

console.log("prueba");
mediador.actualizarMetricasUsuario(metricas);