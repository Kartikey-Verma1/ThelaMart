const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("Vendor", VendorSchema);
