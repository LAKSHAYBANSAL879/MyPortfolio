import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="z-10 relative text-white py-10 bg-gray-950 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold">
                <span className="text-blue-500">Port</span>folio
              </a>
              <p className="text-gray-400 mt-2">Creating web experiences that inspire.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Lakshay Bansal. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Sitemap</a></li>
                <li><a href="https://storyset.com/web">Web illustrations by Storyset</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export default Footer