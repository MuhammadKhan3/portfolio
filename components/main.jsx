import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Particles from 'react-particles'
import configParticle from './config/particleConfig'
import { ParticlesContainer } from './config/particlesBackground'

const Main = () => {
  return (
    <>
    <ParticlesContainer/> 
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&apos;S BUILD SOMETHING TOGHETHER</p>
                <h1 className='py-2 text-gray-700'>Hi, I&apos;m<span className='text-[#5651e5]'> Ahmad</span></h1>
                <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
                <p className='py-4 text-gray-600  max-w-[70%] m-auto'>
                    I&apos;m Muhammad Ahmad, a seasoned full-stack developer, forges immersive digital experiences with a formidable toolkit encompassing HTML, CSS, 3 year experience
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
    </>
  )
}

export default Main