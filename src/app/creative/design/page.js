'use client';

import { motion } from "framer-motion";

const designCategories = [
  {
    title: "Thumbnails",
    link: "/creative/design/thumbnails",
    image: "images/creative/design/thumbnails.jpg",
  },
  {
    title: "Project Designs",
    link: "/creative/design/project-designs",
    image: "images/creative/design/project-designs.jpg",
  },
];

const DesignPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 relative">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Design</h2>
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {designCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg creative-card"
          >
            <a href={category.link}>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-400">{category.title}</h3>
              </div>
            </a>
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignPage;
