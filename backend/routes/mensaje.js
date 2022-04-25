const { Router } = require("express");
const { enviarMensaje, getMensaje } = require("../controllers/mensaje");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

// Enviar mensaje
router.post("/mensajeria/:id",enviarMensaje);
//Mostrar mensaje
router.get("/mostrar/:id", getMensaje);

module.exports = router;