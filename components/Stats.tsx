import React from 'react';

const StatItem = ({ number, suffix, text, icon }: { number: string, suffix: string, text: string, icon?: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center p-6 border border-white/5 bg-[#111]/50 rounded-lg hover:border-[#FB841C]/30 transition-colors duration-300">
    <div className="text-4xl md:text-5xl font-bold text-[#FB841C] mb-2 flex items-baseline">
      {number}
      <span className="text-3xl ml-1 text-[#FB841C]">{suffix}</span>
    </div>
    <div className="h-1 w-12 bg-[#FB841C] mb-4 rounded-full"></div>
    <p className="text-center text-white font-medium uppercase tracking-wide leading-tight" dangerouslySetInnerHTML={{ __html: text }}></p>
  </div>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem number="120" suffix="+" text="Clinics<br>Scaled" />
          <StatItem number="50" suffix=" M $+" text="Generated in<br>Patient Revenue" />
          <StatItem number="24" suffix="/7" text="AI Voice<br>Coverage" />
          <StatItem number="100" suffix="%" text="Peptide & HRT<br>Focused" />
        </div>
      </div>
    </section>
  );
};