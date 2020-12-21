const express = require("express");
const router = express.Router();

// Headers

router.get("/", (req, res) => {
    res.send("GET");
});

router.get("/:id", (req, res) => {
    res.send(req.params.id);
});

router.post("/", (req, res) => {
    res.send("POST");
});

router.put("/:id", (req, res) => {
    res.send("put");
});

router.delete("/:id", (req, res) => {
    res.send("delete");
});

module.exports = router;