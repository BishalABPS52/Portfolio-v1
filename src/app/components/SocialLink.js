// src/app/SocialLink.js
export default function SocialLink({ href, label, color }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3 rounded-full text-lg sm:text-xl font-semibold"
        style={{ backgroundColor: color }}
      >
        <span className="text-white">{label}</span>
      </a>
    );
}
