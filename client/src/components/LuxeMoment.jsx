import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { delay } from "motion";

const LuxeMoment = ({ onFinish }) => {
  const [showEnter, setShowEnter] = useState(false);
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  // Animate intro and title first
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(introRef.current, { opacity: 1, duration: 1.5 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, "-=1")
      .call(() => setShowEnter(true)); // trigger button animation
  }, []);

  // Animate the button after it's visible in DOM
  useEffect(() => {
    if (showEnter && buttonRef.current) {
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [showEnter]);

  const handleEnterClick = () => {
    const vroom = new Audio("/sounds/StartSound.mp3");
    console.log("vroom", vroom);
    
    vroom.volume = 0.7;
    vroom.play();
  
    onFinish(); // existing logic to proceed into site
  };

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center opacity-0"
    >
      <h1
        ref={titleRef}
        className="text-white text-4xl font-bold mb-6 opacity-0 translate-y-5 transition-all "
      >
        Welcome to <span className="font-[serif]">
            LUXE
            </span>
      </h1>

      {/* Always render button to avoid layout shift */}
      <button
        ref={buttonRef}
        onClick={handleEnterClick}
        className={`${
          showEnter
            ? "opacity-100 scale-100 pointer-events-auto "
            : "opacity-0 scale-95 pointer-events-none"
        } px-6 py-3 border-2 w-30  text-white font-semibold text-lg rounded-full transition-all duration-500 shadow-md hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.6)]`}
      >
        ENTER
      </button>
    </div>
  );
};

export default LuxeMoment;
