import React, { useState, useEffect } from "react";
import HeroImage from "../assets/Hero_image.png";
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
    console.log("displayText ", displayText);
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
    return () => {
      clearTimeout(timeout);
    };
  }, [displayText, isDeleting, roleIndex]);
  return (
    <div className="relative w-full h-[500px] overflow-hidden ">
      {/* LEFT SIDE OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-black pointer-events-none"
        style={{ clipPath: "polygon(0 0, 65% 0, 50% 100%, 0 100%)" }}
      ></div>

      {/* RIGHT SIDE OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-[#D9D9D9] pointer-events-none"
        style={{ clipPath: "polygon(65% 0, 100% 0, 100% 100%, 50% 100%)" }}
      ></div>

      {/* CONTENT */}
      <div className="ml-10 absolute z-20 top-20 left-1 flex flex-col gap-3 text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className=" font-serif font-extralight text-3xl sm:text-6xl  text-white  tracking-tight sm:pl-40"
        >
          <span className="text-7xl leading-0">H</span>ello, I&apos;m
          <span className=" text-orange-400  ml-2 sm:ml-3 font-medium ">
            Papan
          </span>
        </motion.h1>
        <div className="font-serif italic pl-40 pt-2 text-5xl  text-[#286dbd] min-h-[70px] min-w-[300px]  font- ">
          {displayText}
        </div>
        <p className="sm:pl-40 mt-0 text-balance sm:text-lg text-gray-300 max-w-xl leading-relaxed">
          Aspiring software engineer focused on <br /> web development and
          intelligent solutions
        </p>

        {/* BUTTONS */}
        <div className=" sm:pl-40 mt-5 flex gap-5 pt-2">
          <button
            onClick={() =>
              window.open("https://github.com/papanbanik", "_blank")
            }
            className="cursor-pointer bg-[#1A3046] border px-6 py-2 rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
            Github
          </button>
          <button
            onClick={() =>
              window.open("linkedin.com/in/paponbanik58", "_blank")
            }
            className="max-sm:z-0 cursor-pointer border px-5 py-2 bg-[#1A3046] rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/portfolio")}
            className="max-sm:z-0 cursor-pointer border px-5 py-2 bg-[#1A3046] rounded-full hover:bg-indigo-400 hover:text-white transition"
          >
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
