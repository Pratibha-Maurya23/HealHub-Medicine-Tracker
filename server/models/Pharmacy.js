const mongoose = require('mongoose');
const pharmacySchema = new mongoose.Schema({
  name: String,
  location: String,
  medicines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Medicine" }]
});
module.exports = mongoose.model("Pharmacy", pharmacySchema);
