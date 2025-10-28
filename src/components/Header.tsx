import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/4bd5bedfb5adf096716df8d9096ed9d0a33461e5.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center mr-auto">
            <img src={logo} alt="الكيان" className="h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
              }`}
            >
              الرئيسية
            </Link>
            <Link
              to="/doors"
              className={`transition-colors ${
                isActive('/doors') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
              }`}
            >
              الأبواب
            </Link>
            <Link
              to="/furniture"
              className={`transition-colors ${
                isActive('/furniture') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
              }`}
            >
              الأثاث
            </Link>
            <Link
              to="/kitchens"
              className={`transition-colors ${
                isActive('/kitchens') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
              }`}
            >
              المطابخ
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
              }`}
            >
              من نحن
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-right transition-colors ${
                  isActive('/') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
                }`}
              >
                الرئيسية
              </Link>
              <Link
                to="/doors"
                onClick={() => setIsMenuOpen(false)}
                className={`text-right transition-colors ${
                  isActive('/doors') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
                }`}
              >
                الأبواب
              </Link>
              <Link
                to="/furniture"
                onClick={() => setIsMenuOpen(false)}
                className={`text-right transition-colors ${
                  isActive('/furniture') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
                }`}
              >
                الأثاث
              </Link>
              <Link
                to="/kitchens"
                onClick={() => setIsMenuOpen(false)}
                className={`text-right transition-colors ${
                  isActive('/kitchens') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
                }`}
              >
                المطابخ
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-right transition-colors ${
                  isActive('/about') ? 'text-[#8B7355]' : 'text-neutral-700 hover:text-[#8B7355]'
                }`}
              >
                من نحن
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
