import React, { useState } from 'react';
import { ArrowRight, Globe, Zap, Monitor, Users } from 'lucide-react';
import { Button } from './ui/Button';
import { ApplicationModal } from './ApplicationModal';

interface CareersProps {
  onOpenModal: () => void;
}

const JobCard = ({ title, department, location, type, onApply }: { title: string, department: string, location: string, type: string, onApply: () => void }) => (
  <div className="group border border-white/10 bg-[#1a1a1a] p-6 rounded-xl hover:border-[#FB841C] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[#FB841C] text-[10px] font-bold uppercase tracking-widest border border-[#FB841C]/30 px-2 py-1 rounded">{department}</span>
        <span className="text-gray-500 text-xs font-medium flex items-center gap-1"><Globe size={10} /> {location}</span>
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-[#FB841C] transition-colors">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{type}</p>
    </div>
    <div className="shrink-0">
       <button onClick={onApply} className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
          View Role <ArrowRight size={16} className="text-[#FB841C]" />
       </button>
    </div>
  </div>
);

export const Careers: React.FC<CareersProps> = ({ onOpenModal }) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const openApplication = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsAppModalOpen(true);
  };

  const closeApplication = () => {
    setIsAppModalOpen(false);
    // Clear job title after animation (handled in modal, but safe here too)
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <div className="bg-[#141414] min-h-screen pt-32 pb-24 relative">
        
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24 text-center">
        <div className="inline-block mb-6">
            <div className="bg-[#1f1f1f] px-3 py-1.5 rounded-[4px] text-[10px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                JOIN THE MISSION
            </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Build the Future of <br/>
            <span className="text-[#FB841C]">Medical Growth.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            We are a rapidly growing team of engineers, marketers, and medical strategists tailored to dominate the longevity market. We don't hire employees; we hire owners.
        </p>
      </section>

      {/* Open Positions - Added top border for visual separation since benefits section is gone */}
      <section className="container mx-auto px-4 py-24 border-t border-white/5">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
                <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
                <p className="text-gray-400">We are currently scaling our Engineering and Client Success teams.</p>
             </div>
             <Button 
                variant="outline" 
                onClick={() => openApplication("General Application")} 
                className="mt-6 md:mt-0"
             >
                Don't see your role?
             </Button>
         </div>

         <div className="space-y-4 max-w-4xl">
            {/* Engineering */}
            <h3 className="text-white font-bold text-lg mt-8 mb-4 flex items-center gap-2"><Monitor size={16} className="text-[#FB841C]" /> Engineering & Product</h3>
            <JobCard 
                title="Senior Full-Stack Engineer (React/Node)" 
                department="Engineering" 
                location="Remote (EU/US Timezone)" 
                type="Full-Time • $120k - $160k + Equity"
                onApply={() => openApplication("Senior Full-Stack Engineer")}
            />
            <JobCard 
                title="AI Prompt Engineer & Automation Specialist" 
                department="R&D" 
                location="Remote (Global)" 
                type="Full-Time • Competitive + Bonus"
                onApply={() => openApplication("AI Prompt Engineer")}
            />

            {/* Growth */}
            <h3 className="text-white font-bold text-lg mt-12 mb-4 flex items-center gap-2"><Zap size={16} className="text-[#FB841C]" /> Growth & Sales</h3>
            <JobCard 
                title="Senior Account Executive - Enterprise" 
                department="Sales" 
                location="New York / Remote" 
                type="Full-Time • $250k OTE"
                onApply={() => openApplication("Senior Account Executive")}
            />
            <JobCard 
                title="Head of Performance Marketing" 
                department="Growth" 
                location="London / Remote" 
                type="Full-Time • Competitive"
                onApply={() => openApplication("Head of Performance Marketing")}
            />

             {/* Operations */}
            <h3 className="text-white font-bold text-lg mt-12 mb-4 flex items-center gap-2"><Users size={16} className="text-[#FB841C]" /> Customer Success</h3>
            <JobCard 
                title="Client Success Manager (Peptide Experience Req.)" 
                department="Operations" 
                location="Remote (US Timezone)" 
                type="Full-Time • $80k - $110k"
                onApply={() => openApplication("Client Success Manager")}
            />
         </div>
         
         <div className="mt-16 p-8 rounded-2xl bg-[#FB841C] text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to do the best work of your life?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                If you are obsessive about quality and want to change how medical clinics grow, we want to hear from you.
            </p>
            <button 
                onClick={() => openApplication("General Application")}
                className="bg-white text-[#FB841C] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
                Apply General Interest
            </button>
         </div>

      </section>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isAppModalOpen}
        onClose={closeApplication}
        jobTitle={selectedJob || "General Application"}
      />
    </div>
  );
};