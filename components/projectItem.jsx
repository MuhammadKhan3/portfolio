import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectItem = ({title,skill,url,backgroundimage}) => {
  console.log(title,skill,url,backgroundimage)
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]  transition-colors ease-in-out duration-300'>
    <Image className=' object-contain rounded-xl h-[400px] group-hover:opacity-10' src={backgroundimage} alt={title}/>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{skill}</p>
        <Link href={url}>
           <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-300'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem