import React from 'react';
import { Link } from 'react-router-dom';

// Multi-column footer structure from the tutorial.
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'List Your Gear', path: '/list-gear' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Support', // Help Center, Terms of Service, Privacy Policy, Insurance (01:51:43)
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Insurance', path: '/insurance' },
      ],
    },
    {
      title: 'Contact', // Address and Phone number
      content: [
        '123 Camera Rental St.',
        'Hollywood, CA 90028',
        'Phone: (555) 123-4567',
        'Email: info@camerarental.com',
      ],
    },
  ];

  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-10'>
          
          {/* Column 1: Logo and Brand Info */}
          <div className='col-span-2 lg:col-span-1'>
            <Link to='/' className='text-2xl font-bold text-white'>
              Camera Rental
            </Link>
            <p className='mt-4 text-gray-400 text-sm max-w-xs'>
              Rent the gear, capture the moment.
            </p>
          </div>

          {/* Columns 2 & 3: Links */}
          {footerLinks.slice(0, 2).map((col) => (
            <div key={col.title}>
              <h4 className='text-lg font-semibold mb-4 text-orange-400'>{col.title}</h4>
              <ul className='space-y-3'>
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className='text-gray-400 hover:text-white transition duration-300 text-sm'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Column 4: Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-orange-400'>{footerLinks[2].title}</h4>
            <ul className='space-y-3'>
                {footerLinks[2].content.map((item, index) => (
                    <li key={index} className='text-gray-400 text-sm'>{item}</li>
                ))}
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className='mt-8 text-center text-gray-500 text-sm'>
          &copy; {currentYear} Camera Rental. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;