const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || "mongodb://192.168.1.20:27017/petTreatsDB", {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;