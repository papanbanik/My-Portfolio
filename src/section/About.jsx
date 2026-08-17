import React, { useState, useRef } from "react";
import { library } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  const [count, setCount] = useState(0);
  const [leetCount, setLeetCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const hasCountedRef1 = useRef(false);
  const hasCountedRef2 = useRef(false);
  const hasCountedRef3 = useRef(false);

  return (
    <div className="flex justify-end mt-5">
      {/* About */}
      <div className="w-full md:w-auto md:pr-20">
        <h2 className="text-2xl font-bold mb-5">About Me</h2>
        <p className="max-w-[420px] text-sm text-gray-300 leading-6 text-justify">
          Aspiring software engineer with strong interest in web development.
          Skilled in JavaScript, React, Next JS and Tailwind CSS with experience
          building responsive applications. Strong foundation in problem solving
          and data structures.
        </p>
        {/* Stats */}
        <div className="flex gap-8 mt-8 flex-wrap">
          <div>
            <Counter
              value={count}
              setter={setCount}
              target={10}
              refValue={hasCountedRef1}
            />
            <p>Completed Project</p>
          </div>
          <div>
            <Counter
              value={leetCount}
              setter={setLeetCount}
              target={102}
              refValue={hasCountedRef2}
            />
            <p>LeetCode Solved</p>
          </div>
          <div>
            <Counter
              value={clientCount}
              setter={setClientCount}
              target={95}
              refValue={hasCountedRef3}
            />
            <p>Satisfaction Ratio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Counter = ({ value, setter, target, refValue }) => (
  <motion.span
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    onViewportEnter={() => {
      if (!refValue.current) {
        refValue.current = true;
        let current = 0;
        const interval = setInterval(() => {
          current++;
          setter(current);
          if (current >= target) clearInterval(interval);
        }, 1500 / target);
      }
    }}
    className="text-4xl font-bold text-[#7C86FF]"
  >
    {value}+
  </motion.span>
);

export default About;
