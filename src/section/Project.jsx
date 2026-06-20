import React from 'react';
import Project1 from '../assets/project1.PNG';
import Project2 from '../assets/project2.JPG';
import Project3 from '../assets/project3.JPG';

const project1 = [
  {
    img: Project2,
    title: "Tashus Car Booking",
    description: "Book Car, Verify Licence and Enjoy Ride",
    link: "https://dev-testing.tashus.com/",
  },
  {
    img: Project3,
    title: "Tashus Admin Site",
    description: "Manage User, Add Car",
    link: "https://tashus-admin.vercel.app/",
  },
  {
    img: Project1,
    title: "Agenci.ai",
    description:
      "Agenci.ai is an AI-powered platform designed to automate and optimize digital marketing tasks",
    link: "https://agencyai-ten.vercel.app/",
  }
];


const Project = () => {
  return (
    <div 
      id="project" 
      className="w-full py-16 bg-[#1A3046] text-white"
    >

      <h2 className="text-3xl font-poppins font-bold text-center mb-10">
        My Projects
      </h2>


      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8 
        px-5 
        sm:px-20
      ">

        {project1.map((project,index)=>(
          
          <div
            key={index}
            className="
              bg-[#2b5075]
              rounded-xl
              shadow-lg
              overflow-hidden
              hover:scale-105
              transition-transform
              duration-300
            "
          >

            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />


            <div className="p-5">

              <div className="flex justify-between items-center">

                <h3 className="
                  text-xl 
                  font-bold 
                  font-poppins
                ">
                  {project.title}
                </h3>


                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-blue-200
                    underline
                    font-semibold
                  "
                >
                  Live
                </a>

              </div>


              <p className="text-gray-300 text-sm mt-3">
                {project.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};


export default Project;