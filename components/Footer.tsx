
import React from 'react';
import { Twitter, Linkedin, Facebook, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { Page } from '../App';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    window.location.hash = id === 'home' ? '' : id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <button onClick={() => handleNavClick('home')} className="inline-block hover:scale-105 transition-transform duration-300 outline-none">
              <Logo className="h-10" />
            </button>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              South Africa's premier partner for end-to-end digital transformation. We bridge the gap between complex infrastructure and business efficiency.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Premium Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors flex items-center gap-2">Managed Support <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" /></button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors flex items-center gap-2">Business Fibre</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors flex items-center gap-2">Cloud Infrastructure</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors flex items-center gap-2">Cyber Security</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors flex items-center gap-2">VOIP & PBX</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 text-left">
              <li><button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition-colors">Our Story</button></li>
              <li><button onClick={() => handleNavClick('solutions')} className="hover:text-blue-400 transition-colors">Digital Architect</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-blue-400 transition-colors">Technical Help Center</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="hover:text-blue-400 transition-colors">Contact HQ</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-blue-400 transition-colors">Careers</button></li>
            </ul>
          </div>

          <div className="glass p-8 rounded-3xl border-white/5">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">Contact HQ</h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="leading-relaxed">5676 Tloome Street Orlando East, Soweto, 1804</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+27 10 591 0095</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@quadrolink.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-[11px] text-slate-500 gap-6 uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Quadrolink Technologies (Pty) Ltd.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">PAIA</a>
            <a href="#" className="hover:text-white transition-colors">BBBEE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
