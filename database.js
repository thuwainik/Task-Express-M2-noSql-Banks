const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {}
};

module.exports = connectDB;
