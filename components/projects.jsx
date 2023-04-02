import React from 'react'
import Image from 'next/image'
import Invy from '../public/assets/images/inyx/inyx7.PNG'
import orgo from '../public/assets/images/orgo/orgo7.PNG'
import population from '../public/assets/images/population/project1.PNG'
import newspitara from '../public/assets/images/newpitara/project1.PNG'
import pos from '../public/assets/images/pos/project2.PNG'


import Link from 'next/link'
import ProjectItem from './projectItem'
const Projects = () => {
  return (
    <div id='projects' className=' w-full'>
        <div className='max-w-[1240] mx-auto px-2 py-16'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
              <h2 className='py-4'> What I&apos;have built</h2>
              <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                 title='Ecomerce Admin Panel'
                 backgroundimage={Invy}
                 skill="React js,expressjs,mysql"
                 url='/invyx'
                 />
                <ProjectItem
                 title='Orgo Job Portal'
                 backgroundimage={orgo}
                 skill="reactjs,material ui,node js,mongo db"
                 url='/orgo'
                 />
                <ProjectItem
                 title='Population Growth'
                 backgroundimage={population}
                 skill="reactjs,chart js,express js,mysql"
                 url='/population'
                 />
                 <ProjectItem
                 title='Pointing Sale'
                 backgroundimage={pos}
                 skill="reactjs,node js,express js"
                 url='/pos'
                 />
                <ProjectItem
                  title='NewsPitara'
                  backgroundimage={newspitara}
                  skill="reactjs,css,frontity,wordpress adming"
                  url='/newspitara'
                 />
                <ProjectItem
                  title='Subca'
                  backgroundimage={newspitara}
                  skill="reactjs,css,frontity,wordpress adming"
                  url='/newspitara'
                 />
              </div>
        </div>
    </div>
  )
}

export default Projects