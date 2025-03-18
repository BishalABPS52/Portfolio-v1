import { motion } from "framer-motion";

const experiences = [
    {
        title: "Bachelor in Computer Engineering",
        duration: "2023 - Present",
        details: [
          "Institute of Engineering, Thapathali",
        ],
      },
  {
    title: "Freelancer",
    duration: "2023 - Present",
    platforms: "Upwork, Fiverr, PeoplePerHour",
    details: [
      "Developed multiple websites using HTML, CSS, JavaScript, and PHP.",
      "Created backend solutions using SQL and PHP for client projects.",
      "Provided data entry, typing, and content writing services.",
      "Delivered high-quality projects with client satisfaction.",
    ],
  },
  {
    title: "Game Tester (Freelance)",
    duration: "2023 - Present",
    details: [
      "Tested gameplay mechanics, UI, and performance of various games.",
      "Reported bugs and suggested improvements for better user experience.",
      "Used debugging tools and testing frameworks for analysis.",
    ],
  },
  {
    title: "Part-Time Tuition Teacher",
    duration: "2022 - 2023",
    details: [
      "Taught Math, Science, Additional Math, and Computer Science.",
      "Helped students understand core programming and scientific concepts.",
    ],
  },
  {
    title: "NEB +2 Level Science",
    duration: "2021 - 2023",
    details: [
      "Capital College and Research Center",
      "Secured 3.65 GPA",
    ],
  },
  {
    title: "SEE",
    duration: "2009 - 2021",
    details: [
      "Rastriya Vibhuti Samudayik Shiksha Sadan",
      "Secured 4.0 GPA",
    ],
  }
];

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Experience & Education</h2>
      <div className="relative border-l-4 border-accent pl-6" style={{ height: '150%' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="absolute -left-2 w-4 h-4 bg-accent rounded-full"></div>
            <h3 className="text-xl font-semibold text-secondary">{exp.title}</h3>
            <p className="text-tertiary">{exp.duration}</p>
            {exp.platforms && <p className="text-quaternary italic">{exp.platforms}</p>}
            <ul className="list-disc pl-5 text-colour">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
