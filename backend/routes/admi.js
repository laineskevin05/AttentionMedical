const { Router } = require("express");
const { getUsuario, getHospital, modCuentactiva } = require("../controllers/admi");

const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

// Obtener citas
router.get("/obtusu", getUsuario);

router.get("/obthosp", getHospital);

router.put("/benearCuenta", modCuentactiva);

module.exports= router;