import React from "react";
import { useClerk, useUser, SignedOut, SignedIn } from "@clerk/clerk-react";
import get_img from "../../assets/get.svg";
const GetStarted: React.FC = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Left side with image (60%) */}
      <div className="flex-1 md:w-2/3 mb-4 md:mb-0">
        <img
          src={get_img}
          alt="Let's get to cook"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right side with text and button (40%) */}
      <div className="flex-1 md:w-1/3 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Let's get to cook!
        </h2>

        {/* Conditional rendering based on user's sign-in status */}
        <SignedOut>
          <p className="text-xl mb-4">You need to sign in to get started.</p>
          <button
            onClick={() => openSignIn()}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </SignedOut>

        <SignedIn>
          <p className="text-xl mb-4">Welcome back, {user?.firstName}!</p>
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300">
            <a href="/explore">Let's go</a>
          </button>
        </SignedIn>
      </div>
    </div>
  );
};

export default GetStarted;
