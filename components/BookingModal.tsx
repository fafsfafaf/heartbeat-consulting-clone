import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, CheckCircle2, AlertCircle, Ban, ChevronDown, Play, Mail, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [isDisqualified, setIsDisqualified] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        turnover: '',
        treatments: '',
        canAfford: 'Yes',
        email: '',
        countryCode: '+1',
        phone: ''
    });

    if (!isOpen) return null;

    const resetModal = () => {
        setStep(1);
        setIsDisqualified(false);
        setError(null);
        setFormData({
            firstName: '',
            lastName: '',
            turnover: '',
            treatments: '',
            canAfford: 'Yes',
            email: '',
            countryCode: '+1',
            phone: ''
        });
    };

    const handleClose = () => {
        onClose();
        setTimeout(resetModal, 300);
    };

    const handleNext = () => {
        setError(null);
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setError(null);
        if (isDisqualified) {
            setIsDisqualified(false);
            setStep(4);
        } else {
            setStep(prev => Math.max(1, prev - 1));
        }
    };

    const updateData = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        if (error) setError(null);
    };

    // --- VALIDATION HANDLERS ---

    const validateStep1 = () => {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setError("Please fill out your first and last name.");
            return;
        }
        handleNext();
    };

    const validateStep3 = () => {
        if (!formData.treatments.trim()) {
            setError("Please enter the primary treatments you offer.");
            return;
        }
        handleNext();
    };

    const validateStep5 = () => {
        if (!formData.email.trim() || !formData.email.includes('@')) {
            setError("Please enter a valid email address.");
            return;
        }
        handleNext();
    };

    const validateStep6 = () => {
        if (!formData.phone.trim() || formData.phone.length < 5) {
            setError("Please enter a valid phone number.");
            return;
        }
        handleNext();
    };

    const handleInvestmentSelection = (value: string) => {
        updateData('canAfford', value);
        if (value === 'No') {
            setIsDisqualified(true);
        } else {
            handleNext();
        }
    };

    const OptionButton = ({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) => (
        <button
            onClick={onClick}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 mb-3 flex items-center justify-between group
        ${selected
                    ? 'border-[#FB841C] bg-[#FB841C]/5 text-black'
                    : 'border-gray-200 md:hover:border-[#FB841C]/50 text-gray-600'}`}
        >
            <span className={`font-bold ${selected ? 'text-[#FB841C]' : 'group-hover:text-black'}`}>{label}</span>
            {selected && <CheckCircle2 className="text-[#FB841C] w-5 h-5" />}
        </button>
    );

    // Total steps for progress bar (excluding the final success video page)
    const totalSteps = 7;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>

            {/* Modal Content - Adjusted maxWidth for final step to accommodate content */}
            <div className={`bg-white rounded-2xl w-full ${step === 8 ? 'max-w-4xl' : 'max-w-lg'} relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]`}>

                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-between shrink-0">
                    {/* Hide back button on success step (8) */}
                    {!isDisqualified && step > 1 && step < 8 ? (
                        <button onClick={handleBack} className="text-gray-400 hover:text-black transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                    ) : <div className="w-5"></div>}

                    {/* Progress Bar - Hide on Success Step 8 */}
                    {step < 8 && (
                        <div className="flex gap-1">
                            {!isDisqualified && Array.from({ length: totalSteps }, (_, i) => i + 1).map(i => (
                                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'w-6 bg-[#FB841C]' : 'w-2 bg-gray-200'}`}></div>
                            ))}
                        </div>
                    )}

                    <button onClick={handleClose} className="text-gray-400 hover:text-red-500 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="p-8 overflow-y-auto custom-scrollbar">

                    {/* Disqualified View */}
                    {isDisqualified ? (
                        <div className="text-center animate-in slide-in-from-right-8 fade-in duration-300 py-8">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Ban className="text-red-600 w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Not a good fit right now.</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Based on your current investment capacity, our program is not the right fit for your clinic at this stage. We focus on scaling clinics ready for significant growth investment.
                            </p>
                            <Button fullWidth onClick={handleClose} variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-400">
                                Close
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Only show title on steps 1-6 */}
                            {step < 7 && <h2 className="text-2xl font-bold text-center mb-8 text-black uppercase tracking-tight">Book Your Strategy Call</h2>}

                            {/* STEP 1: Name */}
                            {step === 1 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <p className="text-lg font-medium text-center text-gray-600">What's your full name?</p>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">First Name</label>
                                            <input
                                                type="text"
                                                autoFocus
                                                className={`w-full bg-gray-50 border rounded-lg p-3 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black ${error && !formData.firstName ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                value={formData.firstName}
                                                onChange={(e) => updateData('firstName', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                className={`w-full bg-gray-50 border rounded-lg p-3 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black ${error && !formData.lastName ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                value={formData.lastName}
                                                onChange={(e) => updateData('lastName', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                            <AlertCircle size={16} />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <Button fullWidth onClick={validateStep1}>Next Step</Button>
                                </div>
                            )}

                            {/* STEP 2: Revenue */}
                            {step === 2 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <p className="text-lg font-medium text-center text-gray-600">Over the last 3 months what is your average monthly revenue?</p>
                                    <div>
                                        <OptionButton
                                            label="Below $20k/month"
                                            selected={formData.turnover === 'Below 20k'}
                                            onClick={() => { updateData('turnover', 'Below 20k'); handleNext(); }}
                                        />
                                        <OptionButton
                                            label="$20k-$75k/m"
                                            selected={formData.turnover === '20k-75k'}
                                            onClick={() => { updateData('turnover', '20k-75k'); handleNext(); }}
                                        />
                                        <OptionButton
                                            label="$75k/m-$150k/m"
                                            selected={formData.turnover === '75k-150k'}
                                            onClick={() => { updateData('turnover', '75k-150k'); handleNext(); }}
                                        />
                                        <OptionButton
                                            label="$150k/m+"
                                            selected={formData.turnover === '150k+'}
                                            onClick={() => { updateData('turnover', '150k+'); handleNext(); }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: Treatments */}
                            {step === 3 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <p className="text-lg font-medium text-center text-gray-600">What Are The Primary Treatments You Offer? *</p>
                                    <div>
                                        <input
                                            type="text"
                                            autoFocus
                                            placeholder="Type Here"
                                            className={`w-full bg-gray-50 border rounded-lg p-4 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black text-lg ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                            value={formData.treatments}
                                            onChange={(e) => updateData('treatments', e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && validateStep3()}
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                            <AlertCircle size={16} />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <Button fullWidth onClick={validateStep3}>Next Step</Button>
                                </div>
                            )}

                            {/* STEP 4: Qualification */}
                            {step === 4 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <div className="bg-[#FB841C]/10 p-4 rounded-lg border border-[#FB841C]/20 mb-6">
                                        <p className="text-sm text-center text-black font-medium leading-relaxed">
                                            We guarantee 30 qualified patient appointments in 90 days. <br />
                                            <span className="font-bold">Could you afford a minimum investment of $3,000 to work with us?</span>
                                        </p>
                                    </div>

                                    <div>
                                        <OptionButton
                                            label="Yes"
                                            selected={formData.canAfford === 'Yes'}
                                            onClick={() => handleInvestmentSelection('Yes')}
                                        />
                                        <OptionButton
                                            label="No"
                                            selected={formData.canAfford === 'No'}
                                            onClick={() => handleInvestmentSelection('No')}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* STEP 5: Email */}
                            {step === 5 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <p className="text-lg font-medium text-center text-gray-600">What's the best email to reach you on?</p>
                                    <div>
                                        <input
                                            type="email"
                                            autoFocus
                                            placeholder="doctor@clinic.com"
                                            className={`w-full bg-gray-50 border rounded-lg p-4 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black text-lg ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                            value={formData.email}
                                            onChange={(e) => updateData('email', e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && validateStep5()}
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                            <AlertCircle size={16} />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <Button fullWidth onClick={validateStep5}>Next Step</Button>
                                </div>
                            )}

                            {/* STEP 6: Phone */}
                            {step === 6 && (
                                <div className="space-y-6 animate-in slide-in-from-right-8 fade-in duration-300">
                                    <p className="text-lg font-medium text-center text-gray-600">What's the best phone number to reach you on?</p>

                                    <div className="flex gap-3">
                                        {/* Country Code Select */}
                                        <div className="relative w-1/3">
                                            <select
                                                className={`w-full h-full bg-gray-50 border rounded-lg p-4 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black text-lg appearance-none cursor-pointer ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                value={formData.countryCode}
                                                onChange={(e) => updateData('countryCode', e.target.value)}
                                            >
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                                <ChevronDown size={16} />
                                            </div>
                                        </div>

                                        {/* Phone Input */}
                                        <input
                                            type="tel"
                                            autoFocus
                                            placeholder="(555) 000-0000"
                                            className={`w-2/3 bg-gray-50 border rounded-lg p-4 outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] text-black text-lg ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                            value={formData.phone}
                                            onChange={(e) => updateData('phone', e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && validateStep6()}
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                            <AlertCircle size={16} />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <Button fullWidth onClick={validateStep6}>Book My Strategy Call</Button>
                                </div>
                            )}

                            {/* STEP 7: Calendly Embed (Placeholder) */}
                            {step === 7 && (
                                <div className="space-y-6 text-center animate-in slide-in-from-right-8 fade-in duration-300">
                                    <h3 className="text-xl md:text-2xl font-bold text-black leading-tight px-4 uppercase tracking-tight">
                                        Speak With One of Our Strategists On Exactly How We Can <span className="text-[#FB841C]">Fill Your Calendar</span> With Financially Qualified Patients
                                    </h3>

                                    {/* Placeholder for Calendly Iframe */}
                                    <div className="w-full h-[400px] bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-5 blur-[1px]"></div>

                                        <CalendarIcon className="text-gray-300 w-12 h-12 mb-4" />
                                        <div className="relative z-10 px-6 py-4 bg-white rounded-xl shadow-lg border border-gray-100 max-w-xs mx-auto">
                                            <p className="text-gray-600 text-sm mb-3">
                                                This is a placeholder for the Calendly embed.
                                            </p>
                                            <Button onClick={() => setStep(8)} fullWidth>
                                                Simulate Booking Confirmation
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 8: Success / Video / Email Instructions */}
                            {step === 8 && (
                                <div className="space-y-8 text-center animate-in slide-in-from-bottom-8 fade-in duration-500">

                                    {/* Headline */}
                                    <div>
                                        <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
                                            <CheckCircle2 size={16} className="text-green-600" />
                                            <span className="text-green-700 font-bold uppercase tracking-wider text-xs">Booking Confirmed</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-black leading-tight mb-4 uppercase tracking-tight">
                                            Your Phone Call Has Been <span className="text-[#FB841C]">Scheduled!</span>
                                        </h2>
                                        <p className="text-gray-600 text-lg max-w-xl mx-auto font-medium">
                                            Watch This Quick Video To See How We Generate Financially Qualified Appointments Using Our <span className="text-black font-bold">Celebrity Funnel.</span>
                                        </p>
                                    </div>

                                    {/* Main Video */}
                                    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group cursor-pointer border-4 border-black">
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2187d80aeff2?q=80&w=2940&auto=format&fit=crop')] bg-cover opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-[#FB841C] rounded-full flex items-center justify-center pl-1 shadow-[0_0_40px_rgba(251,132,28,0.5)] group-hover:scale-110 transition-transform">
                                                <Play className="fill-white text-white w-8 h-8" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-widest border border-white/10">
                                            The Celebrity Funnel Explained
                                        </div>
                                    </div>

                                    {/* Important Email Instruction */}
                                    <div className="bg-[#FFF4E5] border-l-4 border-[#FB841C] p-6 rounded-r-xl text-left shadow-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[#FB841C] p-2 rounded-full text-white mt-1 shrink-0">
                                                <Mail size={20} />
                                            </div>
                                            <div className="space-y-4 w-full">
                                                <div>
                                                    <h4 className="font-bold text-black text-lg mb-1 uppercase tracking-wide">Important: Check Your Email Now</h4>
                                                    <p className="text-gray-800 leading-relaxed">
                                                        Go to your email, Open <span className="font-bold bg-white px-1 rounded border border-[#FB841C]/20">"Invitation from an unknown sender"</span> from a <span className="font-mono bg-black text-white px-1.5 rounded text-sm mx-1">@emberflowai.com</span> domain, and click the <span className="font-bold text-[#FB841C]">"I Know The Sender"</span> button.
                                                    </p>
                                                </div>

                                                {/* Placeholder Image for Email Instruction */}
                                                <div className="w-full h-40 bg-white border-2 border-dashed border-[#FB841C]/30 rounded-lg flex flex-col items-center justify-center text-gray-400 gap-2">
                                                    <div className="w-16 h-10 bg-gray-100 rounded border border-gray-200"></div>
                                                    <span className="text-xs font-bold uppercase tracking-widest">Email Screenshot Placeholder</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="border-gray-200" />

                                    {/* Q&A Videos */}
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-8 uppercase tracking-tight">
                                            Get Your <span className="text-[#FB841C]">Questions Answered</span> Before The Call!
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div key={i} className="group cursor-pointer">
                                                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-3 border border-gray-200 group-hover:border-[#FB841C] transition-all">
                                                        <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                                                            <Play className="fill-white text-white w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                                        </div>
                                                        <div className="absolute bottom-2 left-2 bg-[#FB841C] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                                            2:45
                                                        </div>
                                                    </div>
                                                    <div className="p-2">
                                                        <h4 className="text-base font-extrabold text-black leading-tight group-hover:text-[#FB841C] transition-colors text-left mt-2">
                                                            {i === 1 ? "How does the AI handle HIPAA compliance?" :
                                                                i === 2 ? "What is the setup time for a clinic?" :
                                                                    i === 3 ? "Does this integrate with my EMR?" :
                                                                        i === 4 ? "What guarantees do you offer on results?" :
                                                                            "Pricing & ROI Breakdown Explanation"}
                                                        </h4>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};