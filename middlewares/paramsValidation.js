const fs = require("fs").promises;
const path = "./registration.json";

const paramsValidation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Please add id" });
  }
  const registration = await fs.readFile(path, "utf-8");
  const registrationJSON = JSON.parse(registration);
  const patientExists = registrationJSON.patients.some((patient) => patient.id === Number(id));
  if(patientExists){
    return next();
  }
  return res.status(404).json({ error: "Patient not found" });
};

module.exports = paramsValidation
