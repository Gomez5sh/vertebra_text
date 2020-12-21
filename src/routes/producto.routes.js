const express = require("express");
const router = express.Router();
const poducto = require("../models/productos");

// Headers

router.get("/", (req, res) => {
    producto
        .find()
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.get("/:id", (req, res) => {
    producto
        .findById(req.params.id)
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.post("/", (req, res) => {
    producto
        .create(req.body)
        .then((data) => res.send(data))
        .status(201);
});

router.put("/:id", (req, res) => {
    producto.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.sendStatus(204);
    });
});

router.delete("/:id", (req, res) => {
    producto
        .findOneAndDelete(req.params.id)
        .exec()
        .then((data) => res.send(204));
});

module.exports = router;