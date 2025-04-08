"use client";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
 
export function Cards({imgUrl, gifUrl, title, description, link, props}) {

    // console.log("gif", imgUrl);
    const navigate = useNavigate();

    // console.log("img", imgUrl);
    // console.log("gif", gifUrl);
  return (
    <div className="max-w-xs w-full">
      
      <div
        className={cn(
          `group w-full  cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end border border-transparent dark:border-neutral-800`
  )}  
        
      >
       <img src={`${imgUrl}`} alt="" className="absolute h-full w-full object-cover group-hover:opacity-0 transition-all duration-500 ease-in-out"  /> 
       <img
        src={`${gifUrl}`} 
        autoPlay
        loop
        // muted
        className="absolute h-full w-full object-cover group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out"
        // style={{ display: "none" }}
      />
        <div className="text relative z-50 p-2">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
          <div className="flex justify-center items-center">

          <button className="rounded-full h-10 w-30 bg-white backdrop-blur-2xl opacity-50 text-center text-black" onClick={() => navigate(link)}>View 3d</button>
          </div>
        </div>
      </div>
    </div>
  );
}