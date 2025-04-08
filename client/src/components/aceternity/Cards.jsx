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
          `group mt-10 cursor-pointer overflow-hidden relative card h-[500px] w-[320px] rounded-md shadow-xl mx-auto flex flex-col justify-end border border-transparent dark:border-neutral-800`
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
        <div className="text relative z-50 p-2 h-full w-full flex flex-col justify-end ">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 absolute top-0 py-4 ">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4 text-center ">
            {description}
          </p>
          <div className="flex justify-center items-center">

          <button className="rounded-full h-10 w-30 bg-gradient-to-r from-black to-gray-900 text-white text-center cursor-pointer border-2 border-gold-500 transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-90 shadow-lg hover:shadow-2xl " onClick={() => navigate(link)}>View 3D</button>
          </div>
        </div>
      </div>
    </div>
  );
}