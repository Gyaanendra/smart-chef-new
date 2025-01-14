import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin";
import Navbar from "../../components_global/navbar";
import { RecipeGenerator } from "./components/RecipeGenerator";

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <SignedOut>
        <NotLoggedIn />
      </SignedOut>

      <SignedIn>
        <div className="container mx-auto px-4 pt-24 pb-8">
          {" "}
          {/* Increased padding-top */}
          <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
            Recipe Generator
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Enter your available ingredients and cooking preferences to get
            personalized recipe recommendations!
          </p>
          <RecipeGenerator />
        </div>
      </SignedIn>
    </div>
  );
}
