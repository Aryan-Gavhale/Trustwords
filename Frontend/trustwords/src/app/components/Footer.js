
"use client";

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-[50px]">
      <div className="container mx-auto px-4">
        {/* Top Section with Brand and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-400">TrustWords</h2>
            <p className="text-gray-400 mb-2">
              Your trusted source for collecting authentic testimonials.
            </p>
            <div className="flex space-x-4 mt-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 text-blue-600"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 text-blue-400"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110 text-blue-700"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-blue-400 transition duration-300">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400 transition duration-300">Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition duration-300">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
            <form className="flex flex-col">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 transition duration-300 rounded-md py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
          <p className="text-gray-400">Follow us on social media for the latest updates!</p>
        </div>
      </div>
    </footer>
  );
}
