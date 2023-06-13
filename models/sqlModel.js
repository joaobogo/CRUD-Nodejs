const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "QAZwsx9812!",
  database: "cardapio",
  port: 3306,
});

const getAll = async () => {
  const [cardapio] = await connection.execute(
    "SELECT * FROM cardapio.Bebidas;"
  );
  return cardapio;
};

const getById = async (id) => {
  const query =  "SELECT * FROM cardapio.Bebidas WHERE id = ?;"
  const variables = [id];
  const [bebida] = await connection.execute(query, variables);
  return bebida;
}

const create = async (bebida) => {
  const query =
    "INSERT INTO cardapio.Bebidas (id, name, price) VALUES (?, ?, ?);";
  const variables = [bebida.id, bebida.name, bebida.price];
  await connection.execute(query, variables);
  const cardapio = await getAll();
  return cardapio;
};

const update = async (bebida) => {
  const query = "UPDATE cardapio.Bebidas SET name = ?, price =? WHERE id =?;";
  const variables = [bebida.name, bebida.price, bebida.id];
  await connection.execute(query, variables);
  const cardapio = await getAll();
  return cardapio;
};

const remove = async (bebida) => {
 const query = "DELETE FROM cardapio.Bebidas WHERE id =?;";
 const variables = [bebida.id];
 await connection.execute(query, variables);
 const cardapio = await getAll();
 return cardapio;
};


module.exports = {
  getAll,
  create,
  update,
  remove,
  getById,
};
