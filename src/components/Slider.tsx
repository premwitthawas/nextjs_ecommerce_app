'use client';
import { useEffect, useState } from "react";
import { sliders } from '@/data/slider';
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

function Slider() {
    const [curentSelected, setCurrentSelected] = useState<number>(0);
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         setCurrentSelected((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    //     },3000);
    //     return () => clearInterval(interval);
    // },[])
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div 
            className="w-max h-full flex transition-all ease-in-out duration-1000"
            style={{transform: `translateX(-${curentSelected * 100}vw)`}}
            >
                {
                    sliders.map((slide) => {
                        return (
                            <div
                                key={slide.id}
                                className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                            >
                                {/* TEXT CONTAINER */}
                                <div className="h-1/2 xl:h-full xl:w-1/2 relative flex flex-col items-center 
                                justify-center gap-8 xl:gap-12 text-center">
                                    <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                                    <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                                    <Link className={buttonVariants()} href={slide.url}>SHOP NOW</Link>
                                </div>
                                {/* IMAGE CONTAINER */}
                                <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                                    <Image priority={false} className="object-cover" src={slide.img} alt={`image-slider-${slide.id}`} fill sizes="100%" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    sliders.map((slide, index) => {
                        return (
                            <div
                            onClick={() => setCurrentSelected(index)} 
                            key={slide.id} 
                            className={`w-3 h-3 rounded-full ring-1 ring-black 
                                cursor-pointer flex items-center justify-center ${curentSelected === index ? "scale-150" : ""}
                                `}>
                                {
                                    curentSelected === index && (<div className="w-[6px] h-[6px] bg-green-600 rounded-full"></div>)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider