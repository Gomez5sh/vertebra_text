const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProveedoresSchema = new mongoose.Schema({
    suppliers_ID: [{
        type: Schema.Types.ObjectId,
        ref: "Productos",
    }, ],
    nit: {
        type: Number,
        require: [true, "NUmero SKU"],
        min: 4,
        max: 9999,
    },
    name: {
        type: String,
        require: [true, "Coloque el Nombre"],
        min: 6,
        max: 255,
    },
    legal_representative: {
        type: String,
        require: [true, "NOmbre representante legal"],
        min: 6,
        max: 255,
    },

    address: {
        type: Number,
        require: [true, "Coloque la direccion"],
        min: 4,
        max: 150,
    },
});

module.exports = mongoose.model("Proveedores", ProveedoresSchema);