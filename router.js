const fs = require("fs").promises;
const express = require("express");
const bodyValidation = require("./middlewares/bodyValidation")
const paramsValidation = require("./middlewares/paramsValidation")
const router = express.Router();
const path = "./cardapio.json";
router.get("/cardapio", async (_req, res) => {
  const cardapio = await fs.readFile(path, "utf-8");
  res.status(200).json(JSON.parse(cardapio));
});

router.post("/bebida", bodyValidation, async (req, res) => {
  const cardapio = await fs.readFile(path, "utf-8");
  const cardapioJSON = JSON.parse(cardapio);
  const { id, name, price } = req.body;
  let bebidas = cardapioJSON.bebidas;
  bebidas.push({ id, name, price });
  cardapioJSON.bebidas = bebidas;
  await fs.writeFile(path, JSON.stringify(cardapioJSON));
  res.status(201).json(cardapioJSON);
});

router.put("/bebida", bodyValidation, async (req, res) => {
  const cardapio = await fs.readFile(path, "utf-8");
  const cardapioJSON = JSON.parse(cardapio);
  const { id, name, price } = req.body;
  let bebidas = cardapioJSON.bebidas;
  bebidas = bebidas.map((item) => {
    if (item.id == id) {
      return { id, name, price };
    }
    return item;
  });
  cardapioJSON.bebidas = bebidas;
  await fs.writeFile(path, JSON.stringify(cardapioJSON));
  res.status(201).json(cardapioJSON);
});

router.delete("/bebida/:id", paramsValidation, async (req, res) => {
  const cardapio = await fs.readFile(path, "utf-8");
  const cardapioJSON = JSON.parse(cardapio);
  const { id } = req.params;
  let bebidas = cardapioJSON.bebidas;
  bebidas = bebidas.filter((item) => {
    return item.id !== Number(id);
  });
  cardapioJSON.bebidas = bebidas;
  await fs.writeFile(path, JSON.stringify(cardapioJSON));
  res.status(201).json(cardapioJSON);
});

module.exports = router;
