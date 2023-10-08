import React from 'react'
import profile from '../public/assets/profile.jpeg'
import Image from 'next/image'
const About = () => {
  return (
  <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
         <div className='col-span-2 '>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
               Muhammad Ahmad, with three years of full-stack development experience, possesses a versatile skill set encompassing HTML, CSS, JavaScript, Python, PHP, React, Node.js, Express.js, MySQL, and ORM Sequelize. Currently, he's actively involved in creating innovative solutions, such as the Axe Games HRMS, POS system, PDF editor applications, and a cutting-edge chatbot.
            </p>
            <p className='py-2 text-gray-600'>
               In the world of software development, Muhammad Ahmad is the architect of tomorrow's solutions, weaving technology into powerful tools that shape the future.
            </p>
            <p>"Great developers are those who can imagine the unimaginable and then bring it to life with code." - Muhammad Ahmad</p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects
            </p>
         </div>
         <div className='w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={profile}  className='rounded-xl grayscale-[80%] hover:grayscale-[20%]'/>
         </div>
      </div>
   </div>)
}

export default About