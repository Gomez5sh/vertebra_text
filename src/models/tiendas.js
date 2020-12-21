const mongoose = require("mongoose");
const { Schema } = mongoose;

const TiendasSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: [true, "Coloque nombre del producto"],
        min: 6,
        max: 255,
    },
    Dirección: {
        type: Number,
        require: [true, "Coloque la direccion"],
        min: 4,
        max: 150,
    },
    Manager: {
        type: String,
        require: [true, "Coloque manager"],
        min: 1,
        max: 255,
    },
    Numero_de_neveras: {
        type: Number,
        require: [false, "Num de neveras"],
        min: 1,
        max: 9999,
    },
    Numero_de_pasillos: {
        type: Number,
        require: [false, "Num de pasillos"],
        min: 1,
        max: 9999,
    },
    Numero_de_cajas: {
        type: Number,
        require: [false, "Num de cajas"],
        min: 1,
        max: 9999,
    },
    Numero_de_pisos: {
        type: Number,
        require: [false, "Num de pisos"],
        min: 1,
        max: 9999,
    },
    Metros_cuadrados: {
        type: Number,
        require: [true, "Coloque metros cuadrados"],
        min: 1,
        max: 150,
    },
    Servicios_extras: {
        type: String,
        require: [false, "Coloque si tuvo alguns servicio extra"],
    },
});

module.exports = mongoose.model("Tiendas", TiendasSchema);