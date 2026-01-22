import React, { createElement } from 'react';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  // Constants replacing Live Controller State
  const gridPos = { x: 44, y: -51 };
  const maskPos = { x: 27, y: 34 };
  const gridSize = 115;
  const gridOpacity = 0.35;
  const bottomFadeHeight = 30;

  const typo = {
    headlineSize: 34,
    lineHeight: 1,
    scriptScale: 100,
    scriptY: -3,
    scriptMargin: 8,
    scriptRotate: 0,
    maxWidth: 100,
    breakAfterScript: true,
    breakAfterMonth: true,
    fontFamily: 'Jost, sans-serif',
  };

  return (
    <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-12 lg:min-h-[85vh] flex flex-col justify-center overflow-hidden bg-[#141414]">

      {/* ========================================================================
          SECTION: BACKGROUND SYSTEM (GRID & GRADIENTS)
         ======================================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile Background (Simple, Fast) */}
        <div className="absolute inset-0 lg:hidden bg-[#141414]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FB841C]/5 via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Desktop Background (Complex, Masked) */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            // Dynamic Grid Pattern Generation
            backgroundImage: `linear-gradient(to right, rgba(251, 132, 28, ${gridOpacity}) 1px, transparent 1px),
                                  linear-gradient(to bottom, rgba(251, 132, 28, ${gridOpacity}) 1px, transparent 1px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            // Dynamic Grid Position
            backgroundPosition: `${gridPos.x}px ${gridPos.y}px`,
            // Dynamic Mask Position (The "Spotlight")
            maskImage: `radial-gradient(ellipse at ${maskPos.x}% ${maskPos.y}%, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(ellipse at ${maskPos.x}% ${maskPos.y}%, black 30%, transparent 80%)`,
          }}
        ></div>

        {/* Header Fade Overlay: Top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#141414] via-[#141414]/90 to-transparent"></div>

        {/* Bottom Fade Overlay for Seamless Transition */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent"
          style={{ height: `${bottomFadeHeight}px` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">

          {/* ========================================================================
              SECTION: VIDEO PLAYER (LEFT COLUMN)
             ======================================================================== */}
          <div className="lg:w-[55%] w-full order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#141414] border border-[#333] group aspect-video">
              {/* Wistia Facade */}
              <iframe
                src="https://fast.wistia.net/embed/iframe/qgncf6wce6?videoFoam=true&autoPlay=false"
                title="Heartbyte AI Video"
                allow="autoplay; fullscreen"
                allowTransparency={true}
                frameBorder="0"
                scrolling="no"
                className="w-full h-full absolute inset-0 rounded-xl"
                name="wistia_embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* ========================================================================
              SECTION: TEXT CONTENT (RIGHT COLUMN)
             ======================================================================== */}
          <div className="lg:w-[45%] w-full text-center lg:text-left space-y-3 order-2">

            {/* Badge */}
            <div className="inline-block bg-[#1f1f1f] border border-[#333] rounded-[3px] px-2 py-1 mx-auto lg:mx-0">
              <span className="text-white font-bold text-[9px] tracking-widest uppercase">
                Heartbyte <span className="text-[#FB841C]">AI</span>
              </span>
            </div>

            {/* Headline with Live Styles */}
            <h1
              className="font-bold text-white tracking-tight transition-all duration-200 mx-auto lg:mx-0"
              style={{
                fontSize: `${typo.headlineSize}px`,
                lineHeight: typo.lineHeight,
                maxWidth: `${typo.maxWidth}%`,
                fontFamily: typo.fontFamily,
              }}
            >
              {/* Force first line together */}
              <span className="whitespace-nowrap inline-flex items-baseline flex-wrap justify-center lg:justify-start">
                Get 15–30
                <span
                  className="text-[#FB841C] font-script font-normal inline-block transition-all duration-200 relative"
                  style={{
                    fontSize: `${typo.scriptScale}%`,
                    transform: `translateY(${typo.scriptY}px) rotate(${typo.scriptRotate}deg)`,
                    marginLeft: `${typo.scriptMargin}px`,
                    marginRight: `${typo.scriptMargin}px`,
                  }}
                >
                  Qualified Peptide Patients
                </span>
              </span>

              {/* Conditional Break 1 */}
              {typo.breakAfterScript ? <br className="block" /> : ' '}

              Every Single Month,

              {/* Conditional Break 2 */}
              {typo.breakAfterMonth ? <br className="block" /> : ' '}

              Without Calling Leads.
            </h1>

            {/* Subheadline - UPDATED FOR PEPTIDE CLINICS */}
            <p className="text-gray-300 text-[14px] lg:text-[15px] leading-relaxed max-w-md mx-auto lg:mx-0">
              We work on a Pay-Per-Patient basis. Our average clinic adds an avg. of $60,000-$70,000 in recurring revenue within 90 days.
            </p>

            {/* CTA Box */}
            <div className="bg-[#242424] rounded-lg p-3 lg:p-4 border border-white/5 shadow-xl mt-2 w-full max-w-[420px] mx-auto lg:mx-0">
              <div className="flex flex-col gap-2">
                <Button icon fullWidth variant="primary" onClick={onOpenModal} className="text-sm py-3 font-bold tracking-wider rounded-[4px] whitespace-nowrap">
                  BOOK A FREE CALL
                </Button>
                <p className="text-[10px] text-[#FFFFFF] italic text-center font-medium">90-Day Guarantee: 30 Financially Qualified Appts or You Don't Pay.</p>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================
            SECTION: LOGOS (BEKANNT AUS)
           ======================================================================== */}
        <div className="mt-8 lg:mt-16 w-full max-w-[950px] mx-auto relative">
          {/* Horizontal Line Container */}
          <div className="relative flex items-center justify-center mb-6 lg:mb-10">

            {/* Badge */}
            <div className="relative z-10 bg-[#141414] px-4">
              <div className="bg-[#1f1f1f] px-2.5 py-1 rounded-[3px] text-[9px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                Trusted <span className="text-[#FB841C]">By</span>
              </div>
            </div>
          </div>

          {/* Logos Row - Spaced Exactly like reference */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center px-4 md:px-20 gap-8 opacity-60 text-white hover:opacity-100 transition-opacity duration-300">
            {/* A4M */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col leading-[0.9]">
                <span className="font-bold text-xl tracking-[0.05em] text-white">A4M</span>
                <span className="font-light text-[8px] tracking-[0.2em] text-white uppercase">Education</span>
              </div>
            </div>

            {/* Seeds Scientific */}
            <span className="text-lg font-serif font-bold tracking-tight text-white">SSRP</span>

            {/* AMMG */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-wide font-sans text-white">AMMG</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};