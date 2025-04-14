import gsap from "gsap";
import { useRef, useState } from "react";


export default function LuxeVideo({ onFinish }) {
    const introRef = useRef(null);
  
    return (
      <>
          <video
            ref={introRef}
            src="https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/videos/CarIntroVideo%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQ2FySW50cm9WaWRlbyAoMSkubXA0IiwiaWF0IjoxNzQ0NjExNzI3LCJleHAiOjIwNTk5NzE3Mjd9.hlAVXkSzvRr0JCnPY09V-zNEByMz1gxEDQvkUkbzbkI"
            autoPlay
            muted
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover z-[99999] opacity-0 transition-opacity duration-1000"
            onLoadedData={() => {
              gsap.to(introRef.current, { opacity: 1, duration: 1 });
            }}
            onEnded={() => {
              gsap.to(introRef.current, { opacity: 0, duration: 1, onComplete: () => {
                onFinish(); // Call the onFinish function to proceed
              }});
            }}
          />
        
      </>
    );
  }
  