import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin"; // Import the NotLoggedIn component
import Navbar from "../../components_global/navbar";
import RecipeGrid from "./components/recipes";
export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Render when the user is not signed in */}
      <SignedOut>
        <NotLoggedIn />
      </SignedOut>

      {/* Render when the user is signed in */}
      <SignedIn>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 mt-16">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            Welcome to the Explore Page!
          </h1>
          <p className="text-lg text-gray-600 text-center mb-4">
            Here, you can discover amazing content, curated recommendations, and
            more. Start exploring now!
          </p>
          <RecipeGrid />
        </div>
      </SignedIn>
    </div>
  );
}
