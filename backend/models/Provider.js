const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    fssai: String,
    items: [String],
});

module.exports = mongoose.model("Provider", ProviderSchema);

