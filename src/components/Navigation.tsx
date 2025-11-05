import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-stone-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-amber-500">The Bone Wars</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-amber-500' : 'text-stone-100 hover:text-amber-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-amber-500' : 'text-stone-100 hover:text-amber-400'
              }`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-stone-100 hover:text-amber-400 transition-colors">
                <span>Geologists</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-stone-800 rounded-lg shadow-xl overflow-hidden">
                  <Link
                    to="/geologist/edward-cope"
                    className="block px-4 py-3 text-sm text-stone-100 hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    Edward Drinker Cope
                  </Link>
                  <Link
                    to="/geologist/othniel-marsh"
                    className="block px-4 py-3 text-sm text-stone-100 hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    Othniel Charles Marsh
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/outcomes"
              className={`text-sm font-medium transition-colors ${
                isActive('/outcomes') ? 'text-amber-500' : 'text-stone-100 hover:text-amber-400'
              }`}
            >
              Outcomes
            </Link>
          </div>

          <button
            className="md:hidden text-stone-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`text-sm font-medium ${
                  isActive('/') ? 'text-amber-500' : 'text-stone-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium ${
                  isActive('/about') ? 'text-amber-500' : 'text-stone-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pl-4 flex flex-col space-y-2">
                <span className="text-xs font-semibold text-amber-500">Geologists</span>
                <Link
                  to="/geologist/edward-cope"
                  className="text-sm text-stone-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Edward Drinker Cope
                </Link>
                <Link
                  to="/geologist/othniel-marsh"
                  className="text-sm text-stone-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Othniel Charles Marsh
                </Link>
              </div>
              <Link
                to="/outcomes"
                className={`text-sm font-medium ${
                  isActive('/outcomes') ? 'text-amber-500' : 'text-stone-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Outcomes
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
