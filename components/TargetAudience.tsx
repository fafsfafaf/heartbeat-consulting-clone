import React, { useState } from 'react';
import { CheckCircle2, Settings, Sliders, LayoutTemplate, MoveVertical, Eye, EyeOff } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audience = [
    "Peptide Clinics", "Longevity Centers", "HRT Clinics", 
    "Men's Health", "Functional Med", "Tele-Health", 
    "IV Therapy", "Regenerative Med", "Med Spas", "Integrative Med"
  ];

  // ========================================================================
  // STATE: DESIGN CONFIGURATION (HARDCODED VALUES FROM SCREENSHOT)
  // ========================================================================
  const [config, setConfig] = useState({
    // Section Spacing
    paddingTop: 76,      
    paddingBottom: 60,   
    
    // Element Positioning
    arrowTop: 0,        
    headlineMarginTop: 20, 
    sliderMarginTop: 32,   

    // Badge Styling
    badgeMinWidth: 290,
    badgePaddingX: 34,   
    badgePaddingY: 14,   
    badgeFontSize: 14,   
    badgeGap: 20,        // Displayed as 40px in UI (20px margin * 2)
    
    // Colors & Opacity
    bgOpacity: 0.15,      
    borderOpacity: 0.3,  
  });

  const [showControls, setShowControls] = useState(false);

  return (
    <section 
        className="bg-[#141414] relative overflow-hidden transition-all duration-300"
        style={{ 
            paddingTop: `${config.paddingTop}px`, 
            paddingBottom: `${config.paddingBottom}px` 
        }}
    >
      {/* Decorative Arrow */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 -ml-6 z-0 pointer-events-none transition-all duration-300"
        style={{ top: `${config.arrowTop}px` }}
      >
        <svg width="60" height="80" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(251,132,28,0.4)]">
            <path 
              d="M30 10 C 90 10, 100 50, 60 70 C 40 80, 40 100, 50 110" 
              stroke="#FB841C" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M35 95 L 50 110 L 65 95" 
              stroke="#FB841C" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
        </svg>
      </div>

      <div 
        className="container mx-auto px-4 text-center"
        style={{ marginTop: `${config.headlineMarginTop}px` }}
      >
        <div style={{ marginBottom: `${config.sliderMarginTop}px` }}>
            {/* Styled Badge Box */}
            <div className="inline-block mb-6 relative z-10">
                 <div className="bg-[#1f1f1f] px-2.5 py-1 rounded-[3px] text-[9px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                    WE SPECIALIZE IN <span className="text-[#FB841C]">SCALING:</span>
                 </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white flex flex-wrap items-baseline justify-center gap-2">
                Are 
                <span className="text-[#FB841C] font-script font-normal text-5xl md:text-7xl mx-1 -rotate-3 relative top-1">
                    you
                </span> 
                a provider?
            </h2>
        </div>

        {/* Infinite Slider Container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {/* Helper function to render a list item */}
            <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
                {audience.map((item, index) => (
                    <li key={`a-${index}`} style={{ marginLeft: `${config.badgeGap}px`, marginRight: `${config.badgeGap}px` }}>
                        <div 
                            className="flex items-center gap-3 rounded-[6px] transition-all duration-300 group cursor-default whitespace-nowrap hover:bg-[#FB841C]/20"
                            style={{
                                backgroundColor: `rgba(251, 132, 28, ${config.bgOpacity})`,
                                borderColor: `rgba(251, 132, 28, ${config.borderOpacity})`,
                                borderWidth: '1px',
                                minWidth: `${config.badgeMinWidth}px`,
                                paddingLeft: `${config.badgePaddingX}px`,
                                paddingRight: `${config.badgePaddingX}px`,
                                paddingTop: `${config.badgePaddingY}px`,
                                paddingBottom: `${config.badgePaddingY}px`,
                            }}
                        >
                            <CheckCircle2 className="text-[#FB841C] w-5 h-5 shrink-0" />
                            <span 
                                className="font-bold text-white uppercase tracking-wide group-hover:text-[#FB841C] transition-colors"
                                style={{ fontSize: `${config.badgeFontSize}px` }}
                            >
                                {item}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Duplicate Set */}
            <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll" aria-hidden="true">
                {audience.map((item, index) => (
                    <li key={`b-${index}`} style={{ marginLeft: `${config.badgeGap}px`, marginRight: `${config.badgeGap}px` }}>
                        <div 
                             className="flex items-center gap-3 rounded-[6px] transition-all duration-300 group cursor-default whitespace-nowrap hover:bg-[#FB841C]/20"
                             style={{
                                 backgroundColor: `rgba(251, 132, 28, ${config.bgOpacity})`,
                                 borderColor: `rgba(251, 132, 28, ${config.borderOpacity})`,
                                 borderWidth: '1px',
                                 minWidth: `${config.badgeMinWidth}px`,
                                 paddingLeft: `${config.badgePaddingX}px`,
                                 paddingRight: `${config.badgePaddingX}px`,
                                 paddingTop: `${config.badgePaddingY}px`,
                                 paddingBottom: `${config.badgePaddingY}px`,
                             }}
                        >
                            <CheckCircle2 className="text-[#FB841C] w-5 h-5 shrink-0" />
                            <span 
                                className="font-bold text-white uppercase tracking-wide group-hover:text-[#FB841C] transition-colors"
                                style={{ fontSize: `${config.badgeFontSize}px` }}
                            >
                                {item}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>

      {/* ========================================================================
          LIVE CONTROLLER UI (Bottom Left)
         ======================================================================== */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className={`bg-[#111] border border-[#FB841C]/30 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 ${showControls ? 'w-80' : 'w-auto'}`}>
            
            {/* Header / Toggle */}
            <div className="flex items-center justify-between p-3 border-b border-white/10">
                {showControls ? (
                    <div className="flex items-center gap-2 text-[#FB841C]">
                        <Settings size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Section Settings</span>
                    </div>
                ) : (
                    <button onClick={() => setShowControls(true)} className="flex items-center gap-2 text-[#FB841C] hover:text-white transition-colors">
                        <Settings size={20} />
                    </button>
                )}
                
                {showControls && (
                    <button onClick={() => setShowControls(false)} className="text-gray-400 hover:text-white">
                        <EyeOff size={16} />
                    </button>
                )}
            </div>

            {/* Controls Body */}
            {showControls && (
                <div className="p-4 space-y-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    
                    {/* SECTION PADDING */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-1">
                            <LayoutTemplate size={12} className="text-[#FB841C]" />
                            <label className="text-[10px] uppercase font-bold text-gray-400">Section Spacing</label>
                        </div>
                        
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Padding Top</span>
                                <span className="text-[9px] text-white">{config.paddingTop}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="200" step="4"
                                value={config.paddingTop} 
                                onChange={(e) => setConfig({...config, paddingTop: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Padding Bottom</span>
                                <span className="text-[9px] text-white">{config.paddingBottom}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="200" step="4"
                                value={config.paddingBottom} 
                                onChange={(e) => setConfig({...config, paddingBottom: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="h-[1px] bg-white/10"></div>

                    {/* ELEMENT POSITIONS */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-1">
                            <MoveVertical size={12} className="text-[#FB841C]" />
                            <label className="text-[10px] uppercase font-bold text-gray-400">Positions (Y-Axis)</label>
                        </div>
                        
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Arrow Top Offset</span>
                                <span className="text-[9px] text-white">{config.arrowTop}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="150" step="2"
                                value={config.arrowTop} 
                                onChange={(e) => setConfig({...config, arrowTop: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Headline Margin Top</span>
                                <span className="text-[9px] text-white">{config.headlineMarginTop}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="150" step="4"
                                value={config.headlineMarginTop} 
                                onChange={(e) => setConfig({...config, headlineMarginTop: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Slider Margin Top</span>
                                <span className="text-[9px] text-white">{config.sliderMarginTop}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="150" step="4"
                                value={config.sliderMarginTop} 
                                onChange={(e) => setConfig({...config, sliderMarginTop: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="h-[1px] bg-white/10"></div>

                    {/* BADGE STYLING */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-1">
                            <Sliders size={12} className="text-[#FB841C]" />
                            <label className="text-[10px] uppercase font-bold text-gray-400">Badge Design</label>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Background Opacity</span>
                                <span className="text-[9px] text-white">{(config.bgOpacity * 100).toFixed(0)}%</span>
                            </div>
                            <input 
                                type="range" min="0" max="1" step="0.05"
                                value={config.bgOpacity} 
                                onChange={(e) => setConfig({...config, bgOpacity: parseFloat(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Min Width</span>
                                <span className="text-[9px] text-white">{config.badgeMinWidth}px</span>
                            </div>
                            <input 
                                type="range" min="150" max="400" step="10"
                                value={config.badgeMinWidth} 
                                onChange={(e) => setConfig({...config, badgeMinWidth: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div className="flex gap-2">
                             <div className="flex-1">
                                <span className="text-[9px] text-gray-500 block mb-1">Pad X ({config.badgePaddingX})</span>
                                <input 
                                    type="range" min="10" max="60" 
                                    value={config.badgePaddingX} 
                                    onChange={(e) => setConfig({...config, badgePaddingX: parseInt(e.target.value)})}
                                    className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                             </div>
                             <div className="flex-1">
                                <span className="text-[9px] text-gray-500 block mb-1">Pad Y ({config.badgePaddingY})</span>
                                <input 
                                    type="range" min="5" max="40" 
                                    value={config.badgePaddingY} 
                                    onChange={(e) => setConfig({...config, badgePaddingY: parseInt(e.target.value)})}
                                    className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                             </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Text Size</span>
                                <span className="text-[9px] text-white">{config.badgeFontSize}px</span>
                            </div>
                            <input 
                                type="range" min="10" max="24" step="1"
                                value={config.badgeFontSize} 
                                onChange={(e) => setConfig({...config, badgeFontSize: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-[9px] text-gray-500">Gap (Spacing)</span>
                                <span className="text-[9px] text-white">{config.badgeGap * 2}px</span>
                            </div>
                            <input 
                                type="range" min="0" max="50" step="1"
                                value={config.badgeGap} 
                                onChange={(e) => setConfig({...config, badgeGap: parseInt(e.target.value)})}
                                className="w-full accent-[#FB841C] h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>

                </div>
            )}
        </div>
      </div>
    </section>
  );
};