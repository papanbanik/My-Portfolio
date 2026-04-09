import React from 'react';
import HeroImage from '../assets/Hero_image.png';
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
const Hero = () => {
  const navigate = useNavigate();
 
  return (
    <div className="relative w-full h-[500px] overflow-hidden ">

      {/* LEFT SIDE OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-black pointer-events-none"
         style={{ clipPath: 'polygon(0 0, 65% 0, 50% 100%, 0 100%)' }} >
      </div>

      {/* RIGHT SIDE OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-[#D9D9D9] pointer-events-none"
       style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 50% 100%)' }} >
      </div>

      {/* CONTENT */}
      <div className="ml-10 absolute z-20 top-20 left-1 flex flex-col gap-3 text-white">
        <motion.h1
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 4 }}
        className="text-3xl sm:text-6xl  text-white font-mono sm:pl-40">
        Hello I'm <span className="text-indigo-400 text-5xl sm:text-7xl font-bold max-sm:hidden"> Papan </span>
        </motion.h1>
          <motion.div
          initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2 }}
           className=" pt-2 text-indigo-400 text-4xl font-bold sm:hidden">Papan Banik</motion.div>
          <div className=" pt-2 text-[#286dbd] text-xl font-bold sm:hidden">Web Developer</div>
        <div className="sm:pl-40 pt-2 text-indigo-400 text-2xl font-semibold max-sm:hidden">Web Developer</div>
        <p className="sm:pl-40 mt-0 text-balance sm:text-lg text-gray-300 max-w-xl leading-relaxed">
       Aspiring software engineer focused on <br/> web development and intelligent solutions
      </p>

        {/* BUTTONS */}
        <div className=" sm:pl-40 mt-5 flex gap-5 pt-2">
          <button
            onClick={() => window.open("https://github.com/papanbanik", "_blank")}
            className="cursor-pointer bg-[#1A3046] border px-6 py-2 rounded-full hover:bg-indigo-400 hover:text-white transition">
            Github
          </button>
          <button
            onClick={() => window.open("linkedin.com/in/paponbanik58", "_blank")}
            className="max-sm:z-0 cursor-pointer border px-5 py-2 bg-[#1A3046] rounded-full hover:bg-indigo-400 hover:text-white transition">
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="max-sm:z-0 cursor-pointer border px-5 py-2 bg-[#1A3046] rounded-full hover:bg-indigo-400 hover:text-white transition">           
            Resume
          </button>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="max-sm:z-0 relative z-10 flex justify-end pb-14 sm:pb-17 items-end h-full max-sm:pl-18  sm:pr-50">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          src={HeroImage}
          alt="Hero"
          className="max-sm:w-[520px] sm:h-[420px] object-contain  max-sm:scale-135 sm:scale-134"
        />
      </div>
    </div>
  );
};

export default Hero;