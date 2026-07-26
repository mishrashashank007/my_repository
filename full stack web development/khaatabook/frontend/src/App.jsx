import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hisaab from "./pages/Hisaab";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hisaab" element={<Hisaab />} />
      </Routes>
    </div>
  );
};

export default App;
