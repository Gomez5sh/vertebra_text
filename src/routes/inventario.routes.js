const express = require("express");
const router = express.Router();

const inventario = require("../models/inventario");

// Headers

router.get("/", (req, res) => {
    inventario
        .find()
        .exec()
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

router.get("/:id", (req, res) => {
    inventario
        .findById(req.params.id)
        .exec()
        .then((data) => res.status.send(data))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

router.post("/", (req, res) => {
    inventario
        .create(req.body)
        .then((data) => res.status(201).send(data))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

router.put("/:id", (req, res) => {
    inventario
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

router.delete("/:id", (req, res) => {
    inventario
        .findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error });
        });
});

module.exports = router;