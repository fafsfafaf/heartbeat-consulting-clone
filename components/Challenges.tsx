import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-200 transition-colors duration-300 ${isOpen ? 'bg-gray-50' : ''}`}>
      <button 
        className="w-full py-6 px-4 md:px-8 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <h4 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-[#FB841C]' : 'text-black group-hover:text-[#FB841C]'}`}>
          {title}
        </h4>
        <div className={`p-2 rounded-full border transition-all ${isOpen ? 'border-[#FB841C] bg-[#FB841C] text-white' : 'border-gray-300 text-gray-500'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 md:px-8 md:pb-8 text-gray-600 leading-relaxed font-medium">
          {description}
        </div>
      </div>
    </div>
  );
};

export const Challenges: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const challenges = [
    {
      title: "Front Desk Overload & Missed Calls",
      description: "Your reception staff is buried in administrative work. They cannot answer every phone call immediately. In the peptide business, speed-to-lead is critical. Every missed call is potentially $2,000+ in lost Patient Lifetime Value."
    },
    {
      title: "Wasting Time on 'Tire Kickers'",
      description: "You generate leads, but your staff spends hours chasing people who can't afford high-ticket peptide therapies. You need a system that filters out unqualified prospects *before* they speak to your medical team."
    },
    {
      title: "High No-Show Rates for Consultations",
      description: "Patients book appointments and then vanish. Manual confirmation calls fall through the cracks when the clinic is busy. This leaves gaps in your provider's schedule that cost you revenue directly."
    },
    {
      title: "Reliance on Referrals Only",
      description: "Word of mouth is great, but it's not scalable. To grow from a local clinic to a dominant regional player, you need a predictable acquisition system that doesn't depend on who your current patients talk to."
    },
    {
      title: "Scaling Means More Payroll",
      description: "Usually, more patients mean hiring more front desk staff to handle the phones. This kills your margins. You need a way to scale patient volume without linearly scaling your payroll expenses."
    },
    {
      title: "Generic Agencies Don't Understand Compliance",
      description: "Most marketing agencies treat you like a gym. They use hype-y language that risks your medical license. You need a partner who understands HIPAA, medical advertising nuances, and the specific language of longevity medicine."
    }
  ];

  return (
    <section className="py-24 bg-white rounded-[60px] md:rounded-[80px] relative z-10 text-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4">CLINIC <span className="text-[#FB841C]">BOTTLENECKS</span></h4>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">Why <span className="text-[#FB841C]">most Peptide Clinics</span><br className="hidden md:block"/> hit a revenue ceiling.</h2>
        </div>

        <div className="max-w-4xl mx-auto border-t border-gray-200">
          {challenges.map((challenge, index) => (
            <AccordionItem 
              key={index}
              title={challenge.title}
              description={challenge.description}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};