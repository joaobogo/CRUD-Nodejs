
const express = require("express");
const drinkController = require("./controllers/drinkController")
const bodyValidation = require("./middlewares/bodyValidation")
const paramsValidation = require("./middlewares/paramsValidation")
const router = express.Router();



router.get("/cardapio", drinkController.getAll);

router.post("/bebida", bodyValidation, drinkController.create);

router.put("/bebida", bodyValidation, drinkController.update);

router.delete("/bebida/:id", paramsValidation, drinkController.remove);

module.exports = router;
