const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Now listening at http://localhost:${PORT} 🚀`);
});