
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-white">
            <span className="font-mono border border-white px-1.5 py-0.5">HASH</span>
            <span className="ml-1 font-mono">DEFINE</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
