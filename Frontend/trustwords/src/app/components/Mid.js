import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    profession: "Web Developer",
    stars: 5,
    description: "This is an amazing service! It has transformed the way I showcase my work."
  },
  {
    name: "Jane Smith",
    profession: "Graphic Designer",
    stars: 4,
    description: "I love the ease of use and the design options available. Highly recommended!"
  },
  {
    name: "Emily Johnson",
    profession: "Content Writer",
    stars: 5,
    description: "A game-changer for my website. The testimonials have boosted my credibility."
  },
  {
    name: "Michael Brown",
    profession: "SEO Specialist",
    stars: 5,
    description: "TrustWords made adding testimonials effortless and beautiful!"
  },
  {
    name: "Sarah Wilson",
    profession: "Marketing Manager",
    stars: 4,
    description: "Our customer feedback has never looked better on our site."
  },
  {
    name: "David Miller",
    profession: "Business Analyst",
    stars: 5,
    description: "An intuitive tool that saved us hours of work. Highly recommended!"
  },
  {
    name: "Laura Davis",
    profession: "Social Media Manager",
    stars: 4,
    description: "Visually stunning testimonials that match our brand perfectly."
  },
  {
    name: "Daniel Garcia",
    profession: "Entrepreneur",
    stars: 5,
    description: "Easy to use and effective. My clients love the new look!"
  },
  {
    name: "Sophia Martinez",
    profession: "Product Designer",
    stars: 5,
    description: "This tool has elevated our website's credibility. Love it!"
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-10 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-14">Elevate Your Website with TrustWords!</h2>
        <p className="text-gray-300 mb-12">
          Enhance your online presence effortlessly. With TrustWords, you can add captivating testimonials to your website without any coding skills! 
          Simply copy and paste our HTML code to integrate the Wall Of Love (👉 full version) seamlessly into your site. 
          Whether you're using Webflow, WordPress, or any no-code platform, we’ve got you covered!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <img 
                    src={`https://via.placeholder.com/50?text=${testimonial.name.charAt(0)}`} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border border-gray-600" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.profession}</p>
                </div>
                <div className="ml-auto">
                  {/* Star Ratings */}
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className={starIndex < testimonial.stars ? "text-yellow-400" : "text-gray-600"}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
