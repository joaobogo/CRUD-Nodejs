const sqlModel = require("../models/sqlModel");
const MongoModel = require("../models/mongoModel")

const paramsValidation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Please add id" });
  }
  const bebida = await MongoModel.findById(id);
  if (bebida) {
    return next();
  }
  return res.status(404).json({ error: "Patient not found" });
};

module.exports = paramsValidation;
