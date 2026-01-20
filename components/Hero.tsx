import React, { useState, createElement } from 'react';
import { Button } from './ui/Button';
import { Type, AlignLeft, WrapText, Sliders, Eye, EyeOff, Grid, Move } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  // ========================================================================
  // STATE MANAGEMENT (LIVE CONTROLLER)
  // ========================================================================
  
  // 1. Grid & Background Settings
  const [gridPos, setGridPos] = useState({ x: 44, y: -51 });
  const [maskPos, setMaskPos] = useState({ x: 27, y: 34 }); // Spotlight Center
  const [gridSize, setGridSize] = useState(115); // Size (Density)
  const [gridOpacity, setGridOpacity] = useState(0.35); // Opacity 35%
  const [bottomFadeHeight, setBottomFadeHeight] = useState(30); // Section Transition

  // 2. Typography Settings - Hardcoded based on user request (Screenshot values)
  const [typo, setTypo] = useState({
    headlineSize: 34,      // 34px
    lineHeight: 1,         // 1.0
    scriptScale: 100,      // 100%
    scriptY: -3,           // -3px
    scriptMargin: 8,       // 8px
    scriptRotate: 0,       // 0deg
    maxWidth: 100,         // 100%
    breakAfterScript: true, // Checked
    breakAfterMonth: true,  // Checked
    fontFamily: 'Jost, sans-serif', // Default Font
  });

  const [showControls, setShowControls] = useState(true);

  return (
    <section className="relative pt-20 pb-8 lg:pt-24 lg:pb-12 lg:min-h-[85vh] flex flex-col justify-center overflow-hidden bg-[#141414]">
      
      {/* ========================================================================
          SECTION: BACKGROUND SYSTEM (GRID & GRADIENTS)
         ======================================================================== */}
       <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
            className="absolute inset-0"
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#141414] border border-[#333] group">
              {/* Wistia Embed - Using createElement to bypass TypeScript Custom Element issues */}
              {createElement('wistia-player', {
                'media-id': "qgncf6wce6",
                aspect: "1.7777777777777777"
              })}
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

      {/* ========================================================================
          SECTION: LIVE CONTROLLER UI (FIXED BOTTOM RIGHT - WIDER & GRID)
         ======================================================================== */}
      <div className={`fixed bottom-4 right-4 left-4 lg:left-auto lg:right-4 z-50 transition-all duration-300 ${showControls ? 'translate-y-0' : 'translate-y-0'}`}>
        <div className={`bg-[#111] border border-[#FB841C]/30 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md mx-auto lg:mx-0 transition-all duration-300 ${showControls ? 'w-full lg:w-[700px]' : 'w-auto inline-block float-right'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-white/10">
             <div className="flex items-center gap-2 text-[#FB841C]">
                <Sliders size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Live Controller</span>
             </div>
             <button onClick={() => setShowControls(!showControls)} className="text-gray-400 hover:text-white">
                {showControls ? <Eye size={16} /> : <EyeOff size={16} />}
             </button>
          </div>

          {/* Controls Body - Multi-Column Grid Layout */}
          {showControls && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-h-[70vh] lg:max-h-none overflow-y-auto custom-scrollbar">
              
              {/* COLUMN 1: TYPOGRAPHY BASICS */}
              <div className="space-y-3">
                 <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
                    <Type size={12} className="text-[#FB841C]" />
                    <label className="text-[10px] uppercase font-bold text-gray-400">Font & Layout</label>
                 </div>
                 
                 {/* Font Family */}
                 <div>
                   <div className="flex justify-between mb-1">
                       <span className="text-[9px] text-gray-500">Font Family</span>
                   </div>
                   <select
                       value={typo.fontFamily}
                       onChange={(e) => setTypo({...typo, fontFamily: e.target.value})}
                       className="w-full bg-[#1f1f1f] text-white text-[10px] p-1.5 rounded border border-white/10 outline-none focus:border-[#FB841C] cursor-pointer"
                   >
                       <option value="Jost, sans-serif">Jost (Default)</option>
                       <option value="Futura PT, sans-serif">Futura PT</option>
                       <option value="Arial, sans-serif">Arial</option>
                   </select>
                </div>

                {/* Headline Width */}
                <div>
                   <div className="flex justify-between mb-1">
                       <span className="text-[9px] text-gray-500">Max Width: {typo.maxWidth}%</span>
                   </div>
                   <input 
                       type="range" min="50" max="100" step="1"
                       value={typo.maxWidth} 
                       onChange={(e) => setTypo({...typo, maxWidth: parseInt(e.target.value)})}
                       className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                   />
                </div>

                {/* Line Breaks */}
                <div className="bg-white/5 p-2 rounded border border-white/5 space-y-1">
                    <span className="text-[9px] text-gray-400 uppercase font-bold block mb-1">Breaks</span>
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-300">After "Qualified"</span>
                        <input 
                            type="checkbox"
                            checked={typo.breakAfterScript}
                            onChange={(e) => setTypo({...typo, breakAfterScript: e.target.checked})}
                            className="accent-[#FB841C] h-3 w-3 rounded cursor-pointer"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-300">After "Month"</span>
                        <input 
                            type="checkbox"
                            checked={typo.breakAfterMonth}
                            onChange={(e) => setTypo({...typo, breakAfterMonth: e.target.checked})}
                            className="accent-[#FB841C] h-3 w-3 rounded cursor-pointer"
                        />
                    </div>
                </div>
              </div>

              {/* COLUMN 2: SIZING & SCRIPT */}
              <div className="space-y-3">
                 <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
                    <AlignLeft size={12} className="text-[#FB841C]" />
                    <label className="text-[10px] uppercase font-bold text-gray-400">Sizing & Script</label>
                 </div>

                 {/* Headline Size */}
                 <div>
                   <div className="flex justify-between mb-1">
                       <span className="text-[9px] text-gray-500">Font Size: {typo.headlineSize}px</span>
                   </div>
                   <input 
                       type="range" min="20" max="80" step="1"
                       value={typo.headlineSize} 
                       onChange={(e) => setTypo({...typo, headlineSize: parseInt(e.target.value)})}
                       className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                   />
                </div>

                {/* Line Height */}
                <div>
                   <div className="flex justify-between mb-1">
                       <span className="text-[9px] text-gray-500">Line Height: {typo.lineHeight}</span>
                   </div>
                   <input 
                       type="range" min="0.8" max="2.0" step="0.05"
                       value={typo.lineHeight} 
                       onChange={(e) => setTypo({...typo, lineHeight: parseFloat(e.target.value)})}
                       className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                   />
                </div>

                {/* Script Controls */}
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <span className="text-[9px] text-gray-500 block">Script Scale</span>
                        <input 
                            type="range" min="50" max="250" step="5"
                            value={typo.scriptScale} 
                            onChange={(e) => setTypo({...typo, scriptScale: parseInt(e.target.value)})}
                            className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    <div>
                        <span className="text-[9px] text-gray-500 block">Offset Y</span>
                        <input 
                            type="range" min="-30" max="30" step="1"
                            value={typo.scriptY} 
                            onChange={(e) => setTypo({...typo, scriptY: parseInt(e.target.value)})}
                            className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                </div>
              </div>

              {/* COLUMN 3: GRID & BACKGROUND */}
              <div className="space-y-3">
                 <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-1">
                    <Grid size={12} className="text-[#FB841C]" />
                    <label className="text-[10px] uppercase font-bold text-gray-400">Background System</label>
                 </div>

                 {/* Size & Opacity */}
                 <div className="grid grid-cols-2 gap-2">
                    <div>
                        <span className="text-[9px] text-gray-500 block">Grid Size</span>
                        <input 
                            type="range" min="20" max="200" step="5"
                            value={gridSize} 
                            onChange={(e) => setGridSize(parseInt(e.target.value))}
                            className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                     <div>
                        <span className="text-[9px] text-gray-500 block">Grid Opacity</span>
                        <input 
                            type="range" min="0" max="1" step="0.05"
                            value={gridOpacity} 
                            onChange={(e) => setGridOpacity(parseFloat(e.target.value))}
                            className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                 </div>

                 {/* Grid Position */}
                 <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[9px] text-gray-500">Grid Position (X / Y)</span>
                    </div>
                    <div className="flex gap-2">
                        <input 
                            type="range" min="-100" max="100" 
                            value={gridPos.x} 
                            onChange={(e) => setGridPos(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                            className="flex-1 accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <input 
                            type="range" min="-100" max="100" 
                            value={gridPos.y} 
                            onChange={(e) => setGridPos(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                            className="flex-1 accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                 </div>

                 {/* Mask Position */}
                 <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-[9px] text-gray-500">Spotlight (X / Y)</span>
                    </div>
                    <div className="flex gap-2">
                        <input 
                            type="range" min="0" max="100" 
                            value={maskPos.x} 
                            onChange={(e) => setMaskPos(prev => ({ ...prev, x: parseInt(e.target.value) }))}
                            className="flex-1 accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                         <input 
                            type="range" min="0" max="100" 
                            value={maskPos.y} 
                            onChange={(e) => setMaskPos(prev => ({ ...prev, y: parseInt(e.target.value) }))}
                            className="flex-1 accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                 </div>

              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};