const fs = require("fs").promises;
const path = "./cardapio.json";

const paramsValidation = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Please add id" });
  }
  const cardapio = await fs.readFile(path, "utf-8");
  const cardapioJSON = JSON.parse(cardapio);
  const bebidaExists = cardapioJSON.bebidas.some((bebida) => bebida.id === id);
  if(bebidaExists){
    return next();
  }
  return res.status(404).json({ error: "Drink not found" });
};

module.exports = paramsValidation
