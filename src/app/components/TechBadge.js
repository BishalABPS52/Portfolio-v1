// src/app/TechBadge.js
export default function TechBadge({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 object-contain"
      />
    );
}
