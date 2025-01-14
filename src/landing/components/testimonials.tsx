import React from "react";
import emma from "../../assets/emma.webp";
import sarah from "../../assets/sarah.jpeg";
import micheal from "../../assets/micheal.webp";
const CommunityTestimonials: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src={sarah}
                alt="Sarah Johnson's avatar"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4 text-center">
                "SmartChef has revolutionized my meal planning. I've discovered
                amazing recipes I never would have thought of myself!"
              </p>
              <p className="text-[#ff6b6b] font-bold">
                - Sarah Johnson
                <span className="block text-sm text-gray-500 font-normal">
                  Food Blogger
                </span>
              </p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src={micheal}
                alt="Michael Chen's avatar"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4 text-center">
                "As a busy parent, this app has been a lifesaver. Quick, healthy
                meals using what I have at home!"
              </p>
              <p className="text-[#ff6b6b] font-bold">
                - Michael Chen
                <span className="block text-sm text-gray-500 font-normal">
                  Parent
                </span>
              </p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src={emma}
                alt="Emma Davis's avatar"
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4 text-center">
                "The personalized nutrition features help me stay on track with
                my fitness goals while enjoying delicious meals."
              </p>
              <p className="text-[#ff6b6b] font-bold">
                - Emma Davis
                <span className="block text-sm text-gray-500 font-normal">
                  Fitness Enthusiast
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
