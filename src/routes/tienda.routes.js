const express = require("express");
const router = express.Router();

const tienda = require("../models/tiendas");

// Headers

router.get("/", (req, res) => {
    tienda
        .find()
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.get("/:id", (req, res) => {
    tienda
        .findById(req.params.id)
        .exec()
        .then((data) => res.send(data))
        .status(200);
});

router.post("/", (req, res) => {
    tienda
        .create(req.body)
        .then((data) => res.send(data))
        .status(201);
});

router.put("/:id", (req, res) => {
    tienda.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.sendStatus(204);
    });
});

router.delete("/:id", (req, res) => {
    tienda
        .findOneAndDelete(req.params.id)
        .exec()
        .then((data) => res.send(204));
});
module.exports = router;