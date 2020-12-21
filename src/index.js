// Imports

const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Body Parser

app.use(bodyParser.json);

// Routes

const producto = require("./routes/producto.routes");
const inventario = require("./routes/inventario.routes");
const proveedores = require("./routes/proveedores.routes");
const tienda = require("./routes/tienda.routes");

//Database
const { mongoose } = require("./database");

// Settings
// Tomar puerto por defecto del servidor o servicio en la nube

app.set("port", process.env.PORT || 8080);

// Midelware
// Respuestas en consola con prioridad sobre rutas

app.use(morgan("dev"));
app.use(express.json());

// Use Routes

/*app.get("/", (req, res) => {
    console.log("Soy la Raiz");
});
*/

app.use("/api/producto", producto);
app.use("/api/inventario", inventario);
app.use("/api/proveedores", proveedores);
app.use("/api/tienda", tienda);

// Satatic Files
// Enviando react a ruta principal de app

app.use(express.static(path.join(__dirname, "public")));

// Start Server
// Escuchando al seridor en el puerto definido
app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});