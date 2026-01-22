import React, { useState } from 'react';
import { ArrowLeft, Clock, Tag, Calendar, ChevronRight, Share2 } from 'lucide-react';
import { Button } from './ui/Button';

interface BlogPost {
    id: number;
    title: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    excerpt: string;
    content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
    {
        id: 6,
        title: "The AI Closer: Automating Deposits to Guarantee Patient Commitment",
        category: "AI Sales",
        readTime: "14 min read",
        date: "Jan 05, 2026",
        // Image: Payment/Tech interaction (Updated to working link)
        image: "/assets/blog-1.jpg",
        excerpt: "Stop hoping patients show up. Start collecting cash over the phone. How AI Voice Agents turn tentative bookings into paid commitments instantly.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">The biggest lie in the medical marketing industry is: &quot;We generated 100 appointments for you.&quot; An appointment is not a patient. An appointment is a promise, and in 2025, promises are broken 40% of the time.</p>

                <p className="mb-8">If your clinic relies on &quot;Pay at the Door&quot; consultations, you are essentially an unsecured lender. You are lending your provider's time (inventory) to a stranger with zero collateral. The solution isn't more reminder texts. The solution is financial commitment collected <em>before</em> they hang up the phone.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Psychology of the &quot;Sunk Cost&quot;</h3>
                <p className="mb-6">Why do patients ghost? Because they have nothing to lose. They booked a free consultation while scrolling Instagram at 11 PM. When the day comes, and it's raining, or they are tired, they simply don't show up.</p>
                <p className="mb-6">However, if that same patient has paid a <strong>$50 or $100 deposit</strong>, the psychology shifts entirely. This is the <em>Sunk Cost Fallacy</em> in action. They are no longer &quot;checking out a clinic&quot;; they are &quot;claiming the service they paid for.&quot;</p>

                <div className="bg-[#FB841C]/10 border-l-4 border-[#FB841C] p-8 mb-8 rounded-r-lg">
                    <h4 className="text-[#FB841C] font-bold mb-2 uppercase tracking-wide">The Commitment Delta</h4>
                    <p className="text-white italic text-lg">"Data from 50,000+ leads shows that a $50 deposit increases show rates from 62% to 94%. Furthermore, patients who pay a deposit convert to high-ticket treatment plans at a 3x higher rate."</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Why Humans Fail at Cash Collection</h3>
                <p className="mb-6">If deposits are so effective, why doesn't every front desk collect them? Two reasons:</p>
                <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-300">
                    <li><strong>Phone Anxiety & Friction:</strong> Receptionists hate asking for money. It feels aggressive. They often accept soft objections like &quot;I'll pay when I get there&quot; just to end the awkward conversation.</li>
                    <li><strong>Speed:</strong> By the time a human calls a lead back (2-3 hours later), the emotional impulse to buy has faded. The patient is back in &quot;logical defense mode.&quot;</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Enter the AI Closer</h3>
                <p className="mb-6">An AI Voice Agent doesn't have social anxiety. It doesn't get tired. It doesn't feel bad asking for a credit card number at 8:00 PM on a Tuesday.</p>
                <p className="mb-6">Here is how the <strong>Heartbyte AI Cash Collector</strong> workflow operates:</p>

                <div className="space-y-6 mb-8 bg-[#1f1f1f] p-6 rounded-xl border border-white/5">
                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h5 className="text-white font-bold">Instant Strike</h5>
                            <p className="text-gray-400 text-sm">Lead submits form. AI calls within 30 seconds.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h5 className="text-white font-bold">The Qualification & Hook</h5>
                            <p className="text-gray-400 text-sm">AI validates medical suitability and builds value: <em>"Dr. Smith is fully booked, but we have a priority slot opening..."</em></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h5 className="text-white font-bold">The Secure Collection</h5>
                            <p className="text-gray-400 text-sm">AI: <em>"To secure this time against our cancellation policy, there is a fully refundable $50 deposit. I can take that securely over the phone now. Which card would you like to use?"</em></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h5 className="text-white font-bold">PCI Compliance</h5>
                            <p className="text-gray-400 text-sm">The AI pauses recording, processes the stripe token instantly, and confirms the transaction. No human ever sees the card number.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Result: A Calendar of Buyers, Not Browsers</h3>
                <p className="mb-6">When your staff arrives in the morning, they shouldn't be making outbound calls to chase leads. They should be looking at a calendar filled with green checkmarks—patients who have already paid.</p>

                <p className="text-lg pt-6 mt-6 border-t border-white/10">
                    <strong>The Bottom Line:</strong> If you aren't collecting cash on the first call, you are running a charity, not a clinic. AI enforces the process 100% of the time, ensuring your revenue is predictable, scalable, and secure.
                </p>
            </>
        )
    },
    {
        id: 1,
        title: "Why Most Peptide Clinics Fail at Marketing (And How to Fix It)",
        category: "Lead Gen",
        readTime: "12 min read",
        date: "Nov 12, 2025",
        // Changed Image: Marketing Strategy / Analytics (Distinct from Case Study)
        image: "/assets/blog-2.jpg",
        excerpt: "Stop buying shared leads. Learn why the 'Speed-to-Lead' metric is the single biggest predictor of revenue for high-ticket longevity clinics.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">The Peptide and HRT market is currently experiencing a "Gold Rush." Patient demand for GLP-1s, TRT, and BPC-157 is at an all-time high. Yet, we see a paradoxical trend: dozens of clinically excellent practices are struggling to break the $50k/month revenue mark, while mediocre clinics down the street are scaling to $300k+. Why?</p>

                <p className="mb-8">The difference isn't medical expertise. It's marketing infrastructure. Specifically, most clinics treat medical marketing like low-ticket e-commerce, ignoring the complex psychology of a high-ticket patient journey.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Shared Lead" Trap: Why Your CPA is Skyrocketing</h3>
                <p className="mb-6">If you are hiring generalist agencies, you are likely buying "shared data." These agencies run generic Facebook ads promising "Free Consultations" or "Cheap Semaglutide." When a user submits their info, that lead is sold to 3-5 different clinics in the same zip code simultaneously.</p>
                <p className="mb-6">This creates a "Race to the Bottom." You aren't competing on value or medical authority; you are competing on who can call the fastest and offer the lowest price. This destroys your profit margins and fills your calendar with price-shoppers, not patients committed to longevity.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Mathematics of "Speed-to-Lead"</h3>
                <p className="mb-6">In the high-ticket medical space, time is the enemy of conversion. Data from over 120 clinics analyzed by HeartbyteAI shows a brutal reality regarding lead decay:</p>

                <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-300">
                    <li><strong>The 5-Minute Rule:</strong> If you contact a lead within 5 minutes, you are 21x more likely to qualify them than if you wait 30 minutes.</li>
                    <li><strong>The "Lead Rot":</strong> After 1 hour, the likelihood of ever contacting that lead drops by 80%. They have moved on, forgotten, or booked with a competitor.</li>
                    <li><strong>The Manual Failure:</strong> In a busy clinic, your receptionist is checking in patients, handling billing, and managing coffee. They physically cannot answer every inbound inquiry instantly.</li>
                </ul>

                <div className="bg-[#FB841C]/10 border-l-4 border-[#FB841C] p-8 mb-8 rounded-r-lg">
                    <h4 className="text-[#FB841C] font-bold mb-2 uppercase tracking-wide">The Automation Imperative</h4>
                    <p className="text-white italic text-lg">"We implemented AI Voice Agents to handle initial intake. The AI calls the lead within 28 seconds of form submission. Our contact rate went from 12% to 94% overnight. We didn't spend more on ads; we just stopped letting the leads die."</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Solution: The "Value-First" Funnel</h3>
                <p className="mb-6">To scale a Peptide Clinic, you need to stop chasing leads and start attracting patients. Here is the framework that is working in late 2025:</p>

                <ol className="list-decimal pl-6 mb-8 space-y-6 text-gray-300">
                    <li>
                        <strong className="text-white block mb-1">Gate the Price, Not the Value:</strong>
                        Don't advertise "$200 Semaglutide." Advertise "The Metabolic Reset Protocol." attract people looking for a solution, not a commodity.
                    </li>
                    <li>
                        <strong className="text-white block mb-1">Automated Triage (AI):</strong>
                        Use AI to ask 3 critical questions before they ever reach your calendar:
                        <em className="block mt-2 pl-4 border-l-2 border-gray-700">"Are you looking to lose more than 15 lbs?"</em>
                        <em className="block pl-4 border-l-2 border-gray-700">"Are you currently under the care of an oncologist?"</em>
                        <em className="block pl-4 border-l-2 border-gray-700">"Are you prepared to invest in a 3-month comprehensive protocol?"</em>
                    </li>
                    <li>
                        <strong className="text-white block mb-1">The Deposit Strategy:</strong>
                        Never book a free consultation for a high-ticket service. Charge a refundable $50 deposit. This filters out 90% of no-shows and positions your time as valuable.
                    </li>
                </ol>

                <p className="text-lg border-t border-white/10 pt-6 mt-6">
                    <strong>Conclusion:</strong> Marketing is not just about getting more names on a list. It is about building a system that filters, nurtures, and converts strangers into loyal patients without burning out your front desk staff.
                </p>
            </>
        )
    },
    {
        id: 2,
        title: "The Economics of GLP-1s: Turning Low-Margin Prescriptions into High-LTV Patients",
        category: "Strategy",
        readTime: "10 min read",
        date: "Nov 24, 2025",
        // Image: Medical Vials/Science to represent the product economics
        image: "/assets/blog-3.jpg",
        excerpt: "Semaglutide is a gateway, not the destination. How to structure your patient journey to maximize Lifetime Value (LTV) through cross-selling.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">GLP-1 agonists like Semaglutide and Tirzepatide have fundamentally changed the aesthetic and medical landscape. They are the single greatest customer acquisition tool we have seen in decades. However, they are also a trap.</p>

                <p className="mb-8">With compounding pharmacy prices fluctuating and competition rising (every Med Spa, PCP, and Telehealth app is now selling it), margins on the drug itself are thinning to razor-thin levels. If your business model is "Sell Semaglutide," you are in a race to zero.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Weight Loss Cliff" Problem</h3>
                <p className="mb-6">Here is the standard lifecycle of a GLP-1 patient in a poorly run clinic:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                    <li>Month 1-4: Patient takes the drug, loses weight, is happy.</li>
                    <li>Month 5: Patient hits goal weight OR hits a plateau.</li>
                    <li>Month 6: Patient cancels subscription because "they don't need it anymore" or "it's too expensive."</li>
                </ul>
                <p className="mb-8">This creates a high-churn business. You are constantly spending money to acquire new patients just to replace the ones leaving. To build a $5M+ valuation clinic, you must shift from a "Transactional Model" to a "Longevity Model."</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Cross-Sell Ecosystem: Maximizing LTV</h3>
                <p className="mb-6">Smart clinics use weight loss as the <em>entry point</em>—the "Gateway Drug" to comprehensive health optimization. Once a patient sees results, trust is established. This is the moment to introduce the "Maintenance & Optimization" protocols.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-white/5">
                        <h4 className="text-[#FB841C] font-bold mb-2">1. The Muscle Preservation Upsell</h4>
                        <p className="text-sm text-gray-400"><strong>Problem:</strong> "Ozempic Face" and muscle loss.</p>
                        <p className="text-sm text-white mt-2"><strong>Solution:</strong> Bundle TRT (Testosterone Replacement) or HRT to ensure the weight lost is fat, not muscle. Introduce <strong>Emsculpt</strong> or resistance training protocols.</p>
                    </div>
                    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-white/5">
                        <h4 className="text-[#FB841C] font-bold mb-2">2. The Recovery Stack</h4>
                        <p className="text-sm text-gray-400"><strong>Problem:</strong> Low energy, loose skin, joint pain from new activity.</p>
                        <p className="text-sm text-white mt-2"><strong>Solution:</strong> Introduce <strong>BPC-157</strong> for gut health/recovery and <strong>GHK-Cu</strong> for skin elasticity tightening.</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Golden Handcuffs" Membership</h3>
                <p className="mb-6">Don't just sell vials. Sell a "Metabolic Mastery Membership."</p>
                <p className="mb-6">Instead of charging $300/month for Semaglutide, charge $599/month for the membership which includes:</p>
                <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-300">
                    <li>The Medication (GLP-1)</li>
                    <li>Quarterly Advanced Blood Panels (Guarantees retention for review)</li>
                    <li>1x Monthly B12/MIC Fat Burner Shot (Gets them physically into the clinic)</li>
                    <li>10% Off all Aesthetic Services (Cross-pollinates to high-margin lasers/injectables)</li>
                </ul>

                <p className="text-lg pt-6 mt-6 border-t border-white/10">
                    By shifting the narrative from "Weight Loss" to "Total Health Optimization," you transform a $300/month short-term patient into a $7,000/year lifetime client. This is how you build enterprise value.
                </p>
            </>
        )
    },
    {
        id: 3,
        title: "From Botox to Bio-Identical Hormones: Cross-Selling Strategies for Med Spas",
        category: "Anti-Aging",
        readTime: "9 min read",
        date: "Dec 05, 2025",
        // Changed Image: Modern Clinic Interior / Med Spa (Fixed Broken Link)
        image: "/assets/blog-4.jpg",
        excerpt: "Aesthetic patients are already investing in their appearance. Here is how to introduce internal medicine services to your existing database.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">Med Spas sitting on a database of 5,000+ Botox and filler patients are sitting on a dormant goldmine. These patients have already demonstrated two critical psychological traits: 1) They are terrified of aging, and 2) They have disposable income to solve that problem.</p>

                <p className="mb-8">Yet, most Med Spas operate in silos. The injector injects, the aesthetician does facials, and the nurse practitioner (if you have one) sits idle waiting for specific bookings. Integrating <strong>Internal Medicine</strong> (Peptides, HRT, IV Therapy) into an aesthetic practice is the fastest way to double revenue without acquiring a single new patient.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Beauty from the Inside Out" Bridge</h3>
                <p className="mb-6">You cannot simply ask a Botox patient, "Do you want Testosterone?" It feels disjointed. You need a narrative bridge. The pitch must connect their aesthetic concerns to internal biology.</p>

                <h4 className="text-xl font-bold text-white mb-2">Script 1: The Melasma/Skin Quality Pivot</h4>
                <blockquote className="border-l-4 border-[#FB841C] pl-4 italic text-gray-400 mb-6 bg-[#1a1a1a] p-4 rounded-r">
                    "I notice we are constantly fighting this pigmentation/dryness. While the lasers help the symptom, often this is driven by an estrogen/progesterone imbalance or high cortisol. Have we ever looked at your bloodwork to treat the root cause so your skin glows from the inside?"
                </blockquote>

                <h4 className="text-xl font-bold text-white mb-2">Script 2: The Body Contouring Pivot</h4>
                <blockquote className="border-l-4 border-[#FB841C] pl-4 italic text-gray-400 mb-6 bg-[#1a1a1a] p-4 rounded-r">
                    "We can freeze this fat with CoolSculpting, but if your insulin resistance is high, it's going to come right back in other areas. I'd love to put you on a metabolic support peptide (GLP-1) for 3 months alongside this treatment to guarantee you getting the snatched waist you want."
                </blockquote>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Silent Salesman" in the Waiting Room</h3>
                <p className="mb-6">Your environment needs to do the selling for you. Aesthetic patients are visual.</p>
                <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-300">
                    <li><strong>The IV Menu:</strong> Don't hide it. Have patients getting IVs visible (if privacy allows) or have a "Beauty Drip" menu right next to the checkout counter.</li>
                    <li><strong>Before/Afters with Metrics:</strong> Show a face transformation, but caption it with: "6 Months of HRT + Morpheus8." Attribute the "glow" to the hormones.</li>
                    <li><strong>Check-In Forms:</strong> Add a simple checkbox section on your intake form: "Are you experiencing: Brain Fog? Low Libido? Stubborn Belly Fat? Poor Sleep?" If they check 2+, the provider is <em>obligated</em> to discuss HRT.</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Email Marketing: The "Education" Sequence</h3>
                <p className="mb-4">Don't blast your list with "WE NOW OFFER HRT." Instead, send a 3-part educational sequence:</p>
                <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300">
                    <li><strong>Email 1:</strong> "Why your Botox isn't lasting as long as it used to (The Metabolic Connection)."</li>
                    <li><strong>Email 2:</strong> "The difference between chronological age and biological age."</li>
                    <li><strong>Email 3:</strong> "Invitation: The Internal Anti-Aging Blood Panel."</li>
                </ol>

                <p className="text-lg pt-6 mt-6 border-t border-white/10">
                    Our data shows that 15-20% of aesthetic patients will convert to internal medicine protocols if the value proposition is framed around "Anti-Aging" rather than "Medical Treatment." This increases patient retention from 4 months to 2+ years.
                </p>
            </>
        )
    },
    {
        id: 4,
        title: "Case Study: Scaling to $250k/Month with AI Speed-to-Lead",
        category: "Case Study",
        readTime: "15 min read",
        date: "Dec 15, 2025",
        // Image: Stays the same (Analytics/Growth)
        image: "/assets/blog-5.jpg",
        excerpt: "See the exact tech stack and funnel structure Dr. Emily R. used to triple her clinic's revenue in 90 days without hiring more staff.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">Real results speak louder than theory. In this comprehensive case study, we break down the exact transformation of "Vitality Health" (name changed for privacy), a Functional Medicine & Peptide clinic in Austin, Texas, that went from stagnant to market-dominant in 90 days.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Before" State: The Chaos</h3>
                <p className="mb-4">Dr. Emily was a brilliant practitioner but a stressed business owner. Her clinic was stuck at roughly $80k/month revenue for two years. Her situation was classic:</p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-300">
                    <li><strong>Ad Spend Waste:</strong> She was spending $10k/month on Facebook ads. Leads were coming in, but "nobody was picking up the phone."</li>
                    <li><strong>Staff Burnout:</strong> Her two front-desk staff were overwhelmed with checking patients in, resulting in 4-6 hour delays in calling new leads back.</li>
                    <li><strong>No-Show Rate:</strong> 40% of booked consultations were no-shows.</li>
                    <li><strong>Owner Trap:</strong> Dr. Emily was still doing free 15-minute discovery calls herself to "sell" the patients.</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Phase 1: Installing the "Heartbyte Brain" (Weeks 1-2)</h3>
                <p className="mb-6">We didn't touch her ads yet. We fixed the bucket before turning on the hose. We implemented our proprietary AI Infrastructure.</p>

                <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 mb-8">
                    <h4 className="text-[#FB841C] font-bold text-lg mb-4">The Tech Stack:</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2"><span className="text-[#FB841C]">1.</span> <strong>AI Voice Agent (Rachel):</strong> Configured to call every new lead within 20 seconds. If they didn't answer, she sent a conversational SMS instantly.</li>
                        <li className="flex items-start gap-2"><span className="text-[#FB841C]">2.</span> <strong>EMR Integration:</strong> The AI was connected directly to her calendar. It only booked appointments if the lead confirmed they had the financial capacity ($2k+ budget).</li>
                        <li className="flex items-start gap-2"><span className="text-[#FB841C]">3.</span> <strong>The Deposit Barrier:</strong> We instituted a mandatory $50 booking fee for consultations. This terrified Dr. Emily ("People won't pay!"), but we insisted.</li>
                    </ul>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Phase 2: The Campaign Launch (Weeks 3-8)</h3>
                <p className="mb-6">We shifted the ad angle. Instead of "Weight Loss Consult," we marketed the <strong>"Executive Longevity Protocol."</strong></p>
                <p className="mb-6"><strong>The Funnel:</strong></p>
                <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300">
                    <li><strong>Ad:</strong> High-production video showing Dr. Emily explaining the science of peptides (Authority bias).</li>
                    <li><strong>Landing Page:</strong> Long-form medical copy. No "buy now" button, only "Apply for Treatment."</li>
                    <li><strong>Application:</strong> A survey asking about symptoms and budget.</li>
                    <li><strong>The AI Handoff:</strong> Within seconds of submitting, the AI called: <em>"Hi John, this is Rachel from Dr. Emily's office. I see you're struggling with energy and sleep..."</em></li>
                </ol>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Results (Day 90)</h3>
                <p className="mb-6">The transformation was mathematical and operational:</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#FB841C] text-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold">$254k</div>
                        <div className="text-xs uppercase font-bold tracking-wider opacity-90">Monthly Revenue</div>
                    </div>
                    <div className="bg-[#222] text-white p-4 rounded-lg text-center border border-white/10">
                        <div className="text-3xl font-bold text-[#FB841C]">92%</div>
                        <div className="text-xs uppercase font-bold tracking-wider opacity-70">Show Rate</div>
                    </div>
                    <div className="bg-[#222] text-white p-4 rounded-lg text-center border border-white/10">
                        <div className="text-3xl font-bold text-[#FB841C]">0</div>
                        <div className="text-xs uppercase font-bold tracking-wider opacity-70">Dr. Emily Sales Calls</div>
                    </div>
                </div>

                <p className="text-lg">
                    <strong>Key Takeaway:</strong> Dr. Emily didn't get 3x better as a doctor in 90 days. She simply automated the friction points that were killing her conversion. She removed the human error from the follow-up process.
                </p>
            </>
        )
    },
    {
        id: 5,
        title: "Navigating HIPAA in the Age of AI: Is Your Clinic Compliant?",
        category: "Compliance",
        readTime: "11 min read",
        date: "Dec 28, 2025",
        image: "/assets/blog-6.jpg",
        excerpt: "Using ChatGPT for patient emails? Think again. Understanding the risks of AI in healthcare and how to scale safely.",
        content: (
            <>
                <p className="mb-6 text-lg font-medium text-gray-200">Artificial Intelligence is the biggest lever for clinic growth in history, but it is also the biggest liability if handled carelessly. We see clinic owners pasting patient labs into ChatGPT to write summaries, or using generic automation tools (Zapier + OpenAI) to handle patient intake. <strong>Stop immediately.</strong></p>

                <p className="mb-8">If you are using standard, public AI models to process Protected Health Information (PHI), you are committing a Tier 1 HIPAA violation. The fines range from $100 to $50,000 <em>per record</em> per violation.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The "Training Data" Problem</h3>
                <p className="mb-6">Why is standard ChatGPT not compliant? Because of how LLMs (Large Language Models) work. When you type data into the public version of ChatGPT, that data can technically be used to train future versions of the model. </p>
                <p className="mb-6">Imagine you paste: <em>"Jane Doe, DOB 12/05/1980, struggling with weight gain and thyroid issues..."</em> into a chatbot. That data has now left your secure environment and resides on a server where the terms of service likely allow for data usage. You have broken the chain of custody.</p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The BAA: Your Legal Shield</h3>
                <p className="mb-6">To use AI in a medical setting, you must have a <strong>Business Associate Agreement (BAA)</strong> signed with every single software vendor that touches patient data.</p>
                <p className="mb-6">A BAA is a legal contract where the vendor assumes liability for the data they process.
                    <br /><em>Note: The free version of ChatGPT does NOT offer a BAA. Google Gemini consumer version does NOT offer a BAA.</em></p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">How HeartbyteAI Ensures Compliance</h3>
                <p className="mb-6">At HeartbyteAI, we don't just "connect APIs." We build secure, enterprise-grade architecture. Here is how a compliant AI stack works:</p>

                <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#FB841C]/10 flex items-center justify-center text-[#FB841C] font-bold">1</div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Zero-Retention Policy</h4>
                            <p className="text-gray-400 text-sm">Our AI models are configured via API with "Zero Retention" flags. This means the model processes the conversation to generate an answer, but immediately wipes the memory of the conversation from the AI provider's servers after the session.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#FB841C]/10 flex items-center justify-center text-[#FB841C] font-bold">2</div>
                        <div>
                            <h4 className="text-white font-bold text-lg">PII Redaction Layer</h4>
                            <p className="text-gray-400 text-sm">Before data is sent to an LLM, it passes through a local "Redaction Layer." We identify names, SSNs, and phone numbers and replace them with tokens (e.g., [PATIENT_01]). The AI processes the logic, and we re-insert the data locally before showing it to you.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#FB841C]/10 flex items-center justify-center text-[#FB841C] font-bold">3</div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Encryption at Rest & Transit</h4>
                            <p className="text-gray-400 text-sm">All databases are encrypted using AES-256 standards. Even if our servers were physically stolen, the data would be unreadable sludge without the keys.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">The Checklist for Clinic Owners</h3>
                <p className="mb-6">Before implementing any new AI tool, ask these three questions:</p>
                <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-300">
                    <li>"Will you sign a BAA?" (If they hesitate, run).</li>
                    <li>"Is my data used to train your models?" (The answer must be NO).</li>
                    <li>"Is the data encrypted end-to-end?"</li>
                </ul>

                <p className="text-lg pt-6 mt-6 border-t border-white/10">
                    <strong>Final Thought:</strong> Innovation is necessary, but protection is mandatory. We allow you to use the speed of AI (Voice agents, auto-booking, lab analysis) without risking your medical license.
                </p>
            </>
        )
    }
];

interface BlogProps {
    onOpenModal: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onOpenModal }) => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };

    const handleBack = () => {
        setSelectedPost(null);
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-[#141414] min-h-screen text-white pt-24 pb-24 relative">

            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none fixed"></div>

            {/* --- HERO SECTION --- */}
            {!selectedPost && (
                <section className="container mx-auto px-4 mb-20 text-center relative z-10">
                    <div className="inline-block mb-6">
                        <div className="bg-[#1f1f1f] px-3 py-1.5 rounded-[4px] text-[10px] font-bold tracking-widest text-white border border-[#333] uppercase shadow-sm">
                            KNOWLEDGE BASE
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Insights for <span className="text-[#FB841C]">Market Leaders</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Strategies, trends, and systems for scaling Peptide Clinics, Med Spas, and Integrative practices in the digital age.
                    </p>
                </section>
            )}

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {selectedPost ? (
                    /* --- SINGLE POST VIEW --- */
                    <article className="max-w-4xl mx-auto animate-in slide-in-from-bottom-8 fade-in duration-500">
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-gray-500 hover:text-[#FB841C] transition-colors mb-8 font-bold text-sm uppercase tracking-wide"
                        >
                            <ArrowLeft size={16} /> Back to Articles
                        </button>

                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/10">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex gap-3 mb-4">
                                    <span className="bg-[#FB841C] text-white text-xs font-bold px-2 py-1 rounded">{selectedPost.category}</span>
                                    <span className="bg-black/50 backdrop-blur-md text-gray-300 text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><Clock size={12} /> {selectedPost.readTime}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight shadow-lg">{selectedPost.title}</h1>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-8">
                                <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                                    {selectedPost.content}
                                </div>

                                {/* Post Footer */}
                                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                                    <div className="text-gray-500 text-sm">Published on {selectedPost.date}</div>
                                    <button className="flex items-center gap-2 text-[#FB841C] font-bold hover:text-white transition-colors">
                                        <Share2 size={16} /> Share Article
                                    </button>
                                </div>
                            </div>

                            <div className="lg:col-span-4 space-y-8">
                                {/* Sidebar CTA */}
                                <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 sticky top-32">
                                    <h4 className="text-xl font-bold text-white mb-2">Scale Your Clinic</h4>
                                    <p className="text-gray-400 text-sm mb-6">Implement the strategies from this article with the Heartbyte System.</p>
                                    <Button fullWidth onClick={onOpenModal}>Book a Strategy Call</Button>
                                </div>
                            </div>
                        </div>
                    </article>
                ) : (
                    /* --- POST GRID VIEW --- */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => handlePostClick(post)}
                                className="group bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden hover:border-[#FB841C]/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-black/70 backdrop-blur-md text-[#FB841C] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border border-[#FB841C]/20">
                                            {post.category}
                                        </span>
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-3">
                                        <Calendar size={12} /> {post.date}
                                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                        <Clock size={12} /> {post.readTime}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#FB841C] transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-[#FB841C] text-sm font-bold uppercase tracking-wide gap-1 group-hover:gap-2 transition-all">
                                        Read Article <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};