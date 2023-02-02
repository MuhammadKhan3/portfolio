import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGHETHER</p>
                <h1 className='py-2 text-gray-700'>Hi, I'm<span className='text-[#5651e5]'> Ahmad</span></h1>
                <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
                <p className='py-4 text-gray-600  max-w-[70%] m-auto'>
                    I'm a full stack developer web developer.
                    I have  experience in building variety of projects.
                    Currently I am focused on building full stack 
                    building apps.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                           <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <FaLinkedinIn/>
                            </div>
                            <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <FaGithub/>
                            </div>
                            <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <AiOutlineMail/>
                            </div>
                            <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                              <BsFillPersonLinesFill/>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main