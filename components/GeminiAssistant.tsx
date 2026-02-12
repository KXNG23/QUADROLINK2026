
import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, RefreshCcw } from 'lucide-react';
import { getITRecommendations } from '../services/gemini';
import { BusinessNeed, AIRecommendation } from '../types';

const GeminiAssistant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIRecommendation | null>(null);
  const [needs, setNeeds] = useState<BusinessNeed>({
    companySize: '1-10 Employees',
    industry: 'Professional Services',
    primaryConcern: 'Security & Remote Work'
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await getITRecommendations(needs);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="solutions" className="py-24 px-6 bg-[#0d1016]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            POWERED BY GEMINI AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Smart Solutions Architect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tell our AI about your business, and we'll generate a custom ICT roadmap in seconds.</p>
        </div>

        <div className="glass rounded-[2rem] p-8 md:p-12 border-blue-500/20">
          {!recommendation ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-500 tracking-wider">BUSINESS SIZE</label>
                <select 
                  className="bg-slate-900 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                  value={needs.companySize}
                  onChange={(e) => setNeeds({...needs, companySize: e.target.value})}
                >
                  <option>1-10 Employees</option>
                  <option>11-50 Employees</option>
                  <option>51-200 Employees</option>
                  <option>200+ Employees</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-500 tracking-wider">INDUSTRY</label>
                <input 
                  type="text"
                  placeholder="e.g. Finance, Healthcare..."
                  className="bg-slate-900 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                  value={needs.industry}
                  onChange={(e) => setNeeds({...needs, industry: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-500 tracking-wider">PRIORITY</label>
                <input 
                  type="text"
                  placeholder="e.g. Cost reduction, security..."
                  className="bg-slate-900 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-all"
                  value={needs.primaryConcern}
                  onChange={(e) => setNeeds({...needs, primaryConcern: e.target.value})}
                />
              </div>
            </div>
          ) : (
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-blue-400">Your Custom Roadmap</h3>
                <button 
                  onClick={() => setRecommendation(null)}
                  className="text-slate-500 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" /> Reset
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-sm font-mono font-bold text-slate-500 mb-4 tracking-widest uppercase">Analysis</h4>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    {recommendation.rationale}
                  </p>
                  
                  <h4 className="text-sm font-mono font-bold text-slate-500 mb-4 tracking-widest uppercase">Implementation Roadmap</h4>
                  <div className="space-y-4">
                    {recommendation.suggestedRoadmap.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-slate-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-sm font-mono font-bold text-slate-500 mb-6 tracking-widest uppercase">Recommended Services</h4>
                  <div className="grid gap-3">
                    {recommendation.recommendedServices.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="font-semibold">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!recommendation && (
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Analyzing Needs...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  Generate Recommendation
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAssistant;
