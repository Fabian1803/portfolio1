import LightBackground from '../ui/LightBackground'
import Carousel from "../ui/Carousel";

function Projects() {
    return (
        <>
            <div className='block-cont p-5 h-[80vw] sm:h-[450px] lg:h-auto flex flex-col items-center'>
                <Carousel />
            </div>
            <LightBackground />
        </>
    )
}

export default Projects