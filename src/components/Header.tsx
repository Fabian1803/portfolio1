import LightBackground from "../ui/LightBackground";
import logo from "../assets/img/logo.png"

const Header = () => {
    return (
        <div className="h-[55px] w-full lg:h-auto">
            <div className="block-cont font-animeAce text-white flex 
            justify-between pr-5 pl-5 items-center text-[9px] md: text-sm">
                <ul className="flex gap-5">
                    <li><a href="">home</a></li>
                    <li><a href="">projects</a></li>
                    <li><a href="">contact</a></li>
                </ul>
                <img className=" h-[80%] m-1 md:h-10 aspect-auto" src={logo} alt="logoXd" />
            </div>
            <LightBackground />
        </div>
    );
};

export default Header;