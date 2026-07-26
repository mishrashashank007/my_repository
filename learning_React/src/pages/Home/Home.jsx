import React from "react";
import Video from "../Home/video";
import HomeAboveText from "./HomeAboveText";
import HomeHeroText from "./HomeHeroText";
import HomeBottomText from "./HomeBottomText";

function Home() {
  return (
    <div>
      <div className="h-screen w-screen fixed color">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col">
        <HomeAboveText />
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home;