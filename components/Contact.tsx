
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, ShieldCheck, Printer } from 'lucide-react';

interface ContactProps {
  isFullPage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isFullPage = false }) => {
  return (
    <section id="contact" className={`${isFullPage ? 'pt-32 pb-24' : 'py-32'} px-6 bg-[#0a0c10]`}>
      <div className="max-w-7xl mx-auto">
        {isFullPage && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             <div className="glass p-8 rounded-[2rem] border-white/5 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Trading Hours</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Mon - Fri: 08:00 - 17:00</p>
                </div>
             </div>
             <div className="glass p-8 rounded-[2rem] border-white/5 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Nationwide Support</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Remote Assistance available 24/7</p>
                </div>
             </div>
             <div className="glass p-8 rounded-[2rem] border-white/5 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">SLA Clients</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Priority Support Hotline Active</p>
                </div>
             </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
              Get in Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Ready to <br /><span className="gradient-text">Level Up?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Don't let legacy systems hold you back. Our experts are standing by to architect your future-proof infrastructure.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:info@quadrolink.co.za" className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">Email Inquiry</p>
                  <p className="text-lg font-bold text-white">info@quadrolink.co.za</p>
                </div>
              </a>

              <a href="tel:+27105910095" className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">Call Support</p>
                  <p className="text-lg font-bold text-white">+27 10 591 0095</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">Fax Number</p>
                  <p className="text-lg font-bold text-white">+27 86 006 6031</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 tracking-widest mb-1 uppercase">HQ Address</p>
                  <p className="text-sm font-bold text-white leading-snug">5676 Tloome Street Orlando East,<br />Soweto, 1804</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-3xl border border-blue-500/20 bg-blue-600/5 flex items-center gap-4">
               <MessageCircle className="w-6 h-6 text-blue-500" />
               <p className="text-sm text-slate-400 font-medium italic">"Average response time under 15 minutes for business inquiries."</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full"></div>
              <h3 className="text-2xl font-black text-white mb-10">Configure Your Consultation</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase ml-1">Full Name</label>
                    <input className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-700" placeholder="Johnathan Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase ml-1">Work Email</label>
                    <input className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-700" placeholder="j.doe@enterprise.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase ml-1">Service Interest</label>
                  <select className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-white appearance-none cursor-pointer">
                    <option>Business Fibre & LTE Connectivity</option>
                    <option>Managed IT Support & Maintenance</option>
                    <option>Azure & Cloud Migration Services</option>
                    <option>Cyber Security Audit & Implementation</option>
                    <option>VOIP & PBX Telephony Solutions</option>
                    <option>Hardware Procurement & Sourcing</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase ml-1">Requirement Brief</label>
                  <textarea rows={4} className="w-full bg-slate-900/50 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-700 resize-none" placeholder="Tell us about your current infrastructure and goals..."></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 group transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  Initiate Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Integrated Google Map Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-white mb-4">Visit Our Headquarters</h3>
            <p className="text-slate-400 font-medium">Strategic Operations Center, Soweto</p>
          </div>
          <div className="w-full h-[450px] rounded-[3rem] overflow-hidden glass border-white/10 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-1000 group">
             <iframe
                src="https://maps.google.com/maps?q=5676%20Tloome%20Street%20Orlando%20East%2CSoweto%20%2C1804&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0a0c10]/20 rounded-[3rem]"></div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-12 text-center">
            <div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Latitude</span>
              <span className="text-lg font-bold text-white">-26.2307</span>
            </div>
            <div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Longitude</span>
              <span className="text-lg font-bold text-white">26.2952</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
