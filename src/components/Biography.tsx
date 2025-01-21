import { profile } from "../lib/bd";

const Biography = () => {
  return (
    <div className="block-cont lg:absolute justify-around flex flex-col items-center gap-8 p-10 lg:gap-1 lg:p-5">
      <p className="font-animeAce text-3xl lg:text-2xl xl:text-3xl text-white text-center">{profile.init}</p>
      <div>
        <p className="font-animeAce p-font text-white">{profile.sub1}</p>
        <p className="font-animeAce p-font text-gray-300">{profile.sub2}</p>
      </div>
      <p className="font-animeAce p-font text-white">{profile.footer}</p>
    </div>
  )
}

export default Biography