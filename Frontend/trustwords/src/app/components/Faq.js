import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is TrustWords?',
    answer: 'TrustWords is a platform that allows you to collect and showcase authentic testimonials from your customers with no coding required.',
  },
  {
    question: 'Is coding required to integrate testimonials?',
    answer: 'No, you can easily embed our testimonial wall on your website using simple HTML code, without any need for development skills.',
  },
  {
    question: 'How can I customize my testimonials?',
    answer: 'You can customize the design, layout, and color scheme of your testimonials wall to fit your brand perfectly using our platform.',
  },
  {
    question: 'What platforms are supported?',
    answer: 'TrustWords supports all major platforms including Webflow, WordPress, and custom websites. You just need to copy and paste the code.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free trial to help you experience our service and see how it can benefit your brand.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-5 transition-transform duration-300 hover:shadow-2xl">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
