const mongoose = require("mongoose");
const { DB_USER, DB_PASS, LINK } = require("../");

mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}${LINK}`
);

module.exports = mongoose;
