import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to [Restaurant Name], where we serve the best dishes made
              from fresh, local ingredients. Enjoy a cozy atmosphere and
              exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              123 Food Street, Tasty City<br />
              Phone: (123) 456-7890<br />
              Email: info@restaurant.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm">
          &copy; 2024 [Restaurant Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
