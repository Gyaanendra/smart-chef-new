import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin";
import Navbar from "../../components_global/navbar";
import { RecipePreviewGenerator } from "./components/RecipePreviewGenerator";

export default function RecommendationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <SignedOut>
        <NotLoggedIn />
      </SignedOut>

      <SignedIn>
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              AI Recipe Generator
            </h1>
            <p className="text-lg text-gray-600">
              Describe the type of recipes you'd like to create, and our AI will
              generate personalized recipes just for you!
            </p>
          </div>

          <RecipePreviewGenerator />
        </div>
      </SignedIn>
    </div>
  );
}
