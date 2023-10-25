let accounts = require("./accounts");
const express = require("express");
const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");
const connectDB = require("./database");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/accounts", accountsRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
