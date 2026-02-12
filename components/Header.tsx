
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, HelpCircle } from 'lucide-react';
import Logo from './Logo';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.location.hash = id === 'home' ? '' : id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'bg-[#0a0c10]/80 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="group outline-none">
          <Logo className="h-10 md:h-12" />
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 mr-4">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)}
                className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all hover:bg-white/5 ${currentPage === link.id ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
            </a>
            <button onClick={() => handleNavClick('contact')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5">
              Client Portal <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0c10]/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              className={`text-2xl font-bold transition-colors py-4 border-b border-white/5 last:border-0 text-left ${currentPage === link.id ? 'text-blue-500' : 'text-slate-300 hover:text-blue-500'}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="bg-blue-600 text-white w-full py-5 rounded-2xl font-black text-center mt-6 shadow-xl shadow-blue-600/40">
            Get Technical Support
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
