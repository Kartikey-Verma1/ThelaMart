const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    fssai: String,
    phone: Number,
    items: [
        {
            name: String,
            price: Number,
            description: String,
        }
    ],
});

module.exports = mongoose.model("Provider", ProviderSchema);

