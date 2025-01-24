import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { proys } from "../lib/bd";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % proys.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + proys.length) % proys.length
        );
    };

    return (
        <>
            <div className="flex w-full h-full ">
                <div className="flex transition-transform duration-300 w-full h-auto overflow-hidden">
                    <div className="grid grid-rows-3 h-auto w-full">
                        <div className="row-span-2 ">
                            <img
                                src={proys[currentIndex].imgSrc}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-full h-[100%] object-cover"
                                draggable="false"
                            />
                        </div>

                        <div className="flex flex-col justify-between row-span-1">
                            <p className="text-center font-animeAce text-white p-2">
                                {proys[currentIndex].content}
                            </p>
                            <ul className="text-center flex gap-2 justify-center items-center h-auto flex-wrap">
                                {proys[currentIndex].listCont.map((item, index) => (
                                    <li key={index} className="text-[9px] font-animeAce bg-grey text-white p-1 rounded-xl truncate">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center mt-4 mb-1">
                                <a
                                    className="bg-white font-animeAce text-xs pb-2 pt-2 pr-3 pl-3"
                                    href={proys[currentIndex].link}>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button
                onClick={prevSlide}
                className="top-1/2 left-4 buttonSytles"
            >
                <ArrowLeft className="w-4 h-4" />
            </button>
            <button
                onClick={nextSlide}
                className="top-1/2 right-4 buttonSytles"
            >
                <ArrowRight className="w-4 h-4" />
            </button>
        </>
    );
};

export default Carousel;