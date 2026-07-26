import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Staircase2({ children }) {
  const [hidden, setHidden] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => setHidden(true), // poora sequence ke baad hi hide
    });
    
    tl.from(".stair", {
      scaleY: 0,
      duration: 0.5,
      ease: "power4.out",
      transformOrigin: "top center",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });

    tl.to(".stair", {
      scaleY: 0,
      duration: 0.4,
      ease: "power4.inOut",
      transformOrigin: "bottom center",
      stagger: {
        each: 0.07,
        from: "end",
      },
    });
  });

  if (hidden) {
    // animation ke baad sirf children render hoga
    return <>{children}</>;
  }

  return (
    <div className="staircase2-wrapper h-screen w-full flex fixed z-50 items-end">
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
      <div className="stair bg-black h-full w-1/5"></div>
    </div>
  );
}

export default Staircase2;
