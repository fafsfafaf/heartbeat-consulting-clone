import React from 'react';
import { Target, PhoneCall, ShieldCheck, Cpu } from 'lucide-react';

const LeverCard = ({ number, title, description, icon: Icon }: { number: string, title: string, description: string, icon: any }) => (
  <div className="group relative p-8 bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-[#FB841C] transition-all duration-500">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <h3 className="text-8xl font-black text-white">{number}</h3>
    </div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-[#FB841C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FB841C] transition-colors duration-500">
        <Icon className="w-8 h-8 text-[#FB841C] group-hover:text-white transition-colors duration-500" />
      </div>
      
      <div className="mb-4">
        <span className="text-xs font-bold text-[#FB841C] tracking-widest uppercase">Lever {number}</span>
        <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
      </div>
      
      <p className="text-hb-text leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-[#141414] bg-grid-pattern bg-grid-size relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent to-[#141414]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h4 className="text-sm font-bold tracking-[0.2em] text-white mb-4">THE <span className="text-hb-orange">SYSTEM</span></h4>
          <h2 className="text-3xl md:text-5xl font-bold">The 4 Levers for a <span className="text-hb-orange">Scalable<br/> Medical Practice</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LeverCard 
            number="01"
            title="AI Speed-to-Lead"
            description="Leads are contacted within 30 seconds by our AI Voice Agents. No lead is ever left cold, ensuring maximum contact rates without staff effort."
            icon={PhoneCall}
          />
          <LeverCard 
            number="02"
            title="Intelligent Qualification"
            description="Our AI filters candidates based on medical criteria and financial qualification. You only speak to patients ready for high-ticket protocols."
            icon={ShieldCheck}
          />
          <LeverCard 
            number="03"
            title="Automated Booking"
            description="Qualified patients are booked directly into your EMR/Calendar. Your team wakes up to a schedule full of confirmed consultations."
            icon={Target}
          />
          <LeverCard 
            number="04"
            title="Operational Efficiency"
            description="Reduce front-desk overhead. Our system handles follow-ups, confirmations, and reactivation campaigns automatically."
            icon={Cpu}
          />
        </div>
      </div>
    </section>
  );
};