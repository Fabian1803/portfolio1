import React from 'react'

interface StringListProps {
    title: string;
    list: string[]; 
}

const StringList: React.FC<StringListProps> = ({title, list}) => {
  return (
    <div className='w-full flex items-center flex-col gap-[1px] overflow-hidden'>
        <h1 className='font-animeAce text-white text-[80%]'>{title}</h1>
        <div className='w-full justify-center flex gap-[3%] lg:gap-2'>
            {list.map((lis, index) =>(
                <p className='bg-yellow pb-1 pt-1 pr-2 pl-2 rounded-full font-animeAce text-[55%]' key={index}>{lis}</p>
            ))}
        </div>
    </div>
  )
}

export default StringList