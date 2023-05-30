const isDateValid = (date) => {
  try {
    const [month, day, year] = date.split("/");
    return (
      month.length === 2 &&
      Number(month) <= 12 &&
      day.length === 2 &&
      Number(day) <= 31 &&
      year.length === 4
    );
  } catch (error) {
    return false;
  }
};

const bodyValidation = (req, res, next) => {
  const { id, name, birthday, email, address } = req.body;
  if (!id || !name || !birthday || !email || !address) {
    return res
      .status(400)
      .json({ error: "Please add id, name, birthday, email and address" });
  }
  if (isDateValid(birthday)) {
    return next();
  }
  return res
    .status(400)
    .json({ error: "The date should be in the format MM/DD/YYYY" });
};

module.exports = bodyValidation;
