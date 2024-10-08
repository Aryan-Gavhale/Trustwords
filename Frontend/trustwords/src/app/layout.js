'use client';
import './globals.css'; // Import global styles (if any)
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Mid from './components/Mid';
import Faq from './components/Faq';

import Working from './components/Working';
import Feature from './components/Feature';
import { usePathname } from 'next/navigation'; // Import to access the current pathname


export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <html lang="en">
      <body>
        {pathname !== '/Login' && pathname !== '/Signup' && (
          <>
            <Navbar />
            <Carousel />
            <Mid/>
            <Working/>
            <Feature/>
            <Faq/>
          </>
        )}

        {children}

        {pathname !== '/Login' && pathname !== '/Signup' && <Footer />}
      </body>
    </html>
  );
}
