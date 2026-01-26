import React from 'react';
import { Mail } from 'lucide-react';

export const ImportantPage = () => {
    return (
        <div className="bg-[#141414] min-h-screen pt-32 pb-20 relative overflow-hidden text-white">

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FB841C]/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="space-y-8 text-center animate-in slide-in-from-bottom-8 fade-in duration-500">

                    {/* Headline */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 uppercase tracking-tight">
                            Important <span className="text-[#FB841C]">Information</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
                            Please watch the videos below. Start with the Introduction.
                        </p>
                    </div>

                    {/* Main Video */}
                    {/* Main Video - Vimeo Embed */}
                    <div className="w-full rounded-xl overflow-hidden shadow-2xl relative group border-4 border-[#FB841C]/20">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/1158152695?badge=0&autopause=0&player_id=0&app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Introduction"
                            ></iframe>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                    <hr className="border-white/10" />

                    {/* Q&A Videos */}
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tight">
                            Get Your <span className="text-[#FB841C]">Questions Answered</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Video 1: Agency vs Growth Partner */}
                            <div className="group">
                                <div style={{ padding: '55.64% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden border border-white/10 shadow-sm bg-black/50">
                                    <iframe
                                        src="https://player.vimeo.com/video/1157366144?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="MARKETING AGENCY VS. GROWTH PARTNER"
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-bold text-white mt-3 uppercase tracking-wide">Marketing Agency vs. Growth Partner</h4>
                            </div>

                            {/* Video 2: AI Celebrity Funnel */}
                            <div className="group">
                                <div style={{ padding: '55.64% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden border border-white/10 shadow-sm bg-black/50">
                                    <iframe
                                        src="https://player.vimeo.com/video/1157366283?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="OUR AI CELEBRITY FUNNEL"
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-bold text-white mt-3 uppercase tracking-wide">Our AI Celebrity Funnel</h4>
                            </div>

                            {/* Video 3: I've Been Burned */}
                            <div className="group">
                                <div style={{ padding: '55.64% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden border border-white/10 shadow-sm bg-black/50">
                                    <iframe
                                        src="https://player.vimeo.com/video/1157365703?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="IVE BEEN BURN IN THE PAST"
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-bold text-white mt-3 uppercase tracking-wide">I've Been Burned In The Past?</h4>
                            </div>

                            {/* Video 4: Why 90 Day Agreements */}
                            <div className="group">
                                <div style={{ padding: '55.64% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden border border-white/10 shadow-sm bg-black/50">
                                    <iframe
                                        src="https://player.vimeo.com/video/1158152396?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="WHY DO YOU WORK IN 90 DAY AGREEMENTS"
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-bold text-white mt-3 uppercase tracking-wide">Why Do You Work In 90 Day Agreements?</h4>
                            </div>

                            {/* Video 5: Why Not Just Hire In-House */}
                            <div className="group">
                                <div style={{ padding: '55.64% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden border border-white/10 shadow-sm bg-black/50">
                                    <iframe
                                        src="https://player.vimeo.com/video/1158152514?badge=0&autopause=0&player_id=0&app_id=58479"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        title="WHY NOT JUST HIRE AN IN-HOUSE MARKETER"
                                    ></iframe>
                                </div>
                                <h4 className="text-sm font-bold text-white mt-3 uppercase tracking-wide">Why Not Just Hire An In-House Marketer?</h4>
                            </div>
                        </div>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>

                </div>
            </div>
        </div>
    );
};
