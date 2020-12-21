// Imports
const express = require("express");
const router = express.Router();

const producto = require("../models/productos");
const inventario = require("../models/inventario");
const proveedores = require("../models/proveedores");
const tiendas = require("../models/tiendas");

// Rutas de app

router.get("/", async(req, res) => {
    const Producto = await producto.find();
    console.log(Producto);
    res.json("Funca");
});

module.exports = router;