import React from 'react';

const steps = [
  {
    title: 'Step 1: Sign Up',
    description: 'Create your account with basic information. It’s quick and hassle-free, allowing you to get started immediately!',
  },
  {
    title: 'Step 2: Customize',
    description: 'Select from our carefully curated templates and personalize your testimonials wall to align perfectly with your brand identity.',
  },
  {
    title: 'Step 3: Integrate',
    description: 'Simply copy and paste the provided HTML code into your website. No coding expertise required—effortless integration!',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 mt-[50px]">How It Works</h2>
        <p className="text-lg text-gray-400 mb-12">A simple 3-step process to enhance your website!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
