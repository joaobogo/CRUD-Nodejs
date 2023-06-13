const fs = require("fs").promises;
const path = "./cardapio.json";

const getAll = async () => {
  const cardapio = await fs.readFile(path, "utf-8");
  return JSON.parse(cardapio);
};

const create = async (bebida) => {
  const cardapioJSON = await getAll();
  let bebidas = cardapioJSON.bebidas;
  bebidas.push(bebida);
  cardapioJSON.bebidas = bebidas;
  await fs.writeFile(path, JSON.stringify(cardapioJSON));
  return cardapioJSON;
};

const update = async (bebida) => {
  const cardapioJSON = await getAll();
  let bebidas = cardapioJSON.bebidas;
  bebidas = bebidas.map((item) => {
    if (item.id == bebida.id) {
      return bebida ;
    }
    return item;
  });
  cardapioJSON.bebidas = bebidas;
  await fs.writeFile(path, JSON.stringify(cardapioJSON));
  return cardapioJSON;
};

const remove = async (bebida) => {
    const cardapioJSON = await getAll();
    let bebidas = cardapioJSON.bebidas;
    bebidas = bebidas.filter((item) => {
        return item.id !== Number(bebida.id);
      });
    cardapioJSON.bebidas = bebidas;
    await fs.writeFile(path, JSON.stringify(cardapioJSON));
    return cardapioJSON;
  };
  

module.exports = {
  getAll,
  create,
  update,
  remove,
};
