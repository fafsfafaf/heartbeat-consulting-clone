import React from 'react';
import { Target, Bot, CalendarCheck, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from './ui/Button';

interface SystemWorkflowProps {
  onOpenModal: () => void;
}

export const SystemWorkflow: React.FC<SystemWorkflowProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-[#141414] relative overflow-hidden">
      
      {/* Background Gradient / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#362515]/40 via-[#141414] to-[#141414] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADLINE SECTION --- */}
        <div className="text-center mb-20">
           <div className="inline-block mb-4">
                <div className="bg-[#1f1f1f] px-3 py-1.5 rounded-[4px] text-[10px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                    SYSTEM ARCHITECTURE
                </div>
           </div>
           
           <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
             The 4 Levers of <br />
             <span className="font-script text-[#FB841C] text-6xl md:text-7xl mt-2 block transform -rotate-2">
               Automated Growth
             </span>
           </h2>
        </div>

        {/* --- TREE DIAGRAM LAYOUT --- */}
        <div className="max-w-5xl mx-auto flex flex-col items-center relative">
            
            {/* 1. TOP NODE (LEVER 01): SPEED TO LEAD */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-4 relative z-20">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-[#141414] border border-[#FB841C]/30 shadow-[0_0_30px_rgba(251,132,28,0.2)] flex items-center justify-center shrink-0 relative group">
                    <div className="absolute inset-0 bg-[#FB841C]/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <Zap size={32} className="text-[#FB841C] relative z-10 fill-[#FB841C]" />
                </div>
                
                {/* Text Box */}
                <div className="bg-[#111]/80 border border-[#FB841C]/30 p-6 rounded-lg max-w-md text-center md:text-left backdrop-blur-sm hover:border-[#FB841C] transition-colors duration-300">
                    <div className="text-[#FB841C] text-[10px] font-bold tracking-widest uppercase mb-1">Lever 01</div>
                    <h3 className="text-white font-bold text-lg mb-2">AI Speed-to-Lead</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leads are contacted <strong>within 30 seconds</strong> by our AI Voice Agents. No lead is ever left cold, ensuring maximum contact rates without staff effort.
                    </p>
                </div>
            </div>

            {/* CONNECTING LINE: VERTICAL TOP */}
            <div className="h-16 w-[2px] border-l-2 border-dashed border-[#FB841C]/50 my-2"></div>

            {/* 2. CENTER NODE (LOGO) */}
            <div className="relative z-20 mb-8">
                 <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border-2 border-[#FB841C]/20 flex items-center justify-center shadow-[0_0_40px_rgba(251,132,28,0.15)] relative">
                    <div className="absolute inset-2 border border-[#FB841C]/10 rounded-full"></div>
                    {/* HB Logo Text */}
                    <span className="text-3xl font-black text-white tracking-tighter">
                        HB
                    </span>
                 </div>
            </div>

            {/* CONNECTING LINES: FORK (Left & Right) */}
            <div className="w-full max-w-3xl h-16 relative mb-8 hidden md:block">
                {/* Horizontal Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] border-t-2 border-dashed border-[#FB841C]/40 rounded-t-3xl"></div>
                {/* Vertical Lines Down */}
                <div className="absolute top-0 left-0 h-full w-[2px] border-l-2 border-dashed border-[#FB841C]/40"></div>
                <div className="absolute top-0 right-0 h-full w-[2px] border-r-2 border-dashed border-[#FB841C]/40"></div>
            </div>

            {/* 3. MIDDLE NODES ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl relative z-20 mb-8">
                
                {/* LEFT NODE (LEVER 02): QUALIFICATION */}
                <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#141414] border border-[#FB841C]/30 shadow-[0_0_30px_rgba(251,132,28,0.1)] flex items-center justify-center mb-6 group transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,132,28,0.4)]">
                        <ShieldCheck size={32} className="text-[#FB841C] group-hover:scale-110 transition-transform" />
                    </div>
                    {/* Content Box */}
                    <div className="bg-[#111]/80 border border-[#FB841C]/20 p-6 rounded-lg w-full hover:border-[#FB841C] transition-colors duration-300 min-h-[160px] flex flex-col justify-center">
                         <div className="text-[#FB841C] text-[10px] font-bold tracking-widest uppercase mb-1">Lever 02</div>
                         <h3 className="text-white font-bold text-lg mb-3">Intelligent Qualification</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                            Our AI filters candidates based on medical criteria and financial qualification. You only speak to patients ready for <strong>high-ticket protocols</strong>.
                         </p>
                    </div>
                </div>

                {/* RIGHT NODE (LEVER 03): BOOKING */}
                <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-[#141414] border border-[#FB841C]/30 shadow-[0_0_30px_rgba(251,132,28,0.1)] flex items-center justify-center mb-6 group transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,132,28,0.4)]">
                        <CalendarCheck size={32} className="text-[#FB841C] group-hover:scale-110 transition-transform" />
                    </div>
                    {/* Content Box */}
                    <div className="bg-[#111]/80 border border-[#FB841C]/20 p-6 rounded-lg w-full hover:border-[#FB841C] transition-colors duration-300 min-h-[160px] flex flex-col justify-center">
                         <div className="text-[#FB841C] text-[10px] font-bold tracking-widest uppercase mb-1">Lever 03</div>
                         <h3 className="text-white font-bold text-lg mb-3">Automated Booking</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                            Qualified patients are booked directly into your <strong>EMR/Calendar</strong>. Your team wakes up to a schedule full of confirmed consultations.
                         </p>
                    </div>
                </div>

            </div>

             {/* CONNECTING LINES: MERGE (Left & Right to Bottom Center) */}
            <div className="w-full max-w-3xl h-16 relative hidden md:block">
                 {/* Vertical Lines Up */}
                <div className="absolute bottom-0 left-0 h-full w-[2px] border-l-2 border-dashed border-[#FB841C]/40"></div>
                <div className="absolute bottom-0 right-0 h-full w-[2px] border-r-2 border-dashed border-[#FB841C]/40"></div>
                 {/* Horizontal Line Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] border-b-2 border-dashed border-[#FB841C]/40 rounded-b-3xl"></div>
                 {/* Vertical Center Connector Down */}
                 <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-[2px] border-l-2 border-dashed border-[#FB841C]/40"></div>
            </div>

            {/* Spacer for Mobile layout */}
            <div className="h-8 md:h-16"></div>

            {/* 4. BOTTOM NODE (LEVER 04): EFFICIENCY */}
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-20">
                {/* Text Box (Order 2 on mobile, 1 on desktop for left alignment if desired, but centered here) */}
                <div className="order-2 md:order-1 bg-[#111]/80 border border-[#FB841C]/30 p-6 rounded-lg max-w-md text-center md:text-right backdrop-blur-sm hover:border-[#FB841C] transition-colors duration-300">
                    <div className="text-[#FB841C] text-[10px] font-bold tracking-widest uppercase mb-1">Lever 04</div>
                    <h3 className="text-white font-bold text-lg mb-2">Operational Efficiency</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Reduce front-desk overhead. Our system handles follow-ups, confirmations, and reactivation campaigns <strong>automatically</strong>.
                    </p>
                </div>

                 {/* Icon Circle (Order 1 on mobile, 2 on desktop) */}
                 <div className="order-1 md:order-2 w-20 h-20 rounded-full bg-[#141414] border border-[#FB841C]/30 shadow-[0_0_30px_rgba(251,132,28,0.2)] flex items-center justify-center shrink-0 relative group">
                    <div className="absolute inset-0 bg-[#FB841C]/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    <Cpu size={32} className="text-[#FB841C] relative z-10" />
                </div>
            </div>

        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 flex flex-col items-center">
             <Button 
                icon 
                onClick={onOpenModal}
                className="text-lg px-12 py-4 bg-[#FB841C] hover:bg-[#e07515] shadow-[0_0_30px_rgba(251,132,28,0.4)] border border-[#FB841C] rounded-[8px] font-bold tracking-widest"
             >
                BOOK A FREE CALL
             </Button>
             <p className="mt-4 text-white text-sm italic font-medium opacity-90 text-center max-w-sm px-4">
                90-Day Guarantee: 30 Financially Qualified Appts or You Don't Pay.
             </p>
        </div>

      </div>
    </section>
  );
};