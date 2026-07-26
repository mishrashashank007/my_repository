import React from "react";
import { Link } from "react-router-dom";

function AboveNav() {
  return (
    <div>
      <div className="justify-between flex text-black px-10 py-5">
        <div className="text-[20px] font-bold"><Link to="/">Khaatabook</Link></div>
        <div className="justify-between flex gap-10 text-black text-1.5xl px-10 ">
          <button className="hover:text-zinc-700 hover:text-[17px] transition-colors"><Link to="/">Home</Link></button>
          <button className="hover:text-zinc-700 hover:text-[17px] transition-color"><Link to="/hisaab">Create New Hisaab</Link></button>
        </div>
      </div>
    </div>
  );
}

export default AboveNav;
