const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  creation_dt: {
    type: String,
  },
  token: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("authModel", userAuthSchema);
