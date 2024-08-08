import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>ICT Solutions</span> {/* No <a> tag needed in the latest Next.js */}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className="hover:text-blue-200">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/services"> {/* Update the link to the services page */}
              <span className="hover:text-blue-200">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-blue-200">About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-blue-200">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
