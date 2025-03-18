'use client';

import { motion } from "framer-motion";
import './blog.css'; // Import the new CSS file

const blogs = [
  {
    title: "Learning HTML",
    link: "/creative/blog/learning-html",
    date: "2023-09-15",
  },
  {
    title: "Learning CSS",
    link: "/creative/blog/learning-css",
    date: "2023-09-20",
  },
  {
    title: "JavaScript Basics",
    link: "/creative/blog/javascript-basics",
    date: "2023-10-05",
  },
  {
    title: "Understanding React",
    link: "/creative/blog/understanding-react",
    date: "2023-10-15",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Blogs</h2>

      {/* Table Structure */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="table-container"
      >
        <table className="w-full border-collapse text-2xl">
          {/* Table Header */}
          <thead>
            <tr className="table-header">
              <th className="table-cell">S.N</th>
              <th className="table-cell">Blogs Title</th>
              <th className="table-cell">Date</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {blogs.map((blog, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="table-row"
              >
                <td className="table-cell">{index + 1}</td>
                <td className="table-cell">
                  <a href={blog.link} className="table-link">
                    {blog.title}
                  </a>
                </td>
                <td className="table-cell">{blog.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default BlogPage;
