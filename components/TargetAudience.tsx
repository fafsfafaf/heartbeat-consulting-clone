import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience: React.FC = () => {
    const audience = [
        "Peptide Clinics", "Longevity Centers", "HRT Clinics",
        "Men's Health", "Functional Med", "Tele-Health",
        "IV Therapy", "Regenerative Med", "Med Spas", "Integrative Med"
    ];

    // Constants replacing Live Controller State
    const config = {
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
    };

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


        </section>
    );
};