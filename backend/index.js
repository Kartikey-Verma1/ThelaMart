const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const Vendor = require("./models/Vendor");
const Provider = require("./models/Provider");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Vendor signup
app.post("/vendor", async (req, res) => {
    const { name, email, fssai, items } = req.body;
    try {
        const vendor = new Vendor({ name, email, fssai, items });
        await vendor.save();
        res.status(201).send("Vendor saved!");
    } catch (err) {
        res.status(500).send("Error saving vendor");
    }
});

// Provider signup
app.post("/provider", async (req, res) => {
    const { name, email, items } = req.body;
    try {
        const provider = new Provider({ name, email, items });
        await provider.save();
        res.status(201).send("Provider saved!");
    } catch (err) {
        res.status(500).send("Error saving provider");
    }
});

// View all vendors
app.get("/vendors", async (req, res) => {
    const vendors = await Vendor.find();
    res.json(vendors);
});

// View all providers
app.get("/providers", async (req, res) => {
    const providers = await Provider.find();
    res.json(providers);
});

app.listen(5000, () => console.log("Server running on port 5000"));
