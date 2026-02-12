
import React, { useState, useEffect } from 'react';
import { MousePointer2, ChevronLeft, ChevronRight, Zap, ArrowRight, MessageCircle } from 'lucide-react';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
    title: "Innovative ICT Architectures",
    subtitle: "Leading South Africa's digital revolution with high-performance infrastructure and elite consulting.",
    badge: "PRECISION INFRASTRUCTURE"
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    title: "Advanced Cyber Resilience",
    subtitle: "Enterprise-grade security protocols to safeguard your most valuable digital assets against evolving threats.",
    badge: "ZERO-TRUST SECURITY"
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070",
    title: "Seamless Cloud Evolution",
    subtitle: "Modernize your workflow with expert Microsoft 365 and Azure deployments tailored for scale.",
    badge: "CLOUD-FIRST STRATEGY"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 -z-10 bg-black">
        {SLIDES.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
            />
          </div>
        ))}
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c10]/60 via-transparent to-[#0a0c10]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[#0a0c10]/20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8 backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-700">
            <Zap className="w-3 h-3 fill-blue-400" />
            {SLIDES[currentSlide].badge}
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {SLIDES[currentSlide].title.split(' ').slice(0, -1).join(' ')} <br /> 
            <span className="gradient-text">{SLIDES[currentSlide].title.split(' ').slice(-1)}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {SLIDES[currentSlide].subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a href="#services" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1">
              Our Solutions 
              <MousePointer2 className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://wa.me/27828866031" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:border-white/20 flex items-center justify-center gap-2 group"
            >
              WhatsApp Chat
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-12 right-6 md:right-12 flex items-center gap-6">
        <div className="flex gap-2">
          {SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-12 bg-blue-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 text-white transition-all border border-white/10 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 text-white transition-all border border-white/10 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
