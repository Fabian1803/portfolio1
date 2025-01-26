import LightBackground from '../ui/LightBackground'
import profile from "../assets/img/profile.webp";

function Profile() {
    return (
        <>
            <img src={profile} alt="FotoPerfil" className='z-10  w-full h-full bg-cover 
            object-cover border-solid border-dark-green border-2 ' draggable="false" loading="lazy"/>
            <LightBackground />
        </>
    )
}

export default Profile