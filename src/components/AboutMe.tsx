import LightBackground from '../ui/LightBackground'
import imgAM from '../assets/img/AboutMe.png'

function AboutMe() {
    return (
        <>
            <img
                src={imgAM}
                alt="Photo About Me"
                className="z-10  w-full h-[130px] lg:h-full bg-cover
                object-cover border-solid border-dark-green border-2"
                draggable="false"
                style={{ objectPosition: "50% 40%" }}
            />
            <LightBackground />
        </>
    )
}

export default AboutMe