// ExplorePage.tsx
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import NotLoggedIn from "../../components_global/notLogin";
import Navbar from "../../components_global/navbar";
import UserDashboard from "./components/procard";

const ExplorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SignedOut>
        <NotLoggedIn />
      </SignedOut>
      <SignedIn>
        <div className="mt-20">
          <UserDashboard />
        </div>
      </SignedIn>
    </div>
  );
};

export default ExplorePage;
