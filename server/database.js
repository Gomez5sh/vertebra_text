const mongoose = require("mongoose");
const URI = "mongodb://localhost/crud-api";

mongoose
    .connect(URI)
    .then((db) => console.log("DB is ON"))
    .catch((err) => console.log(err));

module.exports = mongoose;