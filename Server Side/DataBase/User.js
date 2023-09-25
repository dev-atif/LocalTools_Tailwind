const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
  name: String,
  lastname: String,
 
  number: String,
  country: String,
  email: String,
  pasword: String,
  confirmpasword: String,
  isBusiness: Boolean,
  isCustomer:Boolean,
});

module.exports = mongoose.model("Users", useSchema,'Users');
