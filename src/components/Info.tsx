import LightBackground from '../ui/LightBackground'
import StringList from '../ui/StringList'
import { data } from "../lib/bd";

function Info() {
    return (
        <>
            <div className='block-cont flex flex-col pt-[3%] pb-[3%] lg:pb-0 items-center gap-2'>
                {data.map((list, index) => (
                    <StringList title={list.title} list={list.list} key={index}/>
                ))}
            </div>
            <LightBackground />
        </>
    )
}

export default Info