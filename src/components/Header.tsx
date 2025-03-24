
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-semibold">F</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Fundrise</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link to="/discover" className="text-gray-600 hover:text-gray-900 transition-colors">
            Discover
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How It Works
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/create" 
            className="hidden md:flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <PlusCircle size={18} />
            <span>Create Fundraiser</span>
          </Link>
          
          <Link 
            to="/login" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
