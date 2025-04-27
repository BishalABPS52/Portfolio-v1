'use client';

import { useEffect, useState } from "react";
import Layout from "../layout";
import './certificates.css';

const certificates = [
  { title: "Googling Competition", image: "/images/certificates/c1.png" },
  { title: "CCRC Scientific Circle", image: "/images/certificates/c2.jpg" },
 
  { title: "Online Global Quiz", image: "/images/certificates/c4.jpg" },
];

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [modalCertificate, setModalCertificate] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleModal = (index) => {
    setModalCertificate(modalCertificate === index ? null : index);
  };

  return (
    <Layout>
      <section className="about-section bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        {/* About Section */}
        {/* Certificate Section */}
        {isClient && (
          <section className="certificate-slider">
            <h2>📜 Certificates</h2>
            <div className="slider-container">
              <div className="flex flex-col gap-24">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="w-72 flex-shrink-0"
                    onClick={() => handleModal(index)}
                  >
                    <img src={cert.image} alt={cert.title} className="w-full h-120 object-cover rounded-xl shadow-lg" />
                    <p className="text-white text-center mt-2">{cert.title}</p>
                  </div>
                ))}
              </div>
            </div>
            {modalCertificate !== null && (
              <div className="modal" onClick={() => setModalCertificate(null)}>
                <div className="modal-content">
                  <img src={certificates[modalCertificate].image} alt={certificates[modalCertificate].title} className="w-full h-auto object-cover rounded-xl shadow-lg" />
                  <p className="text-white text-center mt-2">{certificates[modalCertificate].title}</p>
                </div>
              </div>
            )}
          </section>
        )}
      </section>
    </Layout>
  );
}
