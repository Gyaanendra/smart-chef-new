import React from 'react';

interface StepProps {
  icon: string;
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col items-center p-8 transition-transform duration-300 hover:scale-105">
      <i className={`${icon} text-4xl text-[#ff6b6b] mb-4`}></i>
      <h3 className="text-xl font-bold mb-2">
        {number}. {title}
      </h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      icon: 'fas fa-list',
      number: 1,
      title: 'Input Ingredients',
      description: 'Tell us what ingredients you have available in your kitchen.'
    },
    {
      icon: 'fas fa-sliders-h',
      number: 2,
      title: 'Set Preferences',
      description: 'Choose your dietary requirements and cooking preferences.'
    },
    {
      icon: 'fas fa-wand-magic-sparkles',
      number: 3,
      title: 'Generate Recipe',
      description: 'Let our AI create the perfect recipe for you in seconds.'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <Step key={step.number} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;