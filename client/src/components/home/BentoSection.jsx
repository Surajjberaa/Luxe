import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { Particles } from "../magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";


const features = [
    {
        name: "COMFORT",
        description: "Sink In. Feel the Drive.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1 object-cover z-10",
        // ),
        background: (<img className="-z-10 object-cover sm:h-fit h-full " src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744616087/CarGear_jnmifr.jpg" />)
    },
    {
        name: "ELEGANCE",
        description: "Every Curve, A Statement of Grace",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (<img className="-z-10 object-cover md:h-fit h-full" src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744616967/MercedesSideView1_s1seba.jpg" />)

    },
    {
        name: "SPEED",
        description: "Precision in every passing second.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (<img className="-z-10 object-cover md:h-fit h-full" src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744614862/BMWM5_hzjwdn.jpg" />)
    },
    {
        name: "LUXURY",
        description: "Crafted for those who expect more.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (<img className="-z-10" src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744615404/MercedesInside_fc28vt.jpg" />)
    },
];

export default function BentoSection() {


    return (

        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-4 font-[serif] relative">
            <div className="flex md:w-[55%] flex-col items-center justify-center gap-4 px-4 py-4">

                <BentoGrid>
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>

        </div>
    );
}
