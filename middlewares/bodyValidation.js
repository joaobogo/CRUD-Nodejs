const bodyValidation = (req, res, next) => {
  console.log(req.body)
  const { id, name, birthday, email, address } = req.body;
  if (!id ||!name || !birthday || !email || !address) {
    return res.status(400).json({ error: "Please add id, name, birthday, email and address" });
  }
  return next();
};

module.exports = bodyValidation