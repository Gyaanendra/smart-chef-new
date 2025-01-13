import { useEffect, useState } from "react";

const VideoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoUrl =
    "https://player.cloudinary.com/embed/?public_id=ban_bzq7qb&cloud_name=dbvionnxs&profile=cld-default&player[muted]=true&player[autoplay]=true&player[loop]=true&player[controls]=false";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src={videoUrl}
          className="w-[100vw] h-[100vh] scale-[1.5] transform-gpu"
          allow="autoplay; fullscreen; muted"
          frameBorder="0"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.5)",
          }}
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1
          className={`text-5xl font-bold mb-6 transform transition-all duration-1000 
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          Transform Your Kitchen with AI
        </h1>

        <p
          className={`text-xl max-w-2xl transform transition-all duration-1000 delay-500
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          Turn your available ingredients into delicious recipes instantly with
          our advanced AI technology. No more wasted food or boring meals!
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;
