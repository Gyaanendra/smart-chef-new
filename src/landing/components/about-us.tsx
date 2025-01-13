import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

interface SocialLinks {
  instagram: string;
  github: string;
  linkedin: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: SocialLinks;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Archit Gupta",
      role: "Fullstack Developer",
      description: "Archit handled the entire frontend, crafting an intuitive and responsive interface. His expertise ensured a seamless and visually appealing user experience.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "https://www.instagram.com/everettian_archit/profilecard/?igsh=enQ2NnFjeXNwYzYw",
        github: "https://github.com/testing-archit",
        linkedin: "https://www.linkedin.com/in/archit-gupta-600220164/"
      }
    },
    {
      name: "Gyanendra Prakash",
      role: "Fullstack Developer",
      description: "Gyanendra built the API and developed the recommendation system, managing backend operations to ensure smooth data flow and personalized suggestions for users.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "https://www.instagram.com/codexweeb_44/profilecard/",
        github: "https://github.com/Gyaanendra",
        linkedin: "https://www.linkedin.com/in/gyanendra-prakash-3b6293324/"
      }
    },
    {
      name: "Avni Saini",
      role: "Designer and Researcher",
      description: "Avni was the creative mind behind the design, conducting research, creating the logos, and developing the presentation that effectively showcased our project's features.",
      image: "/api/placeholder/400/400",
      socials: {
        instagram: "https://www.instagram.com/_avni_15_/profilecard/?igsh=MWJldnFjYTE2bDdrYQ==",
        github: "https://github.com/yourprofile",
        linkedin: "https://www.linkedin.com/in/avni-saini-0927a12b9/"
      }
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-all duration-300 grayscale hover:grayscale-0"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-2">{member.name}</h3>
              <p className="text-gray-300 font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github size={24} />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;