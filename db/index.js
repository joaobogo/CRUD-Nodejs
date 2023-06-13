const mongoose = require("mongoose");

const main = async () => {
  try {
    mongoose.set("strictQuery",true)
    await mongoose.connect(
      "mongodb+srv://joaoluciano98:1234@drinks.gaajfpw.mongodb.net/?retryWrites=true&w=majority"
    ); console.log("conectado")
  } catch (error) {
    console.log(error);
  }
};


module.exports = main