const mongoose = require("mongoose");
const { LINK } = require("../");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.LINK);

module.exports = mongoose;
