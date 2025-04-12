
import React from 'react';
import { Instagram, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl text-white">
              <span className="font-mono border border-white px-1.5 py-0.5">HASH</span>
              <span className="ml-1 font-mono">DEFINE</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-gray-400 italic mr-8">"May the code be with you"</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-icpc-yellow transition-colors">
                <div className="bg-pink-600 p-1 rounded">
                  <Instagram size={18} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-icpc-yellow transition-colors">
                <div className="bg-blue-400 p-1 rounded">
                  <Twitter size={18} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-icpc-yellow transition-colors">
                <div className="bg-blue-600 p-1 rounded">
                  <Linkedin size={18} />
                </div>
              </a>
              <a href="#" className="text-white hover:text-icpc-yellow transition-colors">
                <div className="bg-indigo-500 p-1 rounded">
                  <MessageSquare size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
