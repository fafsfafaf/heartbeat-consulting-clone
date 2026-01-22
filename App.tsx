import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { SystemWorkflow } from './components/SystemWorkflow';
import { WhoWeServe } from './components/WhoWeServe';
import { TargetAudience } from './components/TargetAudience';
import { Challenges } from './components/Challenges';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { AboutUs } from './components/AboutUs';
import { Careers } from './components/Careers';
import { Blog } from './components/Blog';
import { ArrowRight } from 'lucide-react';

// Lazy load BookingModal
const BookingModal = React.lazy(() => import('./components/BookingModal').then(module => ({ default: module.BookingModal })));

const FinalCTA = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="py-32 md:py-40 bg-[#141414] relative overflow-hidden">

    {/* Subtle Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FB841C]/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

    <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
      <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-[#1f1f1f] px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] text-[#FB841C] border border-[#FB841C]/20 uppercase shadow-[0_0_20px_rgba(251,132,28,0.1)]">
          The Final Decision
        </div>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
        Scale your practice <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">without the burnout.</span>
      </h2>

      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Join the top 1% of Peptide Clinics that rely on automated systems, not manual labor.
        Your market is waiting.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button onClick={onOpenModal} className="text-lg py-5 px-12 h-auto text-base shadow-[0_0_40px_rgba(251,132,28,0.3)] hover:shadow-[0_0_60px_rgba(251,132,28,0.5)]">
          Start Your Growth Engine <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>90-Day Performance Guarantee</span>
        </div>
        <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700"></div>
        <div>
          No Long-Term Contracts
        </div>
        <div className="hidden md:block w-1 h-1 rounded-full bg-gray-700"></div>
        <div>
          Exclusivity Per Territory
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'serve' | 'career' | 'blog'>('home');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateTo = (page: 'home' | 'about' | 'serve' | 'career' | 'blog') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Preload the BookingModal when the user begins to interact with the page
  useEffect(() => {
    const preloadModal = () => {
      import('./components/BookingModal');
    };

    // Preload on mouse movement (high probability of interaction)
    window.addEventListener('mousemove', preloadModal, { once: true });
    // Preload on touch (mobile)
    window.addEventListener('touchstart', preloadModal, { once: true });

    return () => {
      window.removeEventListener('mousemove', preloadModal);
      window.removeEventListener('touchstart', preloadModal);
    };
  }, []);

  return (
    <div className="bg-[#141414] text-white font-sans selection:bg-[#FB841C] selection:text-white">
      <Header onOpenModal={openModal} onNavigate={navigateTo} />

      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenModal={openModal} />
            <Stats />
            <TargetAudience />
            <Challenges />
            <SystemWorkflow onOpenModal={openModal} />
            <Results />
            <FinalCTA onOpenModal={openModal} />
          </>
        ) : currentPage === 'about' ? (
          <AboutUs onOpenModal={openModal} />
        ) : currentPage === 'serve' ? (
          <WhoWeServe onOpenModal={openModal} />
        ) : currentPage === 'career' ? (
          <Careers onOpenModal={openModal} />
        ) : (
          <Blog onOpenModal={openModal} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <Suspense fallback={null}>
        {isModalOpen && <BookingModal isOpen={isModalOpen} onClose={closeModal} />}
      </Suspense>
    </div>
  );
}

export default App;