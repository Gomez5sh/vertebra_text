const mongoose = require("mongoose");
const { Schema } = mongoose;

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Coloque nombre del producto"],
        min: 6,
        max: 255,
    },
    address: {
        type: Number,
        require: [true, "Coloque la direccion"],
        min: 4,
        max: 150,
    },
    manager: {
        type: String,
        require: [true, "Coloque manager"],
        min: 1,
        max: 255,
    },
    number_of_refrigerators: {
        type: Number,
        require: [false, "Num de neveras"],
        min: 1,
        max: 9999,
    },
    number_of_corridors: {
        type: Number,
        require: [false, "Num de pasillos"],
        min: 1,
        max: 9999,
    },
    number_of_box: {
        type: Number,
        require: [false, "Num de cajas"],
        min: 1,
        max: 9999,
    },
    number_of_floors: {
        type: Number,
        require: [false, "Num de pisos"],
        min: 1,
        max: 9999,
    },
    square_meters: {
        type: Number,
        require: [true, "Coloque metros cuadrados"],
        min: 1,
        max: 150,
    },
    extra_services: {
        type: String,
        require: [false, "Coloque si tuvo alguns servicio extra"],
    },
});

module.exports = mongoose.model("Stores", storeSchema);