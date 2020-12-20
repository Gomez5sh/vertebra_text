// Imports

const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");

const { mongoose } = require("./database");

// Settings
// Tomar puerto por defecto del servidor o servicio en la nube

app.set("port", process.env.PORT || 8080);

// Midelware
// Respuestas en consola con prioridad sobre rutas

app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/v1", require("./routes/task.routes"));

// Satatic Files
// Enviando react a ruta principal de app

app.use(express.static(path.join(__dirname, "public")));

// Start Server
// Escuchando al seridor en el puerto definido
app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});