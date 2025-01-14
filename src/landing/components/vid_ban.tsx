import { useEffect, useState } from "react";

const VideoBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopVideoUrl =
    "https://player.cloudinary.com/embed/?public_id=ban_bzq7qb&cloud_name=dbvionnxs&player[autoplay]=true&player[loop]=true&player[muted]=true&player[controls]=false";

  const mobileVideoUrl =
    "https://player.cloudinary.com/embed/?public_id=ban_mobile_lormlv&cloud_name=dbvionnxs&player[autoplay]=true&player[loop]=true&player[muted]=true&player[controls]=false";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src={isMobile ? mobileVideoUrl : desktopVideoUrl}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover  scale-[1.5] transform-gpu"
          style={{
            width: "100vw",
            height: "100vh",
            border: "none", // No border for iframe
          }}
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-6">
          Transform Your Kitchen with AI
        </h1>
        <p className="text-xl max-w-2xl">
          Turn your available ingredients into delicious recipes instantly with
          our advanced AI technology. No more wasted food or boring meals!
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
