// import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "../components_global/navbar";
import VideoBanner from "./components/vid_ban";
import GetStarted from "./components/get-start";
export default function Landing() {
  //   const clerk = useClerk();

  return (
    <div>
      <header className="text-center">
        <Navbar />
      </header>
      <VideoBanner />
      <GetStarted />
    </div>
  );
}
