
const sqlModel = require("../models/sqlModel")
const MongoModel = require("../models/mongoModel")

const getAll = async (_req, res) => {
  const cardapio = await MongoModel.find({});
  res.status(200).json(cardapio);
};

const create = async (req, res) => {
  const { name, price } = req.body;
  const cardapio = await MongoModel.create({ name, price });
  res.status(201).json(cardapio);
};

const update = async (req, res) => {
  const { id, name, price } = req.body;
  await MongoModel.findByIdAndUpdate(id,{name, price});
  let bebidas = await MongoModel.find({})
  res.status(201).json(bebidas)
};

const remove = async (req, res) => {
    const { id } = req.params;
    await MongoModel.findByIdAndDelete(id);
    let bebidas = await MongoModel.find({})
    res.status(201).json(bebidas)
  };

module.exports = {
  getAll,
  create,
  update,
  remove,
};
