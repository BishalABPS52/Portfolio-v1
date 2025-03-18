// src/app/page.js

export default function Home() {
    return (
      <section className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-6">Bishal Shrestha</h1>
        <p className="text-xl mb-6">Bachelor in Computer Engineering at IOE, Thapathali Campus</p>
        <p className="text-lg mb-6">
          I am a passionate web developer, freelancer, and technologist working on exciting projects.
        </p>
        <div>
          <p className="text-lg mb-3">Check out my work:</p>
          <ul className="flex space-x-6">
            <li>
              <a href="https://github.com/yourusername" target="_blank" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bishal-shrestha/" target="_blank" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </section>
    );
}
