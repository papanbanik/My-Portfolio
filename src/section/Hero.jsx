import React, { useState, useEffect } from "react";
import HeroImage from "../assets/hero_image.png";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer.",
  "MERN Stack Developer.",
  "Web Developer.",
];

const Hero = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setDisplayText(
            currentRole.slice(0, Math.max(displayText.length - 1, 0)),
          );
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 50,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="relative w-full sm:h-[500px] overflow-hidden overflow-x-hidden">
      {/* CONTENT */}
      <div className="w-fit ml-4 sm:ml-40 mt-4 sm:mt-8  flex items-center gap-1 px-4 py-2  rounded-full border  border-[#213190] text-sm text-gray-300">
        <span className="relative flex h-2.5 w-2.5 pt-1 ">
          <motion.span
            className="absolute w-1 h-1 rounded bg-cyan-400 "
            animate={{
              scale: [2, 2, 2],
              opacity: [0.7, 0.4, 0.9],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
        Available for new roles
      </div>
      <div className="absolute z-20 top-20 left-0 w-full px-6 sm:pl-40 sm:pr-0 flex flex-col gap-3 text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-serif font-extralight text-4xl sm:text-6xl text-white tracking-tight"
        >
          <span className="text-6xl sm:text-7xl leading-0">H</span>ello,
          I&apos;m
          <span className="text-[#F0BA59] ml-2 sm:ml-3 font-medium">Papan</span>
        </motion.h1>

        <div className="font-serif italic pt-2 text-3xl sm:text-5xl text-[#286dbd] min-h-[50px] sm:min-h-[70px] min-w-[250px] sm:min-w-[300px]">
          {displayText}
        </div>

        <p className="mt-0 text-balance sm:text-lg text-gray-300 max-w-xl leading-relaxed">
          Aspiring software engineer focused on <br /> web development and
          intelligent solutions
        </p>

        {/* BUTTONS */}
        <div className="mt-5 flex gap-5 pt-2">
          <button
            onClick={() =>
              window.open("https://github.com/papanbanik", "_blank")
            }
            className="cursor-pointer bg-[#1E2939] border px-6 py-2 rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
            Github
          </button>
          <button
            onClick={() =>
              window.open("https://linkedin.com/in/paponbanik58", "_blank")
            }
            className="cursor-pointer border px-5 py-2 bg-[#1E2939] rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="cursor-pointer border px-5 py-2 bg-[#1A3046] rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
            Resume
          </button>
        </div>
      </div>

      {/* HERO IMAGE - DESKTOP */}

      <div className="max-sm:hidden  mt-0 relative z-10 flex justify-end pb-14 sm:pb-17 items-end sm:pr-40">
        <div className="absolute -top-6 translate-x-1 bg-[#1E2939] flex items-center gap-1 px-4 py-2  rounded-full border  border-[#213190] text-sm text-gray-300">
          Based in Dhaka, Working Globally
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={HeroImage}
          alt="Hero"
          className="rounded  sm:h-[400px] object-contain"
        />
      </div>

      {/* HERO IMAGE - MOBILE */}
      <div className="sm:hidden pt-[22rem] pb-[2rem] relative z-10 flex justify-center items-end w-full">
        <div className="relative">
          {/* Location Badge */}
          <div className="absolute left-10 -top-87 translate-x-1 bg-[#1E2939] flex items-center gap-1 px-4 py-2 rounded-full border border-[#213190] text-sm text-gray-300 whitespace-nowrap">
            Based in Dhaka, Working Globally
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={HeroImage}
          alt="Hero"
          className="rounded w-[280px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
