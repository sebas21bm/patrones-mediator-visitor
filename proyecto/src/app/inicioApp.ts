import { PanelUsuarios } from "../components/PanelUsuarios.js";
import { Usuario } from "../elements/Usuario.js";
import { Venta } from "../elements/Venta.js";
import { VisitorMetricas } from "../patterns/visitor/VisitorMetricas.js";

const usuariosData = await fetch("/proyecto/src/data/usuarios.json").then(res => res.json());
const ventasData = await fetch("/proyecto/src/data/ventas.json").then(res => res.json());

const Elementos = [
    usuariosData.map(
        (u: any) => new Usuario(
            u.conMembresia,
            u.activo,
            u.totalCompras
        )
    ),

    ventasData.map(
            (v: any) => new Venta(
                v.totalPagado,
                new Date(v.fecha),
                v.facturada
            )
        )
];

Elementos.forEach(elemento => {
    elemento.accept(VisitorMetricas);
});