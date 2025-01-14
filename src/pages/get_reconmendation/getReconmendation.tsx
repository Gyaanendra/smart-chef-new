import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin";
import Navbar from "../../components_global/navbar";

export default function RecommendationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <SignedOut>
          <NotLoggedIn />
        </SignedOut>

        <SignedIn>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to the Recommendations Page!
            </h1>

            <p className="text-gray-600 mb-8">
              Here, you can discover amazing content, curated recommendations,
              and more. Start exploring now!
            </p>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Now
            </button>
          </div>
        </SignedIn>
      </main>
    </div>
  );
}
