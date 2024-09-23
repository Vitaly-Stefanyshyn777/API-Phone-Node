const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Підключено до бази даних");
  } catch (error) {
    console.error("Помилка підключення до бази", error);
  }
};

module.exports = connectDB;
