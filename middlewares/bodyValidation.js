const bodyValidation = (req, res, next) => {
  const {name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "name,price" });
  }
  return next();
};

module.exports = bodyValidation