const fs = require("fs").promises;
const express = require("express");
const bodyValidation = require("./middlewares/bodyValidation")
const paramsValidation = require("./middlewares/paramsValidation")


const router = express.Router();
const path = "./registration.json";

router.get("/patient", async (_req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  res.status(200).json(JSON.parse(registration));
});

router.post("/patient", bodyValidation, async (req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const { id,name, birthday, email, address } = req.body;
  let patients = registrationJSON.patients;
  patients.push({ id,name, birthday, email, address });
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
    if (item.id == id) {
      return {id,name, birthday, email, address };
    }
    return item;
  });
  registrationJSON.patients = patients;
  await fs.writeFile(path, JSON.stringify(registrationJSON));
  res.status(201).json(registrationJSON);
});

router.delete("/patient/:id", paramsValidation, async (req, res) => {
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const { id } = req.params;
  let patients = registrationJSON.patients;
  patients = patients.filter((item) => {
    return item.id !== id;
  });
  registrationJSON.patients = patients;
  await fs.writeFile(path, JSON.stringify(registrationJSON));
  res.status(201).json(registrationJSON);
});

module.exports = router;
