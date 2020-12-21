const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductosSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: [true, "Coloque nombre del producto"],
        min: 6,
        max: 255,
    },
    Descripción: {
        type: String,
        require: [true, "Descripción del producto"],
        min: 6,
        max: 500,
    },
    Sku: {
        type: Number,
        require: [true, "NUmero SKU"],
        min: 1,
        max: 9999,
    },
    Unidad_de_medida: {
        type: Number,
        require: [true, "Unidad de medida"],
    },
    Cantidad_por_unidad: {
        type: Number,
        require: [true, "Cantidad de medida"],
    },
    Refrigerado: {
        type: Boolean,
        default: true,
    },
    proveedoresID: [{
        type: Schema.Types.ObjectId,
        ref: "ProveedoresSchema",
    }, ],
});

module.exports = mongoose.model("Productos", ProductosSchema);