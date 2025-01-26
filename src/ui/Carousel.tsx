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
            <div className="overflow-hidden w-full h-full">
                <div className="flex transition-transform duration-300 h-full">
                    <div className="flex-shrink-0 w-full">
                        <img
                            src={proys[currentIndex].imgSrc}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-[60%] lg:max-h-[18vw] lg:min-h-[20vw] xl:max-h-[18vw] xl:min-h-[14vw] object-cover"
                            draggable="false"
                        />

                        <p className="text-center font-animeAce text-white p-2"
                        >{proys[currentIndex].content}</p>
                        <ul className="text-center flex gap-2 justify-center">
                            {proys[currentIndex].listCont.map((item, index) => (
                                <li key={index} className="text-[9px] font-animeAce bg-grey text-white p-1 rounded-xl">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center pt-4">
                            <a
                                className="bg-white font-animeAce text-xs pb-2 pt-2 pr-3 pl-3"
                                href={proys[currentIndex].link}>
                                GitHub
                            </a>
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