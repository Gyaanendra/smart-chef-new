import React from 'react';
import { Brain, Heart, Leaf } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseSmartChef: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Smart Recipe Generation",
      description: "Our AI analyzes thousands of recipes to create unique, delicious combinations tailored to your ingredients and preferences."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Effortless Recipe Matching",
      description: "Explore meal ideas that perfectly align with your ingredients, cooking time, and prep time, helping you create delicious dishes without the guesswork."
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Cooking",
      description: "Reduce food waste by creating recipes with ingredients you already have in your kitchen."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose SmartChef?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <div className="text-red-400 transition-transform duration-300 transform group-hover:scale-110">
                {feature.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSmartChef;