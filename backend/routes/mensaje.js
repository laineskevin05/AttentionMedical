const { Router } = require("express");
const {
  enviarMensaje,
  getEnviarMensaje,
  getRecibirMensaje,
  getMensaje,
  crearListaMensaje,
  getListaMensajes,
} = require("../controllers/mensaje");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

// Enviar mensaje
router.post("/mensajeria/:id", enviarMensaje);
//Mostrar mensaje
router.get("/mostrar/:id", getMensaje);

//Crear lista de mensajes
router.post("/crearlistamensajes/:id", crearListaMensaje);

router.get("/listamensajes/:id", getListaMensajes);

module.exports = router;
