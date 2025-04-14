import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import LOGO from '../assets/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect and section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = ['home', 'schedule', 'prizes', 'faq', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-gray-800' : 'bg-black/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl text-white">
              <img src={LOGO} alt="Logo" className="w-30 h-10" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" isActive={activeSection === 'home'}>Home</NavLink>
            <NavLink href="#schedule" isActive={activeSection === 'schedule'}>Schedule</NavLink>
            <NavLink href="#prizes" isActive={activeSection === 'prizes'}>Prizes</NavLink>
            <NavLink href="#faq" isActive={activeSection === 'faq'}>FAQ</NavLink>
            <NavLink href="#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
            <a 
              href="https://www.instagram.com/hash_define/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-icpc-yellow transition-all duration-300 p-2 rounded-full hover:bg-white/5"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/hash_define/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-icpc-yellow transition-all duration-300 p-2 rounded-full hover:bg-white/5"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <button 
              onClick={toggleMenu} 
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md border-t border-gray-800 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink href="#home" isActive={activeSection === 'home'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#schedule" isActive={activeSection === 'schedule'} onClick={() => setIsMenuOpen(false)}>Schedule</NavLink>
            <NavLink href="#prizes" isActive={activeSection === 'prizes'} onClick={() => setIsMenuOpen(false)}>Prizes</NavLink>
            <NavLink href="#faq" isActive={activeSection === 'faq'} onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" isActive={activeSection === 'contact'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, isActive, onClick }: { 
  href: string; 
  children: React.ReactNode; 
  isActive?: boolean;
  onClick?: () => void 
}) => {
  return (
    <a 
      href={href} 
      className={`
        transition-all duration-300 
        relative px-4 py-2 rounded-lg
        ${isActive 
          ? 'text-icpc-yellow font-medium text-shadow-glow' 
          : 'text-gray-300'
        }
        hover:text-icpc-yellow
      `}
      style={{
        textShadow: isActive 
          ? '0 0 10px rgba(248,201,73,0.5)' 
          : 'none'
      }}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavBar;
