const express = require("express");
const router = express.Router();

const tienda = require("../models/tiendas");

// Headers

router.get("/", (req, res) => {
    tienda
        .find()
        .exec()
        .then((data) => res.status(200).send(data));
});

router.get("/:id", (req, res) => {
    tienda
        .findById(req.params.id)
        .exec()
        .then((data) => res.status.send(data));
});

router.post("/", (req, res) => {
    tienda.create(req.body).then((data) => res.status(201).send(data));
});

router.put("/:id", (req, res) => {
    tienda
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
    tienda
        .findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;