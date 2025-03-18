'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const creativeSections = [
  {
    title: "Creative Writing",
    link: "/creative/writing",
    image: "images/creative/writing.jpg",
  },
  {
    title: "Design",
    link: "/creative/design",
    image: "images/creative/design.jpg",
  },
  {
    title: "Ideas",
    link: "/creative/ideas",
    image: "images/creative/ideas.jpg",
  },
  {
    title: "Blog",
    link: "/creative/blog",
    image: "images/creative/Blog.jpg",
  },
];

const CreativePage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 relative">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Explore my creativity</h2>
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {creativeSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg project-card"
          >
            <Link href={section.link} legacyBehavior>
              <a>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <h3 className="text-xl font-semibold text-yellow-400">{section.title}</h3>
                </div>
              </a>
            </Link>
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativePage;
