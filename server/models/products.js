const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Coloque nombre del producto"],
        min: 6,
        max: 255,
    },
    description: {
        type: String,
        require: [true, "Descripción del producto"],
        min: 6,
        max: 500,
    },
    sku: {
        type: Number,
        require: [true, "NUmero SKU"],
        min: 1,
        max: 9999,
    },
    unit_measurement: {
        type: Number,
        require: [true, "Unidad de medida"],
    },
    unidad_quantity: {
        type: Number,
        require: [true, "Cantidad de medida"],
    },
    refrigerated: {
        type: Boolean,
        default: true,
    },
    suppliers_ID: [{
        type: Schema.Types.ObjectId,
        ref: "ProveedoresSchema",
    }, ],
});

module.exports = mongoose.model("Products", productsSchema);