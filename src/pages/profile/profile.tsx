import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin"; // Import the NotLoggedIn component
import Navbar from "../../components_global/navbar";
import UserCard from "./components/procard";
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
        <div className="">
          <UserCard />
        </div>
      </SignedIn>
    </div>
  );
}
