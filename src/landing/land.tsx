// import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "../components_global/navbar";
import VideoBanner from "./components/vid_ban";
import GetStarted from "./components/get-start";
import AboutUs from "./components/about-us";
import WhyChooseSmartChef from "./components/why-choose-us";
import HowItWorks from "./components/how-it-works";
import CommunityTestimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";
import Lfooter from "./components/footer"

export default function Landing() {
  //   const clerk = useClerk();

  return (
    <div>
      <header className="text-center">
        <Navbar />
      </header>
      <VideoBanner />
      <GetStarted />
      <WhyChooseSmartChef/>
      <HowItWorks/>
      <CommunityTestimonials/>
      <Newsletter/>

      <AboutUs/>
      <Lfooter/>
      
    </div>
  );
}
