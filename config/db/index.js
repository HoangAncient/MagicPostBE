const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_LINK } = require("../");

mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS + DB_LINK}`
);

//mongodb+srv://MagicPost:12345@magicpost.c17ghyd.mongodb.net/?retryWrites=true&w=majority
module.exports = mongoose;
