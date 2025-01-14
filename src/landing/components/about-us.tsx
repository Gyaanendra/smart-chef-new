import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import gyanendra from "../../assets/gyanendra.jpg";
import archit from "../../assets/archit.jpg";
import avni from "../../assets/avni.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Archit Gupta */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img
              src={archit}
              alt="Archit Gupta"
              className="rounded-full w-80 h-80 object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              Archit Gupta
            </h3>
            <p className="text-gray-300 font-medium mb-2">
              Fullstack Developer
            </p>
            <p className="text-gray-400 mb-4">
              Archit handled the entire frontend, crafting an intuitive and
              responsive interface. His expertise ensured a seamless and
              visually appealing user experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/everettian_archit/profilecard/?igsh=enQ2NnFjeXNwYzYw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Archit Gupta's Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/testing-archit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Archit Gupta's GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/archit-gupta-600220164/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Archit Gupta's LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Gyanendra Prakash */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img
              src={gyanendra}
              alt="Gyanendra Prakash"
              className="rounded-full w-80 h-80 object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-red-400 mb-2">
              Gyanendra Prakash
            </h3>
            <p className="text-gray-300 font-medium mb-2">
              Fullstack Developer
            </p>
            <p className="text-gray-400 mb-4">
              Gyanendra built the API and developed the recommendation system,
              managing backend operations to ensure smooth data flow and
              personalized suggestions for users.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/codexweeb_44/profilecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Gyanendra Prakash's Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/Gyaanendra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Gyanendra Prakash's GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/gyanendra-prakash-3b6293324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Gyanendra Prakash's LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Avni Saini */}
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="aspect-w-1 aspect-h-1 flex justify-center items-center">
            <img
              src={avni}
              alt="Avni Saini"
              className="rounded-full w-80 h-80 object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-red-400 mb-2">Avni Saini</h3>
            <p className="text-gray-300 font-medium mb-2">
              Designer and Researcher
            </p>
            <p className="text-gray-400 mb-4">
              Avni was the creative mind behind the design, conducting research,
              creating the logos, and developing the presentation that
              effectively showcased our project's features.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/_avni_15_/profilecard/?igsh=MWJldnFjYTE2bDdrYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Avni Saini's Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Avni Saini's GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/avni-saini-0927a12b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                aria-label="Avni Saini's LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
