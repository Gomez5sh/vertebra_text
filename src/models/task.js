const mongoose = require("mongoose");
const { Schema } = mongoose;

const Productos = mongose.schema(
    "Productos",
    new Schema({
        Name: string,
        Descripción: string,
        Sku: number,
        Unidad_de_medida: number,
        Cantidad_por_unidad: number,
        Refrigerado: boolean,
        Relacionado_con_proveedores: string,
    }),
    "Proveedores",
    new Schema({
        Nit: number,
        Nombre: string,
        Represéntate_legal: string,
        Dirección: any,
    }),
    "Tiendas",
    new Schema({
        Nombre: string,
        Dirección: any,
        Manager: string,
        Numero_de_neveras: number,
        Numero_de_pasillos: number,
        Numero_de_cajas: number,
        Numero_de_pisos: number,
        Metros_cuadrados: any,
        Servicios_extras: string,
    }),
    "Inventario tienda",
    new Schema({
        Relación_con_producto: string,
        cantidad: number,
        Fecha_de_vencimiento: any,
        Fecha_de_compra: any,
        Descuento: number,
    })
);

module.exports =
    Productos,
    Proveedores,
    Tiendas,
    Inventario tienda,