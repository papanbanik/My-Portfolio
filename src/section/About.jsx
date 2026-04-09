import React, { useState } from 'react';
import  { library } from '../assets/assets'
import {motion} from 'framer-motion';
const About = () => {
  const [count, setCount]= useState(0)
  const [leetCount, setLeetCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const startCount = ({number,setter}) =>{
    const end=number;
    const duration=1500;
    const stepTime=duration/end;
    let current=0;
    const interval=setInterval(() =>{
      current+=1;
      setter(current);
      if(current>=end)
        clearInterval(interval)
    },stepTime)
  };
    return (
<div id="about" className='w-full min-h-[300px] mt-5 ml-16 max-sm:ml-5' >
<div className='flex flex-col sm:flex-row gap-9 sm:gap-7 justify-around
 text-white text-2xl font-bold'>             
<div className='flex flex-col gap-4 max-sm:ml-30'>
  
  <div className='text-2xl font-bold max-sm:pl-8 max-sm:pb-5'>Skills</div> 

  <div className='flex items-center gap-6'>

    <div className='flex flex-col items-center gap-7'>
      {library.map((img, index) => (
        <img key={index} src={img} className='w-9 rounded'/>
      ))}
    </div> 

    <div className='flex flex-col gap-7 text-xl font-poppins'>
      <p>Tailwind</p>
      <p>React</p>
      <p>NextJS</p>
      <p className='mb-3'>PostgreSQL</p>
    </div>
   </div>
   </div>

  <div>
    <div className='flex flex-col gap-5'>
         <div className='max-sm:pl-35'>About Me</div>
         <div className='w-105 text-sm font-normal text-justify leading-normal'> Aspiring software engineer strong interest in web development. Skilled in JavaScript, React, Next JS and
              Tailwind CSS with experience building responsive applications. Strong foundation in problem solving and data
              structures</div>
         <div className='mt-3 flex flex-row  gap-6'>
            <div> <motion.span
                   initial={{opacity : 0}}
                   whileInView={{opacity: 1}}
                   viewport={{once:true}}
                   onViewportEnter={()=>startCount({number: 10,setter: setCount})}
                   className='text-2xl font-sans'>{count}</motion.span> <span className='text-[#7C86FF] text-xl font-sans'>+</span> <br/> <span className='text-xl font-poppins'>Completed <br/> Project</span> </div>
             <div> <motion.span
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once:true}}
                    onViewportEnter={()=>startCount({number: 102,setter:setLeetCount})}
                   className='text-2xl font-sans'>{leetCount}</motion.span> <span className='text-[#7C86FF] text-xl font-sans'>+</span> <br/><span className='text-xl font-poppins'> LeetCode <br/> Problem Solved</span> </div>
             <div> <motion.span
             initial={{opacity : 0}}
                   whileInView={{opacity: 1}}
                   viewport={{once:true}}
                   onViewportEnter={()=>startCount({number: 95,setter:setClientCount})}
                    className='text-2xl font-sans'>{clientCount}</motion.span> <span className='text-[#7C86FF] text-xl font-sans'>+</span> <br/> <span className='text-xl font-poppins'> Client <br/> Satisfaction </span></div>
            <div> </div>
         </div>
    </div>
  </div>

    </div>
   </div>
   
    );
};

export default About;