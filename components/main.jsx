import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Particles from "react-particles";
import configParticle from "./config/particleConfig";
import { ParticlesContainer } from "./config/particlesBackground";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <ParticlesContainer />
      <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              LET&apos;S BUILD SOMETHING TOGHETHER
            </p>
            <h1 className="py-2 text-gray-700">
              Hi, I&apos;m<span className="text-[#5651e5]">Muhammad Ahmad</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I&apos;m Muhammad Ahmad, a seasoned Full Stack Developer with 4+
              years of experience. I specialize in the MERN stack and Python,
              excelling in monolithic, microservices, and event-driven
              architectures. Whether it&apos;s advanced tech solutions or
              customized projects, I&apos;ve got the skills to deliver results.
            </p>

            {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-ahmad-khan-fullstackdeveloper"
                className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/MuhammadKhan3"
                className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaGithub />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:muhammadkh303@gmail.com"
                className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </a>
              {/* <a
                rel="noopener noreferrer"
                target="_blank"
                className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <BsFillPersonLinesFill />
              </a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
