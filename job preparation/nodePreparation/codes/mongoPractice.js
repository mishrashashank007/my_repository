// 1. DUKAAN KE TOOLS (Imports)
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// 2. DATABASE CONNECTION (Warehouse se judna)
mongoose
  .connect("mongodb://127.0.0.1:27017/myFirstApp")
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error: ", err));

// 3. SCHEMA AUR MODEL (Data ke rules aur tools)
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    gender: { type: String },
    job_title: { type: String },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);

// 4. MIDDLEWARES (Aane wale data ko saaf karna)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ==========================================
// 5. ROUTES / APIs (Dukaan ke counters)
// ==========================================

// CREATE User
app.post("/api/users", async (req, res) => {
  const body = req.body;

  if (!body || !body.first_name || !body.email) {
    return res.status(400).json({ msg: "First name aur email zaroori hai!" });
  }

  try {
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    return res.status(201).json({ msg: "User created", user: result });
  } catch (error) {
    return res.status(500).json({ error: "Duplicate email ya error" });
  }
});

// READ All Users
app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

// READ Single User by ID
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
});

// UPDATE User
app.patch("/api/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.json({ status: "Success", message: "User updated" });
});

// DELETE User
app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success", message: "User deleted" });
});

// 6. SERVER START KARNA
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
