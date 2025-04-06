// src/app/contact.js

export default function Contact() {
    return (
      <section className="bg-gray-800 text-white p-6">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-6">
          Feel free to reach out to me via following channels:
        </p>
  
        <ul className="space-y-4">
          <li>
            <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
              Email: your-email@example.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/123456789" target="_blank" className="text-blue-400 hover:underline">
              WhatsApp: +9779814213742
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bishal-shrestha/" target="_blank" className="text-blue-400 hover:underline">
              LinkedIn: Bishal Shrestha
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bishalshrestha/" target="_blank" className="text-blue-400 hover:underline">
              Instagram: @bishalshrestha
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
