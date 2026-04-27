import React from 'react';
import Project1 from '../assets/project1.PNG';
import Project2 from '../assets/project2.PNG';
import Project3 from '../assets/project3.PNG';

const project1 = [
  {
    img: Project1,
    title: "Agenci.ai",
    description: "Agenci.ai is an AI‑powered platform designed to automate and optimize digital marketing tasks",
    link: "https://agencyai-ten.vercel.app/",
  },
  {
    img: Project2,
    title: "Floka Digital Agency",
    description: "Responsible UI includes Home, About, Services, Portfolio, Blog, Contact sections",
    link: "https://floka-project.vercel.app/",
  },
  {
    img: Project3,
    title: "Travel Site",
    description: "Modern and responsive web application designed to smooth booking and experiences",
     link: "https://travel-site-six-rho.vercel.app",
  },
];

const Project = () => {
  return (
    <div id="project" className="w-full py-16 bg-[#1A3046] text-white">
      <h2 className="text-3xl font-poppins font-bold text-center mb-10">My Projects</h2>

      <div className="flex flex-col sm:flex-row gap-8 justify-center items-start px-5 sm:px-20">
        {project1.map((project, index) => (
          <div
            key={index}
            className="bg-[#2b5075] rounded-xl shadow-lg overflow-hidden w-full sm:w-80 hover:scale-105 transition-transform duration-300"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className='flex flex-row  justify-between'>
              <h3 className="text-xl font-bold font-poppins mb-2">{project.title}</h3>
              <a href={project.link} target='_blank'  rel="noreferrer" 
              className="text-xl font-bold font-poppins mb-2 underline text-blue-200">Live-Link</a>
              </div>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
