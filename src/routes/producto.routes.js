const express = require("express");
const router = express.Router();

const producto = require("../models/productos");

// Headers

router.get("/", (req, res) => {
    producto
        .find()
        .exec()
        .then((data) => res.status(200).send(data));
});

router.get("/:id", (req, res) => {
    producto
        .findById(req.params.id)
        .exec()
        .then((data) => res.status.send(data));
});

router.post("/", (req, res) => {
    producto.create(req.body).then((data) => res.status(201).send(data));
});

router.put("/:id", (req, res) => {
    producto
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
    producto
        .findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204));
});

module.exports = router;