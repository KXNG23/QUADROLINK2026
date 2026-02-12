
import React from 'react';
import { Target, Users, Award, Shield, CheckCircle, Eye, Rocket, Heart, ArrowRight } from 'lucide-react';

interface AboutProps {
  isFullPage?: boolean;
  showLink?: boolean;
  onLinkClick?: () => void;
}

const About: React.FC<AboutProps> = ({ isFullPage = false, showLink = false, onLinkClick }) => {
  return (
    <section id="about" className={`${isFullPage ? 'pt-40 pb-24' : 'py-32'} px-6 relative overflow-hidden bg-[#0a0c10]`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Engineering Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-white">
              South Africa's <br />
              <span className="text-blue-500">Trusted ICT</span> Partner.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Quadrolink IT & Telecommunications Pty Ltd is a South African based company that provides end-to-end ICT services and solutions. We specialize in providing a wide range of services to small, medium, and large enterprises, ensuring their technology infrastructure is not just operational, but a competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Strategic Vision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Tailored roadmaps that align IT infrastructure with your long-term commercial goals.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Unfailing Defense</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Proactive monitoring and multi-layered security protocols protecting your data 24/7.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-slate-300">BBBEE Level 1</span>
              </div>
              {showLink && (
                <button 
                  onClick={onLinkClick}
                  className="flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group"
                >
                  Our Company Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-64 rounded-3xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Corporate Office"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="text-5xl font-black text-white block">12+</span>
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-2">Years of Impact</p>
                  </div>
                </div>
                <div className="glass p-8 rounded-3xl border-blue-500/20">
                  <Users className="w-8 h-8 text-blue-500 mb-6" />
                  <span className="text-3xl font-black text-white block">850+</span>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Active Clients</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="glass p-8 rounded-3xl border-white/10 bg-white/5">
                  <Award className="w-8 h-8 text-indigo-400 mb-6" />
                  <span className="text-3xl font-black text-white block">99.9%</span>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Uptime Reliability</p>
                </div>
                <div className="h-64 rounded-3xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Network Engineering"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                     <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                       <span className="font-bold text-[10px] tracking-[0.2em] uppercase text-white">Live Operations</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 blur-[120px] rounded-full"></div>
          </div>
        </div>

        {isFullPage && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-blue-500/20 transition-all">
              <Eye className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                To be the leading ICT solutions provider in South Africa, recognized for our innovation, technical expertise, and unwavering commitment to client success.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-indigo-500/20 transition-all">
              <Rocket className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Empowering businesses through reliable, scalable, and cutting-edge technology solutions that drive efficiency and growth in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-purple-500/20 transition-all">
              <Heart className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="text-slate-400 leading-relaxed text-sm space-y-2">
                <li className="flex items-center gap-2 font-medium">• Integrity & Transparency</li>
                <li className="flex items-center gap-2 font-medium">• Technical Excellence</li>
                <li className="flex items-center gap-2 font-medium">• Customer-Centric Approach</li>
                <li className="flex items-center gap-2 font-medium">• Continuous Innovation</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
