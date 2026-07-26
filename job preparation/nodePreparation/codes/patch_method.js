const express = require("express");
const app = express();
const fs = require("fs");
const data = require("./MOCK_DATA.json");

const PORT = 8000;

// GET Route
app.get("/users", (req, res) => {
  return res.json(data);
});

// PATCH Route
// URL mein ':id' likhne ka matlab hai ki yeh hissa dynamic hai
app.patch("/users/:id", (req, res) => {
  
  // 1. URL se ID nikalo (String aati hai, isliye Number() se convert kiya)
  const idToUpdate = Number(req.params.id); 
  
  // 2. HARDCODED UPDATE DATA: Jo change karna hai woh humne yahi fix kar diya
  const hardcoded_update = {
    email: "shashank.new_hardcoded@gmail.com",
    job_title: "Node.js Developer"
  };

  // 3. Array mein us ID wale user ko dhundo (.findIndex ka use karke)
  const userIndex = data.findIndex(user => user.id === idToUpdate);

  // Agar user list mein nahi mila (index -1 aaya) toh error de do
  if (userIndex === -1) {
    return res.status(404).json({ error: "User nahi mila!" });
  }

  // 4. Purane data par naya hardcoded data chadha do (Merge kar do)
  // Spread operator (...) purane data ki copy banata hai aur naya data overwrite kar deta hai
  const updatedUser = { ...data[userIndex], ...hardcoded_update };
  data[userIndex] = updatedUser; // Array mein nayi value update kar di

  // 5. Ab is updated array ko wapas file mein permanently save kar do
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({ status: "Error", message: "File save nahi hui" });
    }
    
    // Save hone ke baad success message bhej do
    return res.status(200).json({ status: "Success", user: updatedUser });
  });
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);