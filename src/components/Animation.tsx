import bochi from "../assets/img/bochi.gif";
const Animation = () => {
  return (
      <img src={bochi} alt="iconGif" 
      className="z-10 w-[100%] h-[100px] object-cover lg:h-full lg:absolute 
      border-solid border-dark-green border-2"
      draggable="false"
      style={{objectPosition: "50% 40%"}}/>
  )
}

export default Animation