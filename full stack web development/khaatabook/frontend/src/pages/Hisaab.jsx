// frontend/src/pages/Hisaab.jsx
import React, { useState, useEffect } from "react";
import AboveNav from "./AboveNav";
import axios from "axios";
import { useLocation } from "react-router-dom";

// yahan backend ka URL fix kar do
const BACKEND_URL = "http://localhost:3000";

function Hisaab() {
  const [text, setText] = useState("");
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search)
  const fileName = searchParams.get("file"); // null ya filename

  useEffect(() => {
    async function loadFileContent() {
      if (!fileName) return;

      try {
        // IMPORTANT: ab 5173 nahi, direct backend 3000 hit hoga
        const res = await fetch(
          `${BACKEND_URL}/files/${encodeURIComponent(fileName)}`
        );
        const fileText = await res.text();
        setText(fileText);
      } catch (err) {
        console.error("Failed to load file content", err);
      }
    }

    loadFileContent();
  }, [fileName]);

  const handleSave = async () => {
    try {
      // axios ko bhi backend pe hi bhejo
      await axios.post(`${BACKEND_URL}/api/save`, { content: text });
      alert("Saved on server");
      setText("");
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  return (
    <div>
      <AboveNav />
      <div className="ml-10">
        <textarea
          rows="20"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full max-w-[1000px] px-8 py-4 bg-gray-100 border rounded"
          placeholder="Write your message..."
        />
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Hisaab;
