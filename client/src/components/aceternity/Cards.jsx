"use client";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
 
export function Cards({imgUrl, gifUrl, title, description, link}) {

    console.log("gif", imgUrl);
    const navigate = useNavigate();

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[./public/videos/buggati-tourbillon.webp] bg-cover bg-[url(${imgUrl})] bg-no-repeat bg-center`,
          
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
          <button className="rounded-full h-10 w-20 bg-gray-500" onClick={() => navigate(link)}>View 3d</button>
        </div>
      </div>
    </div>
  );
}