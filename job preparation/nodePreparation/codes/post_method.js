const express = require("express");
const app = express();
const fs = require("fs");
const { Server } = require("http");
const data = require("./MOCK_DATA.json");

const PORT = 8000;

// Aapka banaya hua naya data
const new_entry = {
  id: 1001,
  first_name: "shashank",
  last_name: "mishra",
  email: "mishra3639@gmail.com",
  gender: "Male",
  ip_address: "63.225.14.157",
};

app.post("/users", (req, res) => {
  data.push(new_entry);
  
  // // 2. Updated data ko MOCK_DATA.json mein permanently save karein
  // // JSON.stringify(data) isliye use kiya kyunki file mein text/string format mein save hota hai
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, result) => {
  //   // Agar save karte time koi error aaye
  //   if (err) {
  //     return res.status(500).json({ status: "Error", message: "Data update failed" });
  //   }
    
  //   // 3. Successfully save hone par response bhej dein
  //   return res.status(201).json({ status: "Success", message: "Shashank's data added successfully!" });
  // });
  // return res.status(201).json({ status: "Success", message: "Shashank's data added successfully!" });
});

// GET Route (Data dekhne ke liye)
app.get("/users", (req, res) => {
  return res.json(data);
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);