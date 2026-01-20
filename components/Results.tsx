import React from 'react';
import { Star, TrendingUp, Clock, Wallet } from 'lucide-react';

const ResultCard = ({ 
  metric, 
  metricLabel, 
  quote, 
  author, 
  role,
  icon: Icon 
}: { 
  metric: string, 
  metricLabel: string, 
  quote: string, 
  author: string, 
  role: string,
  icon: any
}) => (
  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group">
    <div className="absolute top-8 right-8 text-gray-200 group-hover:text-[#FB841C]/20 transition-colors">
      <Icon size={40} />
    </div>
    
    {/* Metric Header */}
    <div className="mb-6">
      <div className="text-4xl md:text-5xl font-bold text-[#FB841C] mb-2">{metric}</div>
      <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">{metricLabel}</div>
    </div>

    {/* Quote */}
    <div className="mb-6">
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="fill-[#FB841C] text-[#FB841C]" />
        ))}
      </div>
      <p className="text-gray-700 italic leading-relaxed font-medium">"{quote}"</p>
    </div>

    {/* Author */}
    <div className="border-t border-gray-200 pt-4">
      <div className="font-bold text-black">{author}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  </div>
);

export const Results: React.FC = () => {
  return (
    <section className="bg-white text-black py-24 rounded-[60px] md:rounded-[80px] relative z-20 my-[-40px]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4 uppercase">
            Proven <span className="text-[#FB841C]">Impact</span>
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-black">
            Real Clinics. <br/>
            <span className="text-[#FB841C]">Real Revenue.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We don't deal in hypotheticals. Here is what happens when Peptide & Longevity clinics implement the Heartbyte system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResultCard 
            icon={TrendingUp}
            metric="+ $65k"
            metricLabel="New MRR in 90 Days"
            quote="We were skeptical about AI, but the qualification system is flawless. We added $65k in recurring revenue in our first quarter without hiring new staff."
            author="Dr. Elias V."
            role="Founder, Vitality Med Center"
          />
          <ResultCard 
            icon={Clock}
            metric="20 Hrs"
            metricLabel="Saved Per Week"
            quote="My front desk was drowning in missed calls. Now, the AI handles all initial intake. My team only talks to patients who have already paid a deposit."
            author="Sarah Jenkins"
            role="Practice Manager, Pure Health"
          />
          <ResultCard 
            icon={Wallet}
            metric="12x"
            metricLabel="Return on Ad Spend"
            quote="We stopped wasting money on leads who couldn't afford therapy. The system filters out the noise. Every appointment on my calendar is a qualified buyer."
            author="Mark D."
            role="Director, Apex Longevity"
          />
        </div>

      </div>
    </section>
  );
};
