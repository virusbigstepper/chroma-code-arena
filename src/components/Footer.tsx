import React from 'react';
import { Instagram, Twitter, Linkedin, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import LOGO from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="pt-16 pb-6 border-t border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="font-bold text-2xl text-white mb-4">
              <img src={LOGO} alt="Logo" className="w-30 h-10" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              An ICPC-inspired competitive programming event designed to challenge your algorithmic thinking and team collaboration skills.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={18} />} bgColor="bg-pink-600" />
              <SocialIcon icon={<Twitter size={18} />} bgColor="bg-blue-400" />
              <SocialIcon icon={<Linkedin size={18} />} bgColor="bg-blue-600" />
              <SocialIcon icon={<MessageSquare size={18} />} bgColor="bg-indigo-500" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#schedule">Schedule</FooterLink>
              <FooterLink href="#prizes">Prizes</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-icpc-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">hashdefine@university.edu</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-icpc-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-icpc-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Department of Computer Science,<br />University Campus,<br />City, State - 123456</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 italic mb-4 md:mb-0">"May the code be with you"</p>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hash Define. All rights reserved.</p>
        </div>
      </div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-icpc-blue/5 rounded-full blur-xl"></div>
    </footer>
  );
};

const SocialIcon = ({ icon, bgColor }: { icon: React.ReactNode; bgColor: string }) => {
  return (
    <a href="#" className="text-white hover:text-icpc-yellow transition-colors">
      <div className={`${bgColor} p-2 rounded hover:scale-110 transition-transform`}>
        {icon}
      </div>
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-icpc-yellow transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
