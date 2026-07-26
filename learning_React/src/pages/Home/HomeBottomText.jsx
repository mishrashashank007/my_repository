import React from "react";
import { Link } from 'react-router-dom';


function HomeBottomText() {
  return (
    <div
      className="font-[font2] text-[5vw] uppercase text-center 
      inline-flex mt-auto mb-[10px] gap-x-10 justify-center "
    >
      <Link
        className='rounded-full border-4 border-white h-[70px] px-4
         flex items-center pt-[25px] pb-[18px]  hover:border-green-400 hover:text-green-400'
        to='/projects'
      >
        PROJECTS
      </Link>

      <Link
        className='rounded-full border-4 border-white h-[70px] px-4
         flex items-center pt-[25px] pb-[18px]  hover:border-green-400 hover:text-green-400'
        to='/Agence'
      >
        AGENCE
      </Link>
    </div>
  );
}

export default HomeBottomText;
