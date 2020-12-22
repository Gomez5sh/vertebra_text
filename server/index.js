// Imports

const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

// Routes

const product = require("./routes/products.routes");
const inventory = require("./routes/inventory.routes");
const suppliers = require("./routes/suppliers.routes");
const store = require("./routes/store.routes");

//Database

const { mongoose } = require("./database");

// Defautl PORT

app.set("port", process.env.PORT || 8080);

// Midelware
// Respuestas en consola con prioridad sobre rutas

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Use Routes

app.use("/api/product", product);
app.use("/api/inventory", inventory);
app.use("/api/suppliers", suppliers);
app.use("/api/store", store);

// Satatic Files
// Enviando react a ruta principal de app

app.use(express.static(path.join(__dirname, "public")));

// Start Server

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});