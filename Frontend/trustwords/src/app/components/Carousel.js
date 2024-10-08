export default function BrandSection() {
    return (
      <div className="w-full flex items-center justify-center bg-gray-900">
      <div className="mb-20 w-full flex flex-col items-center justify-center p-8 bg-gray-900 bg-opacity-90 text-white rounded-lg transform transition-transform duration-300">
        <h1 className="text-5xl font-bold mb-2 text-center tracking-wide mt-[130px]">
          Elevate Your Brand with 
          <span className="block text-blue-400 mt-4">Authentic Testimonials</span>
        </h1>
        <p className="text-lg mt-8 text-center max-w-3xl text-gray-300 leading-relaxed">
          Discover how Testimonial enables you to seamlessly collect genuine text and video testimonials from your customers. 
          Our intuitive platform allows you to gather impactful feedback without the need for extensive development or hosting costs. 
          In just minutes, showcase the real voices behind your brand, building trust and credibility to attract new clients and grow your business.
        </p>
        <a 
          href="/try-free" 
          className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Try for Free
        </a>
      </div>
    </div>
    );
  }
  