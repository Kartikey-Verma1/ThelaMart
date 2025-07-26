const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kartikv7391:kartikeyverma13022006@cluster0.mqzg5oy.mongodb.net/ThelaMart?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
