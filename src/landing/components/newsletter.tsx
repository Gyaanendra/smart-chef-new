// components/Newsletter.tsx
import React, { useState, FormEvent } from 'react';


const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your subscription logic here
      console.log('Subscribing email:', email);
      // Reset form after successful submission
      setEmail('');
      // You could add success notification here
    } catch (error) {
      console.error('Subscription error:', error);
      // You could add error notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#352f44] text-white py-16 px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Join Our Culinary Community</h2>
        <p className="mb-8">
          Subscribe to receive weekly AI-generated recipe collections, cooking tips, 
          and exclusive features.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-colors duration-300 disabled:opacity-50"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;