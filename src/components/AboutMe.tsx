import LightBackground from '../ui/LightBackground'

function AboutMe() {
    return (
        <>
            <div className='z-10  w-full h-[130px] lg:h-full overflow-hidden'>
                <img
                    src=""
                    alt=""
                    className="z-10  w-full h-full bg-cover object-cover border-solid border-dark-green border-2 "
                    draggable="false"
                />
            </div>
            <LightBackground />
        </>
    )
}

export default AboutMe