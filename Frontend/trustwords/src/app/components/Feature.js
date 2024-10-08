import React from 'react';

const features = [
  {
    title: 'Easy Setup',
    description: 'Quickly set up your testimonial wall in just a few minutes with our user-friendly interface.',
  },
  {
    title: 'Customizable Design',
    description: 'Easily customize colors, fonts, and layout to match your brand identity perfectly.',
  },
  {
    title: 'No Coding Required',
    description: 'Embed your testimonial wall with a simple HTML code — no development skills needed.',
  },
  {
    title: 'Mobile Friendly',
    description: 'Your testimonials will look stunning on any device, ensuring a seamless experience for all users.',
  },
  {
    title: 'Video Testimonials',
    description: 'Integrate video testimonials effortlessly to add a personal and authentic touch.',
  },
  {
    title: 'Real-Time Updates',
    description: 'Any changes or updates will be reflected instantly on your website, no manual syncing needed.',
  },
];

export default function FeaturesOverview() {
  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-white mt-[50px]">
          Powerful Features to Elevate Your Brand
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-800 bg-opacity-75 p-6 rounded-2xl shadow-xl transform transition-transform duration-500 hover:-translate-y-3 hover:bg-gray-700 hover:bg-opacity-100"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity duration-500 hover:opacity-30 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
