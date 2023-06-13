
const express = require("express");
<<<<<<< HEAD
const drinkController = require("./controllers/drinkController")
const bodyValidation = require("./middlewares/bodyValidation")
const paramsValidation = require("./middlewares/paramsValidation")
const router = express.Router();



router.get("/cardapio", drinkController.getAll);

router.post("/bebida", bodyValidation, drinkController.create);

router.put("/bebida", bodyValidation, drinkController.update);

router.delete("/bebida/:id", paramsValidation, drinkController.remove);
=======
const bodyValidation = require("./middlewares/bodyValidation");
const paramsValidation = require("./middlewares/paramsValidation");

const router = express.Router();
const path = "./registration.json";

router.get("/patient", async (_req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  res.status(200).json(JSON.parse(registration));
});

router.post("/patient", bodyValidation, async (req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const { id, name, birthday, email, address } = req.body;
  let patients = registrationJSON.patients;
  patients.push({ id, name, birthday, email, address });
  registrationJSON.patients = patients;
  await fs.writeFile(path, JSON.stringify(registrationJSON));
  res.status(201).json(registrationJSON);
});

router.put("/patient", bodyValidation, async (req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const { id, name, birthday, email, address } = req.body;
  let patients = registrationJSON.patients;
  patients = patients.map((item) => {
    if (item.id === Number(id)) {
      return { id, name, birthday, email, address };
    }
    return item;
  });
  registrationJSON.patients = patients;
  await fs.writeFile(path, JSON.stringify(registrationJSON));
  res.status(204).json(registrationJSON);
});

router.delete("/patient/:id", paramsValidation, async (req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const { id } = req.params;
  let patients = registrationJSON.patients;
  patients = patients.filter((item) => {
    return item.id !== Number(id);
  });
  registrationJSON.patients = patients;
  await fs.writeFile(path, JSON.stringify(registrationJSON));
  res.status(204).json(registrationJSON);
});
>>>>>>> ae950adaab335952d2fedd7bf88ab5af23c5a4cb

module.exports = router;
