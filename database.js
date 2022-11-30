async function main() {
  const mongoose = require("mongoose");
  await mongoose.connect("mongodb://localhost:27017/transfer");
}

module.exports = main;
