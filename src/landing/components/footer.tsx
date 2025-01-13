// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black text-white py-8 px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img 
            src="./logo.png" 
            alt="SmartChef Logo" 
            className="w-32 h-auto transition-transform duration-300 hover:rotate-360"
          />
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} SmartChef. All rights reserved. | Made with
            <i className="fas fa-heart text-white animate-pulse"></i> 
            for food lovers
          </p>
        </div>
      </footer>
      <div className="bg-black text-gray-400 py-4 px-4 text-center flex justify-center items-center">
        <a
          href="https://github.com/Gyaanendra/smart-chef-new"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#ff6b6b] transition-colors duration-300"
        >
          Source Code
          <i className="fab fa-github text-xl"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;