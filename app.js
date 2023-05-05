require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const usersRoutes = require("./routes/usersRoutes");
const loginRoutes = require("./routes/loginRoutes")


const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/cadastro",usersRoutes);
app.use("login", loginRoutes);


module.exports = app;