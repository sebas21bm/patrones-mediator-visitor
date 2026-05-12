import { Usuario } from "../elements/Usuario.js";
import { Venta } from "../elements/Venta.js";
import { VisitorAlertas } from "../patterns/visitor/VisitorAlertas.js";
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

    for (const usuario of usuarios) {
        usuario.accept(visitorMetricas);
    }

    return visitorMetricas.getMetricasUsuario();
}

export async function obtenerMetricasVentas() {
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());

    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitorMetricas = new VisitorMetricas();

    for (const venta of ventas) {
        venta.accept(visitorMetricas);
    } 

    return visitorMetricas.getMetricasVenta();
}

export async function revisarAlertasUsuarios() {
    const usuariosData = await fetch("../data/usuarios.json").then(res => res.json());

    const usuarios = usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    );

    const visitorAlertas = new VisitorAlertas();

    for (const usuario of usuarios) {
        usuario.accept(visitorAlertas);
    }

    return visitorAlertas.getAlertasUsuario();
}

export async function revisarAlertasVentas() {
    const ventasData = await fetch("../data/ventas.json").then(res => res.json());
    
    const ventas = ventasData.map(
        (v: any) => new Venta(
            v.totalPagado,
            new Date(v.fecha),
            v.facturada
        )
    );

    const visitorAlertas = new VisitorAlertas();

    for (const venta of ventas){
        venta.accept(visitorAlertas);
    }

    return visitorAlertas.getAlertasVenta();
}