import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Staircase({ children }) {
  const [hidden, setHidden] = useState(false);

  useGSAP(() => {
    gsap.to(".stair", {
      scaleY: 0,
      duration: 0.8,
      ease: "power4.out",
      transformOrigin: "bottom center",
      stagger: {
        each: 0.2,
        from: "end"
      },
      onComplete: () => {
        // animation khatam hote hi stairs hide ho jayenge
        setHidden(true);
      }
    });
  });

  if (hidden) {
    // animation ke baad sirf children (tumhara actual page) render hoga
    return <>{children}</>;
  }

  return (
    <div className="staircase-wrapper h-screen w-full flex fixed z-50 items-end">
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
    </div>
  );
}

export default Staircase;
