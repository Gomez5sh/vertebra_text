const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        require: [true, "Coloque la cantidad"],
        min: 1,
        max: 1000,
    },
    expiration_date: {
        type: Date,
        default: Date.now,
    },
    buy_date: {
        type: Date,
        default: Date.now,
    },
    discount: {
        type: Number,
        require: [false, "Coloque el descuento"],
        min: 1,
        max: 150,
    },
    suppliers_ID: [{
        type: Schema.Types.ObjectId,
        ref: "Productos",
    }, ],
});

module.exports = mongoose.model("inventory", inventorySchema);