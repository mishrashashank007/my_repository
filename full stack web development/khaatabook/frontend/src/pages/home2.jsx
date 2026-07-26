// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import AboveNav from "./AboveNav";
import Button from "./button";
import { Link } from "react-router-dom";

function Home() {
  const [savedTextOfFiles, setSavedTextOfFiles] = useState([]);

  useEffect(() => {
    async function loadText() {
      try {
        const res = await fetch("/api/files");
        const fileList = await res.json();
        if (fileList.files) {
          setSavedTextOfFiles((fileList.files.slice().reverse()).body); // newest first
        }
      } catch (err) {
        console.error("Failed to load files", err);
      }
    }
    loadText();
  }, []);

  return (
    <div>
      <AboveNav />
      <div className="grid grid-cols-1 gap-4 ml-9 justify-items-start">
        <div className="mt-1 font-bold">All Hisaab Kitaab</div>

        <div className="flex flex-col gap-2 mt-3 w-full">
          {savedTextOfFiles.length === 0 && (
            <div className="text-sm text-gray-500">No files yet</div>
          )}

          {savedTextOfFiles.map((file) => (
            <Button
              key={file}
              label={file}
              href={`http://localhost:3000/files/${encodeURIComponent(file)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
