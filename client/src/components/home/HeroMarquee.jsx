import { Marquee } from "../../components/magicui/marquee";


const words = [
    "Luxury",
    "Elegance",
    "Precision",
    "Power",
    "Performance",
    "Innovation",
    "Comfort",
    "Prestige",
    "Craftsmanship",
    "Dominance"
  ];
  
  

export function HeroMarquee() {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:40s]">
          {words.map((review) => (
            // <ReviewCard key={review.username} {...review} />
            <h1 className="md:text-6xl text-xl text-white h-[20vh] text-end flex justify-center md:items-center items-start md:mx-8 mx-2 select-none">{review}</h1>
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    );
  }