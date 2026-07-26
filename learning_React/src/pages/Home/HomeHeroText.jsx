import React from "react";
import Video from "../Home/video";


export const HomeHeroText = () => {
  return (
    <div
      className="font-[font1] text-[9vw] uppercase text-center leading-[0.9] flex-col mt-[-2.5vw]"
    >
      <div>L'étincelle</div>
      <div className="inline-flex">
        <div>qui</div>
        <div className="h-[7vw] w-[17vw] mx-2 rounded-full overflow-hidden">
          <Video className='h-full w-full object-cover rounded-full' />
        </div>
        <div>génère</div>
      </div>
      <div>la créativité</div>
    </div>
  );
};


export default HomeHeroText;
