import React from "react";
import { useClerk, useUser, SignedOut, SignedIn } from "@clerk/clerk-react";
import get_img from "../../assets/get.svg";

const GetStarted: React.FC = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen ">
      {/* Left side with image (60%) */}
      <div className="flex-1 md:w-2/3 mb-8 md:mb-0 animate-fadeIn">
        <img
          src={get_img}
          alt="Let's get to cook"
          className="w-full h-auto "
        />
      </div>

      {/* Right side with text and button (40%) */}
      <div className="flex-1 md:w-1/3 text-center bg-white ">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
          Let's get to cook!
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>

        {/* Conditional rendering based on user's sign-in status */}
        <SignedOut>
          <p className="text-lg text-gray-600 mb-6">
            You need to sign in to get started. Don’t miss out on the recipes!
          </p>
          <button
            onClick={() => openSignIn()}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </SignedOut>

        <SignedIn>
          <p className="text-lg text-gray-600 mb-6">
            Welcome back, <span className="font-bold">{user?.firstName}</span>!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
            <a href="/explore">Let's go</a>
          </button>
        </SignedIn>
      </div>
    </div>
  );
};

export default GetStarted;
