import React from "react";
import { useClerk } from "@clerk/clerk-react";
import notLogin from "../assets/notLogin.svg";
const NotLoggedIn: React.FC = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* SVG Illustration */}
      <div className="mb-6 w-3/4 md:w-1/2 lg:w-1/3">
        <img
          src={notLogin}
          alt="Not Logged In Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Login Button */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          You are not logged in
        </h2>
        <button
          onClick={() => openSignIn()}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default NotLoggedIn;
