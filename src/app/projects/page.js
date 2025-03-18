'use client';

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Connect 4",
    tech: "C++ , SFML",
    link: "https://github.com/BishalABPS52/Connect-4-",
    image: "images/projects/Connect4.jpg", // Updated image path
  },
  {
    title: "QuizTime",
    tech: "Python , Pygame",
    link: "https://github.com/BishalABPS52/QuizTime",
    image: "images/projects/QuizTime.jpg", // Updated image path
  },
  {
    title: "Alien Invasion",
    tech: " Python , Pygame",
    link: "https://github.com/BishalABPS52/Alien-Invasion",
    image: "images/projects/alien invasion.jpg", // Updated image path
  },
];

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 relative">
      <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
              <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
              >
                <FaGithub /> View Code
              </a>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3><br></br>
              <h3 className="text-lg font-semibold text-white">{project.tech}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
