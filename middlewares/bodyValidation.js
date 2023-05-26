const bodyValidation = (req, res, next) => {
  const { id, name, price } = req.body;
  if (!id || !name || !price) {
    return res.status(400).json({ error: "Please add id,name,price" });
  }
  return next();
};

module.exports = bodyValidation