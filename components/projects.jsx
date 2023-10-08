import React from 'react'
import Image from 'next/image'
import Invy from '../public/assets/images/inyx/inyx7.PNG'
import orgo from '../public/assets/images/orgo/orgo7.PNG'
import population from '../public/assets/images/population/project1.png'
import newspitara from '../public/assets/images/newpitara/project1.PNG'
import pos from '../public/assets/images/pos/project2.PNG'
import hrms from '../public/assets/images/hrms/1.PNG'
import realState from '../public/assets/images/realState/2.PNG'
import azuki from '../public/assets/images/azuki/azuki.PNG'
import subca from '../public/assets/images/subca-hrm/1.PNG'
import pdfGen from '../public/assets/images/pdf signature/2.PNG'
import projectManag from '../public/assets/images/project-management/1.PNG'






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
                    title='Hrms Project'
                    backgroundimage={hrms}
                    skill="reactjs,node js,express js"
                    url='/hrms'
                />

                <ProjectItem
                    title='Ecomerce Admin Panel'
                    backgroundimage={Invy}
                    skill="React js,expressjs,mysql"
                    url='/invyx'
                 />
                <ProjectItem
                    title='Azuki Nft Collection'
                    backgroundimage={azuki}
                    skill="reactjs,nodej,material ui"
                    url='/subca-hrm'
                 />

                 <ProjectItem
                    title='Real State Application'
                    backgroundimage={realState}
                    skill="React js,expressjs,mysql"
                    url='/real'
                 />
                <ProjectItem
                  title='Subca'
                  backgroundimage={subca}
                  skill="reactjs,tailwind css,mysql"
                  url='/subca'
                 />
                <ProjectItem
                  title='NewsPitara'
                  backgroundimage={newspitara}
                  skill="reactjs,css,frontity,wordpress admin"
                  url='/newspitara'
                 />
                 <ProjectItem
                    title='Pdf Editor'
                    backgroundimage={pdfGen}
                    skill="javascript,tailwind css,pdfjs"
                    url='/pdf'
                 />
                {/* <ProjectItem
                  title='Project Management'
                  backgroundimage={projectManag}
                  skill="React Native "
                  url='/project-management'
                 /> */}
              </div>
        </div>
    </div>
  )
}

export default Projects