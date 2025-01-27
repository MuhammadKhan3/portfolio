import React from "react";
import Pos from "../public/assets/images/pos/one.png";
import Hashbot from "../public/assets/images/hashbot/two.png";
import SquarePos from "../public/assets/images/pos-square/two.png";
import hrms from "../public/assets/images/hrms/1.PNG";
import realState from "../public/assets/images/realState/2.PNG";
import azuki from "../public/assets/images/azuki/azuki.PNG";
import pdfGen from "../public/assets/images/pdf signature/2.PNG";
import SignatureOne from "../public/assets/images/pdf signature/one.png";

import ProjectItem from "./projectItem";
const Projects = () => {
  return (
    <div id="projects" className=" w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4"> What I&apos;have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="POS"
            backgroundimage={Pos}
            skill="reactjs,node js,express js,mysql,Tailwind Css,Ant Design"
            url={"https://pos.mikronexus.com"}
          />

          <ProjectItem
            title="HashBot"
            backgroundimage={Hashbot}
            skill="Next Js,Python,Tailwind Css,Ant Design,Langchain,Postgres,Sdk"
            url={"https://hashbot-web.hashlogics.com/"}
          />

          <ProjectItem
            title="SQUARE Restaurant Management"
            backgroundimage={SquarePos}
            skill="Next Js,Supabase,Tailwind Css,Ant Design"
            url={"https://square-pos-fawn.vercel.app"}
          />

          <ProjectItem
            title="Hrms Project"
            backgroundimage={hrms}
            skill="reactjs,node js,express js"
            url={`https://baksh-hr-muhammadkhan3s-projects.vercel.app`}
          />

          {/* <ProjectItem
            title="Ecomerce Admin Panel"
            backgroundimage={Invy}
            skill="React js,expressjs,mysql"
            url="/invyx"
          /> */}
          <ProjectItem
            title="Azuki Nft Collection"
            backgroundimage={azuki}
            skill="reactjs,nodej,material ui"
            url="/subca-hrm"
          />

          <ProjectItem
            title="Real State Application"
            backgroundimage={realState}
            skill="React js,expressjs,mysql"
            url="/real"
          />
          {/* <ProjectItem
            title="Subca"
            backgroundimage={subca}
            skill="reactjs,tailwind css,mysql"
            url="/subca"
          /> */}
          {/* <ProjectItem
            title="NewsPitara"
            backgroundimage={newspitara}
            skill="reactjs,css,frontity,wordpress admin"
            url="/newspitara"
          /> */}
          <ProjectItem
            title="Signature Manager"
            backgroundimage={SignatureOne}
            skill="javascript,tailwind css,pdfjs"
            url="/pdf"
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
  );
};

export default Projects;
