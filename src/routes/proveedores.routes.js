const express = require("express");
const router = express.Router();

const proveedores = require("../models/proveedores");

// Headers

router.get("/", (req, res) => {
    proveedores
        .find()
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.get("/:id", (req, res) => {
    proveedores
        .findById(req.params.id)
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.post("/", (req, res) => {
    proveedores
        .create(req.body)
        .then((data) => res.send(data))
        .status(201);
});

router.put("/:id", (req, res) => {
    proveedores
        .findByIdAndUpdate(req.params.id, req.body)
        .status(204)
        .then((data) => res.send(data));
});

router.delete("/:id", (req, res) => {
    proveedores
        .findOneAndDelete(req.params.id)
        .exec()
        .then((data) => res.send(204));
});

module.exports = router;