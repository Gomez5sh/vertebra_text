const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventarioSchema = new mongoose.Schema({
    cantidad: {
        type: Number,
        require: [true, "Coloque la cantidad"],
        min: 1,
        max: 1000,
    },
    Fecha_de_vencimiento: {
        type: Date,
        default: Date.now,
    },
    Fecha_de_compra: {
        type: Date,
        default: Date.now,
    },
    Descuento: {
        type: Number,
        require: [false, "Coloque el descuento"],
        min: 1,
        max: 150,
    },
    proveedoresID: [{
        type: Schema.Types.ObjectId,
        ref: "Productos",
    }, ],
});

module.exports = mongoose.model("Inventario", InventarioSchema);