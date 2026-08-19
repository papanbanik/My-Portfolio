import React from "react";
import Navbar from "../layout/Navbar";

const Experience = () => {
  return (
    <div id="experience">
      <div className="min-h-screen  py-16 px-5">
        <h1 className="text-4xl font-bold text-center mb-12">
          Education & Experience
        </h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8  ">
          {/* Education */}
          <div className="border rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              🎓 Education
            </h2>

            <div className="border-l-4 border-blue-500 pl-5">
              <h3 className="text-xl text-white font-medium">
                Bachelor of Science in Computer Science
              </h3>

              <p className="text-gray-300 mt-2">Chittagong University</p>

              <p className="text-sm text-gray-300 mt-1">2020 - 2025</p>

              <p className="mt-3 text-gray-400">
                Studying software development, algorithms, database systems, web
                technologies and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="border  rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-6 text-green-600">
              💼 Experience
            </h2>

            <div className="border-l-4 border-green-500 pl-5">
              <h3 className="text-xl text-white  font-medium">
                Software Engineer Intern
              </h3>

              <p className="text-gray-300 mt-2">Siara Solution</p>

              <p className="text-sm text-gray-300 mt-1">2025 - Present</p>

              <p className="mt-3 text-gray-400">
                Developing web applications using React, Next.js, Node.js,
                Express and MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="border max-w-5xl  mx-auto mt-10  rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl text-white font-semibold mb-5">🚀 Skills</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "Node.js",
              "Express.JS",
              "MongoDB",
              "Tailwind CSS",
              "Github CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-700 rounded-full text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
