let accounts = require("./accounts");
const express = require("express");
const connectDB = require("./database");
const accountsRoutes = require("./api/accounts/accounts.routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/accounts", accountsRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
