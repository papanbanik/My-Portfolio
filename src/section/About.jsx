import React from 'react';
import  { library } from '../assets/assets'
const About = () => {
    return (
<div id="about" className='w-full min-h-[300px] mt-5 ml-16 max-sm:ml-5' >
<div className='flex flex-col sm:flex-row gap-9 sm:gap-7 justify-around
 text-white text-2xl font-bold'>             
<div className='flex flex-col gap-4 max-sm:ml-10'>
  
  <div className='text-2xl font-bold max-sm:pl-35 max-sm:pb-5'>Skills</div> 

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
            <div> <span className='text-4xl font-sans'>10</span> <span className='text-[#7C86FF] text-4xl font-sans'>+</span> <br/> <span>Completed <br/> Project</span> </div>
             <div> <span className='text-4xl font-sans'>102</span> <span className='text-[#7C86FF] text-4xl font-sans'>+</span> <br/> LeetCode <br/> Problem Solved </div>
             <div> <span className='text-4xl font-sans'>95</span> <span className='text-[#7C86FF] text-4xl font-sans'>+</span> <br/> Client <br/> Satisfaction </div>
            <div> </div>
         </div>
    </div>
  </div>

    </div>
   </div>
   
    );
};

export default About;