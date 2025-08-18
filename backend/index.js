const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const Vendor = require("./models/Vendor");
const Provider = require("./models/Provider");

const app = express();
app.use(express.json());
const allowedOrigins = [
  "https://thela-mart.vercel.app",
  "https://thela-mart.vercel.app/",    // allow with slash too
  "http://localhost:5173/"
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET","POST","PATCH","DELETE","OPTIONS","PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

connectDB();

app.patch("/provider/items-by-email", async (req, res) => {
  try {
    const { email, items } = req.body;
    const updated = await Provider.findOneAndUpdate(
      { email },
      { items },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: "Provider not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating items");
  }
});

// In your Express backend
app.patch('/provider/remove-item', async (req, res) => {
  const { email, itemId } = req.body;
  try {
    const result = await Provider.updateOne(
      { email },
      { $pull: { items: { _id: itemId } } }
    );
    const updatedUser = await Provider.findOne({ email });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});


// Vendor signup
app.post("/vendor", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const vendor = await Vendor.create({ name, email, password, phone });
    res.status(201).json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving vendor");
  }
});

// Provider signup
app.post("/provider", async (req, res) => {
  const { name, email, password, fssai, phone, items = [] } = req.body;
  try {
    const provider = await Provider.create({ name, email, password, fssai, phone, items });
    res.status(201).json(provider);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving provider");
  }
});

// View all vendors
app.get("/vendors", async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching vendors");
  }
});

// View all providers
app.get("/providers", async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching providers");
  }
});



app.listen(process.env.PORT || 5000, () => console.log("Server running on port", process.env.PORT || 5000));
