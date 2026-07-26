// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import AboveNav from "./AboveNav";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function Home() {
  const [savedFiles, setSavedFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFiles() {
      try {
        const res = await fetch("/api/files");
        const data = await res.json();

        // backend se aata hai: { files: ["20 Jan 2025.txt", ...] }
        if (data.files) {
          setSavedFiles(data.files.slice().reverse()); // newest first
        }
      } catch (err) {
        console.error("Failed to load files", err);
      }
    }
    loadFiles();
  }, []);

  return (
    <div>
      <AboveNav />
      <div className="grid grid-cols-1 gap-4 ml-9 justify-items-start">
        <div className="mt-1 font-bold">All Hisaab Kitaab</div>

        <div className="flex flex-col gap-2 mt-3 w-full">
          {savedFiles.length === 0 && (
            <div className="text-sm text-gray-500">No files yet</div>
          )}

          {savedFiles.map((file) => (
            <Button
              key={file}
              label={file}
              // YAHAN SIRF onClick de rahe hain, href NAHI
              onClick={() =>
                navigate(`/hisaab?file=${encodeURIComponent(file)}`)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
