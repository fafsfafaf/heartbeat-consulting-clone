import React from 'react';
import { Target, Users, Zap, Trophy, TrendingUp, Brain, Rocket } from 'lucide-react';
import { Button } from './ui/Button';

interface AboutUsProps {
  onOpenModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenModal }) => {
  return (
    <div className="bg-[#141414] min-h-screen text-white pt-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FB841C]/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
               <div className="bg-[#1f1f1f] px-3 py-1.5 rounded-[4px] text-[10px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                  BEHIND THE SYSTEM
               </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              We Build <span className="text-[#FB841C]">Market Leaders</span> <br/>
              in Longevity Medicine.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
              HeartbyteAI wasn't founded to be just another marketing agency. We were built to solve the scalability crisis in the Peptide & HRT sector using specialized AI infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="border-y border-white/10 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-[#FB841C] mb-1">4+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Years Specialized</div>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-[#FB841C] mb-1">$50M+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Revenue Generated</div>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-[#FB841C] mb-1">120+</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Clinics Scaled</div>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold text-[#FB841C] mb-1">#1</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Peptide Partner</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STORY / MISSION --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-[#FB841C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" 
                    alt="Team Planning" 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
               </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-[#FB841C] font-bold tracking-widest uppercase text-sm">Our Philosophy</h3>
              <h2 className="text-4xl font-bold leading-tight">We Don't Guess. <br/>We Engineer Growth.</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Most agencies treat medical clinics like gyms or restaurants. They run generic ads and dump unqualified leads on your front desk. That doesn't work for high-ticket Longevity Medicine.
                </p>
                <p>
                  We realized that the bottleneck wasn't "more leads"—it was <span className="text-white font-bold">speed, qualification, and systems.</span>
                </p>
                <p>
                  We built HeartbyteAI to be the operational backbone of your clinic. We combine world-class medical advertising with AI voice agents that work 24/7.
                </p>
              </div>
              <div className="pt-4">
                <Button onClick={onOpenModal}>Work With Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-[#FB841C]">Code</span> We Live By</h2>
            <p className="text-gray-400">How we ensure you stay #1 in your market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Obsessive Speed', icon: Zap, desc: 'Money loves speed. Our AI contacts leads in seconds, not hours.' },
              { title: 'Data Over Feelings', icon: Brain, desc: 'We don’t rely on "creative intuition". We rely on millions of dollars in ad data.' },
              { title: 'Extreme Ownership', icon: Trophy, desc: 'We don’t blame the market. If it doesn’t work, we fix it until it does.' },
              { title: 'Medical Compliance', icon: Users, desc: 'We know the difference between peptides and proteins. We keep you safe.' },
              { title: 'Scalable Systems', icon: Rocket, desc: 'We build systems that handle 100 patients as easily as 10.' },
              { title: 'Profit First', icon: TrendingUp, desc: 'Vanity metrics like "clicks" don’t pay bills. We focus on Revenue.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#1a1a1a] border border-white/5 rounded-xl hover:border-[#FB841C]/50 transition-colors group">
                <div className="w-12 h-12 bg-[#FB841C]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FB841C] transition-colors">
                  <item.icon className="text-[#FB841C] group-hover:text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FB841C] transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 relative overflow-hidden text-center">
         <div className="absolute inset-0 bg-gradient-to-t from-[#FB841C]/10 to-transparent pointer-events-none"></div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to dominate?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              We only work with one clinic per territory to ensure market dominance. Check if your area is available.
            </p>
            <Button onClick={onOpenModal} className="text-lg px-10 py-4">Check Availability</Button>
         </div>
      </section>

    </div>
  );
};