import React, { useState, useRef } from 'react';
import { X, UploadCloud, CheckCircle2, Loader2, Linkedin, Link as LinkIcon, Trash2 } from 'lucide-react';
import { Button } from './ui/Button';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose, jobTitle }) => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success'>('form');
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    linkedin: string;
    portfolio: string;
    resume: File | null;
  }>({
    name: '',
    email: '',
    linkedin: '',
    portfolio: '',
    resume: null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    // Reset state after transition
    setTimeout(() => {
      setStep('form');
      setFormData({
        name: '',
        email: '',
        linkedin: '',
        portfolio: '',
        resume: null
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitting');
    
    // Simulate API Request
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData(prev => ({ ...prev, resume: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>

      {/* Modal Content - Mobile Optimized: flex-col, max-height, scrolling */}
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-lg relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300 text-white flex flex-col max-h-[90vh]">
        
        {/* Header - Fixed at top */}
        <div className="bg-[#111] border-b border-white/5 p-4 flex items-center justify-between shrink-0">
            <div>
                 <p className="text-xs font-bold text-[#FB841C] uppercase tracking-wider mb-1">Applying For</p>
                 <h3 className="font-bold text-lg leading-none line-clamp-1">{jobTitle}</h3>
            </div>
            <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                <X size={20} />
            </button>
        </div>

        {/* Body - Scrollable */}
        <div className="p-5 md:p-8 overflow-y-auto custom-scrollbar">
            
            {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 animate-in slide-in-from-right-4 fade-in duration-300">
                    
                    {/* Name */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                        <input 
                            required
                            type="text" 
                            className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] transition-all"
                            placeholder="Jane Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] transition-all"
                            placeholder="jane@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>

                    {/* Links Row - Stack on mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 flex items-center gap-1"><Linkedin size={12}/> LinkedIn URL</label>
                            <input 
                                required
                                type="url" 
                                className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] transition-all text-sm"
                                placeholder="linkedin.com/in/..."
                                value={formData.linkedin}
                                onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 flex items-center gap-1"><LinkIcon size={12}/> Portfolio / GitHub</label>
                            <input 
                                type="url" 
                                className="w-full bg-[#111] border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[#FB841C] focus:ring-1 focus:ring-[#FB841C] transition-all text-sm"
                                placeholder="github.com/..."
                                value={formData.portfolio}
                                onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Resume Upload - Functional */}
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">CV / Resume</label>
                        
                        {/* Hidden Input */}
                        <input 
                            type="file" 
                            ref={fileInputRef}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />

                        <div 
                            onClick={triggerFileUpload}
                            className={`border-2 border-dashed rounded-lg p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group
                            ${formData.resume ? 'border-[#FB841C] bg-[#FB841C]/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                        >
                            {formData.resume ? (
                                <div className="flex flex-col items-center relative w-full animate-in zoom-in-90 duration-300">
                                    <CheckCircle2 className="text-[#FB841C] mb-2" size={24} />
                                    <span className="text-sm font-bold text-white text-center break-all px-4 line-clamp-1">
                                        {formData.resume.name}
                                    </span>
                                    <span className="text-xs text-gray-400 mt-1">
                                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                                    </span>
                                    
                                    <button 
                                        onClick={removeFile}
                                        type="button"
                                        className="mt-3 flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors px-3 py-1 rounded-full bg-red-500/10 hover:bg-red-500/20"
                                    >
                                        <Trash2 size={12} /> Remove
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <UploadCloud className="text-gray-400 group-hover:text-white mb-2 transition-colors" size={24} />
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center">Click to upload CV</span>
                                    <span className="text-xs text-gray-500 mt-1">PDF, DOCX up to 5MB</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="pt-2 md:pt-4">
                        <Button fullWidth type="submit" className="py-3 md:py-4">
                            Submit Application
                        </Button>
                        <p className="text-center text-[10px] text-gray-500 mt-3">
                            By applying, you agree to our privacy policy and data processing terms.
                        </p>
                    </div>
                </form>
            )}

            {step === 'submitting' && (
                <div className="py-12 md:py-20 flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <Loader2 className="w-12 h-12 text-[#FB841C] animate-spin mb-6" />
                    <h3 className="text-xl font-bold text-white mb-2">Sending Application...</h3>
                    <p className="text-gray-400">Please wait while we process your data.</p>
                </div>
            )}

            {step === 'success' && (
                <div className="py-8 md:py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 fade-in duration-300">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                        Thank you for applying to <strong>{jobTitle}</strong>. Our team will review your profile and get back to you within 48 hours.
                    </p>
                    <Button onClick={handleClose} variant="outline" fullWidth>
                        Back to Careers
                    </Button>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};