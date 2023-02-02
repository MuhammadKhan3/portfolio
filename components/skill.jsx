import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png'
const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p>Skills</p>
            <h2>What I am Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 cu'>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/html.png' alt='html' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/css.png' alt='css' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/javascipt.png' alt='javascript' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/tailwind.png' alt='tailwindcss' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TAILWINDCSS</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/react.png' alt='react' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>REACT</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/node.png' alt='nodejs' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node JS</h3>
                        </div>
                    </div>                    
                </div>

                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/mysql.png' alt='mysql' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MY SQL</h3>
                        </div>
                    </div>                    
                </div>
                <div  className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src='/../public/assets/skills/mongodb.png' alt='mongodb' width='150' height='64'/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MONGO DB</h3>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills