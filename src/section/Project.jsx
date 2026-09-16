import React from "react";
import Project1 from "../assets/project1.JPG";
import Project2 from "../assets/project2.JPG";
import Project3 from "../assets/project3.JPG";
import Project4 from "../assets/project4.JPG";
const project = [
  {
    img: Project1,
    title: "Tashus Car Booking Platform",
    description:
      "A modern car rental platform that allows users to browse available vehicles, verify their driving licences, and securely book cars for their journeys. The platform provides a seamless booking experience with vehicle details, availability, and user verification.",
    link: "https://dev-testing.tashus.com/",
  },

  {
    img: Project2,
    title: "Honest Car Sell",
    description:
      "A modern car marketplace that connects sellers and buyers on a seamless, user-friendly platform. Sellers can easily list their vehicles with detailed information, images, pricing, and specifications, while buyers can browse, search, and filter available cars to find the vehicle that best matches their needs and preferences.",
    link: "https://dev-testing.honestcarsale.com/",
  },

  {
    img: Project3,
    title: "Eat Sharma Restaurant App",
    description:
      "A modern restaurant management platform designed to streamline food ordering and restaurant operations. The admin dashboard enables administrators to manage users, organize menu items, monitor orders, and efficiently manage day-to-day restaurant activities through a centralized interface.",
    link: "https://dev-app.eatshawarma.com.au/",
  },

  {
    img: Project4,
    title: "Tashus Admin Dashboard",
    description:
      "A comprehensive admin dashboard for managing the entire car rental ecosystem. It enables administrators to manage users, add and update vehicle listings, monitor reservations, verify customer information, manage vehicle availability, and oversee key platform operations through a centralized interface.",
    link: "https://tashus-admin.vercel.app/",
  },
];

const Project = () => {
  return (
    <div id="project" className="w-full py-16 text-white">
      <h2 className="text-3xl font-poppins font-bold text-center mb-10">
        Top Projects
      </h2>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        px-5
        sm:px-20
      "
      >
        {project.map((project, index) => (
          <div
            key={index}
            className="

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
                <h3
                  className="
                  text-xl
                  font-bold
                  font-poppins
                "
                >
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
