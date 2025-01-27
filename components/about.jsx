import React from "react";
import profile from "../public/assets/profile.jpeg";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Muhammad Ahmad, a Full Stack Developer with over 4 years of
            experience, specializes in the MERN stack and Python. He has
            expertise in monolithic, microservices, and event-driven
            architectures. I have worked on optimizing POS systems for
            large-scale operations, developing AI-powered chatbots, and building
            custom admin portals. Currently, Muhammad Ahmad is focused on
            creating innovative applications, including HRMS, event management
            systems, and real-time gaming technologies.
          </p>
          <p className="py-2 text-gray-600">
            I build the future of technology by turning complex requirements
            into intuitive digital solutions. My work combines technical
            expertise, creativity, and a passion for software development.
          </p>
          <p>
            &quot;Great developers are those who can imagine the unimaginable
            and then bring it to life with code.&quot; - Muhammad Ahmad
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={profile}
            className="rounded-xl grayscale-[80%] hover:grayscale-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
