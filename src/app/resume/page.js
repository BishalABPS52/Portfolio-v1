"use client";

import "./resume.css";

export default function Page() {
    return (
        <div className="container">
            <div className="resume-block">
                <h1>Bishal Shrestha</h1>
                <p className="contact-info">Kathmandu, Nepal | +9779765532314 | bs426808@gmail.com</p>
                
                <div className="section">
                    <h2>About Me</h2>
                    <p>Versatile and results-driven developer specializing in web and software development, game testing, and backend solutions...</p>
                </div>
                
                <div className="section">
                    <h2>Experience</h2>
                    <h3>Freelancer (2023 - Present)</h3>
                    <ul>
                        <li>Developed multiple websites using HTML, CSS, JavaScript, and PHP.</li>
                        <li>Created backend solutions using SQL and PHP.</li>
                        <li>Provided data entry, typing, and content writing services.</li>
                    </ul>
                    <h3>Game Tester (Freelance, 2023 - Present)</h3>
                    <ul>
                        <li>Tested gameplay mechanics, UI, and performance of various games.</li>
                        <li>Reported bugs and suggested improvements.</li>
                    </ul>
                </div>
                
                <div className="section">
                    <h2>Education</h2>
                    <ul>
                        <li>SEE (4.0 GPA), Rastriya Vibhuti Samudayik Shiksha Sadan</li>
                        <li>NEB +2 Level Science (3.65 GPA), Capital College and Research Center</li>
                        <li>Bachelor in Computer Engineering, IOE Thapathali (Ongoing)</li>
                    </ul>
                </div>
                
                <div className="section">
                    <h2>Skills</h2>
                    <ul>
                        <li>Web Development: HTML, CSS, JavaScript, PHP, React, Node.js</li>
                        <li>Game Testing: Bug reporting, gameplay analysis, debugging tools</li>
                        <li>Software Development: C, C++, Python</li>
                        <li>Database & Backend: SQL, PHP</li>
                        <li>Version Control: Git, GitHub</li>
                    </ul>
                </div>
                
                <div className="section">
                    <h2>Hobbies</h2>
                    <ul>
                        <li>Writing & Reading Books</li>
                        <li>Programming/Coding</li>
                        <li>Game Testing & Debugging</li>
                    </ul>
                </div>
            </div>
            <div className="section">
                    <a href="/file/CV Bishal Shrestha.pdf" download className="download-button">Download CV</a>
                </div>
        </div>
        
    );
}
