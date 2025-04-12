
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 sticky top-0 z-50 bg-icpc-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-white">
            <span className="font-mono border border-white px-1.5 py-0.5">HASH</span>
            <span className="ml-1 font-mono">DEFINE</span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#schedule">Schedule</NavLink>
          <NavLink href="#prizes">Prizes</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-icpc-black border-t border-gray-800 py-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink href="#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</NavLink>
            <NavLink href="#prizes" onClick={() => setIsMenuOpen(false)}>Prizes</NavLink>
            <NavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-icpc-yellow transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-icpc-yellow after:transition-all hover:after:w-full" 
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavBar;
