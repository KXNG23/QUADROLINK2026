
import React, { useState, useRef } from 'react';
import { SERVICES, ICONS } from '../constants';
import { ArrowUpRight, X, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  isFullPage?: boolean;
  showLink?: boolean;
  onLinkClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ isFullPage = false, showLink = false, onLinkClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const handleRelatedClick = (service: Service) => {
    setSelectedService(service);
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const relatedServices = selectedService 
    ? SERVICES.filter(s => s.category === selectedService.category && s.id !== selectedService.id)
    : [];

  return (
    <section id="services" className={`${isFullPage ? 'pt-40 pb-24' : 'py-24'} px-6 relative`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-500 font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4">Enterprise Portfolio</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">Solutions That Power <br />Your Business.</h3>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                We offer comprehensive ICT services from desktop support to advanced cloud architecture and telecommunications.
              </p>
              {showLink && (
                <button 
                  onClick={onLinkClick}
                  className="flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group"
                >
                  Explore All Capabilities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              onClick={() => openModal(service)}
              className="group glass rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/60 hover:scale-[1.02] hover:-translate-y-2 relative cursor-pointer flex flex-col animate-in fade-in slide-in-from-bottom-8 shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-2xl border border-white/20">
                  {ICONS[service.icon]}
                </div>
              </div>

              <div className="p-10 pt-4 flex-1 flex flex-col">
                <span className="text-xs font-mono text-blue-500 font-bold tracking-widest uppercase mb-3 block">{service.category}</span>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-sm font-black text-blue-400 group-hover:translate-x-2 transition-transform uppercase tracking-wider">
                  View Specifications <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {isFullPage && (
          <div className="mt-24 p-12 glass rounded-[3rem] border-white/5 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-black text-white mb-6">Service Level Agreements (SLAs)</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Quadrolink offers customized Service Level Agreements (SLA) to ensure that your business-critical applications and systems are maintained and proactively managed. Our agreements are designed to minimize downtime and maximize productivity.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Guaranteed Response Times
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> On-site and Remote Support
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Proactive Monitoring
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> Monthly Health Checks
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4">
              <a href="#contact" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl text-center shadow-xl shadow-blue-600/20 transition-all">
                Download Brochure
              </a>
              <a href="#contact" className="w-full glass hover:bg-white/10 text-white font-black py-5 rounded-2xl text-center border-white/10 transition-all">
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-[#0a0c10]/95 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="relative w-full max-w-4xl glass rounded-[3rem] overflow-hidden shadow-2xl border-white/10 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            <button onClick={closeModal} className="absolute top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-blue-600 text-white transition-all z-[120]">
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto scrollbar-hide" ref={modalScrollRef}>
              <div className="h-80 relative">
                <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-2xl border-4 border-[#0a0c10]">
                    {ICONS[selectedService.icon]}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-bold tracking-[0.3em] uppercase mb-2 block">{selectedService.category}</span>
                    <h2 className="text-4xl font-black text-white">{selectedService.title}</h2>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-slate-300 text-xl leading-relaxed font-medium">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                   {[
                    "24/7 Priority Assistance",
                    "Dedicated Account Manager",
                    "Cyber Security Integration",
                    "Custom Solution Scaling",
                    "Enterprise Compliance",
                    "Quarterly Performance Reviews"
                   ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-200 uppercase tracking-wide">{feature}</span>
                    </div>
                   ))}
                </div>

                {/* Related Services Section */}
                {relatedServices.length > 0 && (
                  <div className="mb-12 pt-12 border-t border-white/10">
                    <h4 className="text-sm font-mono font-bold text-slate-500 mb-6 tracking-widest uppercase">Related {selectedService.category} Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedServices.map((related) => (
                        <button
                          key={related.id}
                          onClick={() => handleRelatedClick(related)}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/60 hover:bg-white/10 hover:scale-[1.01] transition-all text-left group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {ICONS[related.icon]}
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm">{related.title}</h5>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Explore Details</span>
                          </div>
                          <ChevronRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="#contact" onClick={closeModal} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-center font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm">
                    Initiate Consultation
                  </a>
                  <button onClick={closeModal} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black py-5 rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-sm">
                    Close Document
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
