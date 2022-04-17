const { Router } = require("express");
const { getNotificaciones } = require("../controllers/notificaciones");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

// Obtener Notificaciones
router.get("/:id", getNotificaciones);

module.exports = router;