'use client';

import { motion } from "framer-motion";
import './ideas.css'; // Import the new CSS file

const ideas = [
  {
    title: "Connect 4 Idea",
    link: "/creative/ideas/connect4",
    date: "2023-10-01",
  },
  {
    title: "QuizTime Idea",
    link: "/creative/ideas/quiztime",
    date: "2023-10-02",
  },
  {
    title: "New Idea 1",
    link: "/creative/ideas/newidea1",
    date: "2023-10-10",
  },
  {
    title: "New Idea 2",
    link: "/creative/ideas/newidea2",
    date: "2023-10-15",
  },
];

const IdeasPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Creative Ideas</h2>

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
              <th className="table-cell">Idea Title</th>
              <th className="table-cell">Date</th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {ideas.map((idea, index) => (
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
                  <a href={idea.link} className="table-link">
                    {idea.title}
                  </a>
                </td>
                <td className="table-cell">{idea.date}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default IdeasPage;
