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
      <div className="max-sm:hidden mt-10 relative z-10 flex justify-end pb-14 sm:pb-17 items-end sm:pr-40">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          src={HeroImage}
          alt="Hero"
          className="rounded sm:h-[400px] object-contain"
        />
      </div>

      {/* HERO IMAGE - MOBILE */}
      <div className="sm:hidden pt-[23rem] pb-[2rem]  relative z-10 flex justify-center items-end w-full">
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
