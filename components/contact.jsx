import React from "react";
import contact from "../public/assets/images/contact/contact.jpg";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { ParticlesContainer } from "./config/particlesBackground";
const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                />
              </div>
              <div>
                <h2 className="py-2">Muhammad Ahmad Kha</h2>
                <p className="">Full Stack Developer</p>
                <p className="py-2">
                   I excel in the art of crafting projects and offering strategic consultancy. Don't hesitate to get in touch; let's initiate a conversation that will transform your vision into remarkable achievements.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With me</p>
                <div className="flex items-center justify-between py-4">
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    
                    <a target="_blank" href="https://www.linkedin.com/in/muhammad-ahmad-khan-63b5b8215">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/MuhammadKhan3">
                      <FaGithub />
                    </a>
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:muhammadkh303@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full lg:py-4">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      type='email'
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      type='text'
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea 
                        className="border-2 rounded-lg p-3 flex border-gray-300 " rows='10'>
                    </textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 ">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
             <Link href='/'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={25}/>
                </div>
             </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
