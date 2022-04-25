const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cita", require("./routes/cita"));
app.use("/api/config", require("./routes/config"));
app.use("/api/hospital", require("./routes/hospital"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/notificacion", require("./routes/notificaciones"));
app.use("/api/mensaje", require("./routes/mensaje"));
// TODO: CRUD:

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
