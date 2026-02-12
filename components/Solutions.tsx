
import React from 'react';
import { Building2, Gavel, Landmark, Smartphone, Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import GeminiAssistant from './GeminiAssistant';

const INDUSTRY_SOLUTIONS = [
  {
    icon: <Gavel className="w-8 h-8 text-blue-500" />,
    title: "Legal & Professional",
    description: "Highly secure, compliant document management and cloud PBX for busy law firms.",
    benefits: ["POPIA Compliance", "Zero-Downtime VOIP", "Secure Backup"]
  },
  {
    icon: <Landmark className="w-8 h-8 text-indigo-500" />,
    title: "Financial Services",
    description: "Reliable connectivity and robust firewalling for high-frequency trading and accounting.",
    benefits: ["Low Latency Fiber", "Multi-Layer Security", "Audit Logs"]
  },
  {
    icon: <Building2 className="w-8 h-8 text-cyan-500" />,
    title: "SMEs & Startups",
    description: "Scalable infrastructure that grows as you do, from first hire to nationwide office.",
    benefits: ["Managed Support", "Office 365 Migration", "Fixed Monthly Cost"]
  }
];

interface SolutionsProps {
  isFullPage?: boolean;
  showLink?: boolean;
  onLinkClick?: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ isFullPage = false, showLink = false, onLinkClick }) => {
  return (
    <section id="solutions" className={`${isFullPage ? 'pt-40 pb-24' : 'pt-32 pb-24'} px-6 bg-[#0a0c10]`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-blue-500 font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4">Vertical Specialization</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Built for Your Industry.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            We understand that technology requirements differ by sector. Quadrolink provides tailored frameworks that meet your specific industry standards.
          </p>
          {showLink && (
            <button 
              onClick={onLinkClick}
              className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group"
            >
              View Strategic Architectures <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {INDUSTRY_SOLUTIONS.map((item, idx) => (
            <div key={idx} className="glass p-10 rounded-[3rem] border-white/5 hover:border-blue-500/30 transition-all group animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-blue-600/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-2xl font-black text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                {item.description}
              </p>
              <div className="space-y-3">
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                    <Zap className="w-3 h-3 text-blue-400" /> {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Integration Section - Always visible but prioritized in full page */}
        <GeminiAssistant />
      </div>
    </section>
  );
};

export default Solutions;
