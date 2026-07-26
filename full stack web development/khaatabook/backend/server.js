// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors()); // safe to keep in dev
app.use(express.json());

app.get("/", (req, res) => res.send("Server is ready"));

// serve saved files for download/open
app.use("/files", express.static(path.join(__dirname, "saved")));

// list saved files for frontend
app.get("/api/files", async (req, res) => {
  try {
    const dir = path.join(__dirname, "saved");
    await fs.mkdir(dir, { recursive: true });
    const files = await fs.readdir(dir);
    res.json({ files });
  } catch (err) {       // Error handling
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/save", async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: "No content" });

    const now = new Date();
    const dateOnly = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const dir = path.join(__dirname, "saved");
    await fs.mkdir(dir, { recursive: true });

    // check if file exists and increment
    let baseName = dateOnly + ".txt";
    let filePath = path.join(dir, baseName);
    let counter = 2;

    while (true) {
      try {
        await fs.access(filePath); // file exists
        baseName = `${dateOnly} (${counter}).txt`;
        filePath = path.join(dir, baseName);
        counter++;
      } catch {
        break; // file doesn't exist, safe to use
      }
    }

    await fs.writeFile(filePath, content, "utf8");
    res.json({ ok: true, file: baseName });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);