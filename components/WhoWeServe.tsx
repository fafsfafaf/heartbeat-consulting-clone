import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Activity, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

interface WhoWeServeProps {
  onOpenModal?: () => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ onOpenModal }) => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segments = [
    {
      title: "Peptide & HRT Clinics",
      subtitle: "The Core of Our Expertise",
      description: "We understand the nuances of GLP-1s, TRT, and BHRT. We know what you can and cannot say. We scale clinics by connecting them with high-intent patients looking for life-changing therapies, not just cheap quick fixes.",
      image: "/assets/who-we-serve-1.jpg"
    },
    {
      title: "Medical Spas & Aesthetics",
      subtitle: "High-Ticket Transformations",
      description: "Stop selling discounted Botox. We help Med Spas position themselves as premium medical authorities, attracting patients for high-margin procedures like Morpheus8, CoolSculpting, and full facial balancing.",
      // New image: High-tech/Modern Clinic Interior (Neutral/Male-friendly)
      image: "/assets/who-we-serve-2.jpg"
    },
    {
      title: "Regenerative Medicine",
      subtitle: "Cutting Edge Treatments",
      description: "For clinics offering stem cell therapy, exosomes, and PRP. Our system educates the patient before they ever speak to you, so they understand the value of investing in their long-term health span.",
      image: "/assets/who-we-serve-3.jpg"
    },
    {
      title: "Functional Health",
      subtitle: "Root Cause Resolution",
      description: "We help Functional Medicine practitioners move away from the 'hourly trade' model by attracting patients ready to commit to comprehensive, high-value testing and treatment packages.",
      // New image: Doctor analyzing data/tablet (Scientific/Male focus)
      image: "/assets/who-we-serve-4.jpg"
    }
  ];

  return (
    <div id="who-we-serve" className="bg-[#141414] min-h-screen pt-32 relative">
      <div className="container mx-auto px-4">

        {/* --- HEADER --- */}
        <div className="mb-20 max-w-4xl">
          <div className="inline-block mb-6">
            <div className="bg-[#1f1f1f] px-3 py-1.5 rounded-[4px] text-[10px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
              WHO WE SERVE
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We Are the <span className="text-[#FB841C]">Ideal Partner</span> <br />
            for Your Practice.
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl">
            No matter the type of aesthetic practice or medical service you offer,
            we have tailored solutions that understand your compliance needs and patient psychology.
          </p>
        </div>

        {/* --- INTERACTIVE SEGMENTS --- */}
        <div className="flex flex-col lg:flex-row gap-16 mb-32">

          {/* Left Side: List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={`group border-t border-white/10 py-10 cursor-pointer transition-all duration-300 ${activeSegment === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onMouseEnter={() => setActiveSegment(index)}
              >
                <div className="flex items-start gap-6">
                  <div className="text-sm font-bold text-[#FB841C] mt-2">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-3xl md:text-4xl font-bold mb-2 transition-colors ${activeSegment === index ? 'text-white' : 'text-gray-300'}`}>
                      {segment.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSegment === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <h4 className="text-[#FB841C] text-sm font-bold uppercase tracking-widest mb-2">{segment.subtitle}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base pr-8">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-2 transition-transform duration-300 ${activeSegment === index ? 'translate-x-2 text-[#FB841C]' : 'text-gray-600'}`}>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-white/10"></div>
          </div>

          {/* Right Side: Image Display */}
          <div className="hidden lg:block w-1/2 relative h-[600px] sticky top-32">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeSegment === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60 z-10"></div>

                  <img
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Label */}
                  <div className="absolute bottom-8 left-8 z-20 bg-[#141414]/90 px-6 py-4 rounded-lg border border-white/10 border-l-4 border-l-[#FB841C]">
                    <span className="block text-[#FB841C] text-xs font-bold uppercase tracking-widest mb-1">Tailored Strategy</span>
                    <span className="block text-white font-bold text-xl">{segment.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- COMMON THREAD SECTION (Added for visual weight) --- */}
        <div className="py-24 border-t border-white/5 relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">The <span className="text-[#FB841C]">Common Thread</span></h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              While the modalities differ, the economics of elite private practice remain the same.
              We specialize in high-ticket, recurring revenue models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-[#FB841C]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FB841C]/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-[#FB841C]" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">High Lifetime Value</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't work with one-off transaction models. We build systems for clinics where a patient is worth $5,000+ per year.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-[#FB841C]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FB841C]/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#FB841C]" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Medical Authority</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our marketing never sounds "salesy". It establishes you as the undisputed expert in your local territory.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 hover:border-[#FB841C]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FB841C]/10 rounded-lg flex items-center justify-center mb-6">
                <Activity className="text-[#FB841C]" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Patient Outcomes</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We attract patients who are motivated and compliant, leading to better clinical results and more referrals.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* --- SOFT END / CTA SECTION (Added for soft ending) --- */}
      <div className="relative py-24 mt-12 bg-gradient-to-b from-[#141414] to-[#0f0f0f] border-t border-white/5 overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FB841C]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't see your specific niche?
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            If you offer high-ticket medical services that improve quality of life, our system can scale it.
            We are selective about who we partner with.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {onOpenModal && (
              <Button onClick={onOpenModal} className="px-10 py-4 text-base">
                Check Market Availability
              </Button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};