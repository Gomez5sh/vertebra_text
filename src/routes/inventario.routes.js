const express = require("express");
const router = express.Router();

const inventario = require("../models/inventario");

// Headers

router.get("/", (req, res) => {
    inventario
        .find()
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.get("/:id", (req, res) => {
    inventario
        .findById(req.params.id)
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.post("/", (req, res) => {
    inventario
        .create(req.body)
        .then((data) => res.send(data))
        .status(201);
});

router.put("/:id", (req, res) => {
    inventario
        .findByIdAndUpdate(req.params.id, req.body)
        .status(204)
        .then((data) => res.send(data));
});

router.delete("/:id", (req, res) => {
    inventario
        .findOneAndDelete(req.params.id)
        .exec()
        .then((data) => res.send(204));
});

module.exports = router;