const { Router } = require("express");
const { enviarMensaje, getEnviarMensaje, getRecibirMensaje } = require("../controllers/mensaje");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

// Enviar mensaje
router.post("/mensajeria/:id",enviarMensaje);
//Mostrar mensaje
router.get("/enviar/:id", getEnviarMensaje);
router.get("/recibir/:id", getRecibirMensaje);

module.exports = router;