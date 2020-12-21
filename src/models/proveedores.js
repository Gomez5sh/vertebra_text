const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProveedoresSchema = new mongoose.Schema({
    proveedoresID: [{
        type: Schema.Types.ObjectId,
        ref: "Productos",
    }, ],
    Nit: {
        type: Number,
        require: [true, "NUmero SKU"],
        min: 4,
        max: 9999,
    },
    Nombre: {
        type: String,
        require: [true, "Coloque el Nombre"],
        min: 6,
        max: 255,
    },
    Represéntate_legal: {
        type: String,
        require: [true, "NOmbre representante legal"],
        min: 6,
        max: 255,
    },
    Dirección: {
        type: Number,
        require: [true, "Coloque la direccion"],
        min: 4,
        max: 150,
    },
});

module.exports = mongoose.model("Proveedores", ProveedoresSchema);