
import React from 'react';
import { BookOpen, Download, HelpCircle, Newspaper, ExternalLink } from 'lucide-react';

const RESOURCE_CARDS = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    title: "Knowledge Base",
    description: "Access our comprehensive library of technical guides and common troubleshooting steps.",
    linkText: "Browse Articles"
  },
  {
    icon: <Download className="w-6 h-6 text-cyan-500" />,
    title: "Support Tools",
    description: "Download remote support applications and network diagnostic utilities recommended by our team.",
    linkText: "Get Downloads"
  },
  {
    icon: <Newspaper className="w-6 h-6 text-indigo-500" />,
    title: "Latest IT Trends",
    description: "Stay updated with the evolving ICT landscape in South Africa with our weekly tech insights.",
    linkText: "Read Blog"
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-purple-500" />,
    title: "FAQ Center",
    description: "Quick answers to common questions about Fibre, VOIP, and Microsoft 365 licensing.",
    linkText: "View FAQs"
  }
];

const Resources: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4">Empowering Clients</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Client Resources & Insights</h3>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            We provide more than just support. Access our technical resources to help your team leverage technology more effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCE_CARDS.map((card, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] hover:border-blue-500/30 transition-all group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-blue-600/10 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {card.description}
              </p>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors">
                {card.linkText} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 glass p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Need Immediate Support?</h4>
            <p className="text-slate-400">Our helpdesk engineers are ready to assist you via phone or remote desktop connection.</p>
          </div>
          <div className="flex gap-4">
            <a href="tel:+27105910095" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
              Call Support
            </a>
            <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold transition-all border border-white/10">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
