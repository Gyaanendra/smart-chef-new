import React from 'react';

interface TestimonialProps {
  imageSrc: string;
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ imageSrc, quote, author, role }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex flex-col items-center">
        <img 
          src={imageSrc} 
          alt={`${author}'s avatar`} 
          className="w-16 h-16 rounded-full mb-4 object-cover"
        />
        <p className="text-gray-700 italic mb-4 text-center">{quote}</p>
        <p className="text-[#ff6b6b] font-bold">
          - {author}
          <span className="block text-sm text-gray-500 font-normal">{role}</span>
        </p>
      </div>
    </div>
  );
};

const CommunityTestimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      imageSrc: "sarah.jpeg",
      quote: "SmartChef has revolutionized my meal planning. I've discovered amazing recipes I never would have thought of myself!",
      author: "Sarah Johnson",
      role: "Food Blogger"
    },
    {
      imageSrc: "micheal.webp",
      quote: "As a busy parent, this app has been a lifesaver. Quick, healthy meals using what I have at home!",
      author: "Michael Chen",
      role: "Parent"
    },
    {
      imageSrc: "emma.webp",
      quote: "The personalized nutrition features help me stay on track with my fitness goals while enjoying delicious meals.",
      author: "Emma Davis",
      role: "Fitness Enthusiast"
    }
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;