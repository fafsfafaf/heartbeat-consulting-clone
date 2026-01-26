import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
    onBack: () => void;
}

export const TermsOfService: React.FC<LegalPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#141414] min-h-screen text-white pt-32 pb-20 px-4 md:px-8">
            <div className="container mx-auto max-w-4xl">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-[#FB841C] hover:text-white transition-colors mb-8 font-medium"
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">Imprint & Terms of Service</h1>
                <p className="text-gray-400 mb-12">Last Updated: February 20, 2023</p>

                <div className="space-y-8 text-gray-300 leading-relaxed">

                    {/* Impressum Section */}
                    <div className="bg-[#1f1f1f] p-6 rounded-xl border border-white/10 mb-8">
                        <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide text-[#FB841C]">Impressum (Imprint)</h2>
                        <div className="space-y-1 text-gray-300">
                            <p className="font-bold text-white">SCALIFAI LTD</p>
                            <p>Information according to § 5 TMG</p>
                            <br />
                            <p className="font-bold">Represented by: Erkan Yusufoglu</p>
                            <p>Eigenstraße 97D</p>
                            <p>47053 Duisburg</p>
                            <p>Germany</p>
                            <br />
                            <p><strong>Contact:</strong> info@heartbyteai.com</p>
                            <br />
                            <p className="text-sm text-gray-500 italic border-t border-white/10 pt-2 mt-2">
                                By providing your phone number, you agree to receive text messages from SCALIFAI LTD. Message and data rates may apply. Reply STOP to opt out.
                            </p>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">General</h2>
                        <p>
                            This website (the "Site") is owned and operated by HeartbyteAI d/b/a "www.heartbyteai.com" ("HeartbyteAI," "we" or "us", "Agency", "Company"). By using the Site and working with us, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from HeartbyteAI. Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
                        </p>
                        <p className="mt-4">
                            We reserve the right to change these Terms of Service or to impose new conditions on use of the Site, from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
                        <h3 className="text-xl font-bold text-white mb-2">Agreeing to These Terms & Conditions</h3>
                        <p>
                            We offer a range of services depending on your needs. Individuals come to HeartbyteAI.com to both post and purchase content. A majority of these Terms and Conditions will apply to both individuals and suppliers. In some cases, the responsibilities of individuals purchasing content and suppliers providing content vary. If these Terms and Conditions are inconsistent with specific Service Terms, those Service Terms will apply.
                        </p>
                        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg my-6">
                            <p className="font-bold text-white mb-2">IMPORTANT</p>
                            <p>
                                PLEASE CAREFULLY READ AND UNDERSTAND THESE TERMS AND CONDITIONS OF USE & SALE (THESE "TERMS") BEFORE ACCESSING, USING, OR SUBSCRIBING OR PLACING AN ORDER OVER www.heartbyteai.com OR OTHER OF OUR SITES OR ONLINE RESOURCES WHICH LINK TO THESE TERMS.
                            </p>
                            <p className="mt-4">
                                THESE TERMS CONTAIN DISCLAIMERS OF WARRANTIES AND LIMITATIONS OF LIABILITIES INCLUDING ARBITRATION AND CLASS ACTION WAIVER PROVISIONS THAT WAIVE YOUR RIGHT TO A COURT HEARING, RIGHT TO A JURY TRIAL, AND RIGHT TO PARTICIPATE IN A CLASS ACTION. ARBITRATION IS MANDATORY AND IS THE EXCLUSIVE REMEDY FOR ANY AND ALL DISPUTES UNLESS SPECIFIED BELOW. THESE TERMS FORM AN ESSENTIAL BASIS OF OUR AGREEMENT.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">General Use</h2>
                        <p>
                            The use of www.heartbyteai.com or other sites or online resources to which these Terms are linked (each, a "Website"), owned and maintained by HeartbyteAI LLC ("HeartbyteAI," "we," "our," "us"), are governed by these Terms. We offer the Website, including all information, tools, and services available from the Website to you, the user, conditioned upon your acceptance of all terms and conditions stated herein. By accessing, using, subscribing, or placing an order over the Website, you and your business (including any sub users you may have) agree to the terms and conditions set forth herein.
                        </p>
                        <p className="mt-4">
                            If you do not agree to these Terms in their entirety, you are not authorized to use the Website in any manner or form whatsoever.
                        </p>
                        <p className="mt-4 uppercase font-bold text-white">
                            THIS IS A BINDING AGREEMENT. THESE TERMS TOGETHER WITH OUR PRIVACY STATEMENT FORM A LEGALLY BINDING AGREEMENT (THE "AGREEMENT") BETWEEN YOU AND YOUR BUSINESS ("YOU") AND HEARTBYTEAI. THIS AGREEMENT GOVERNS YOUR ACCESS TO AND USE OF THE WEBSITE AND THE SERVICES PROVIDED BY HEARTBYTEAI, ANY ORDER YOU PLACE THROUGH THE WEBSITE, BY TELEPHONE, OR OTHER ACCEPTED METHOD OF PURCHASE AND, AS APPLICABLE, YOUR USE OR ATTEMPTED USE OF THE PRODUCTS OR SERVICES OFFERED ON OR AVAILABLE THROUGH THE WEBSITE. PLEASE PRINT AND RETAIN A COPY OF THIS AGREEMENT FOR YOUR RECORDS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Refund Policy</h2>
                        <p>
                            HeartbyteAI offers a 72-Hour Refund Policy - Ongoing Management payments shall be fully refundable only if Client provides written e-mail notice of cancellation to Agency within 72 hours after the payment is received by Agency. Following the expiration of this seventy-two-hour period, all Ongoing Management payments shall be earned, non-refundable, and non-assessable.
                        </p>
                        <p className="mt-4">
                            If you have put down a refundable deposit note that refundable deposits become non-refundable after filling out Onboarding Forms, after you got onboarded and started benefiting from our services or have covered the full amount of the investment to access any of our programs.
                        </p>
                        <p className="mt-4">
                            If you are not happy with our services, your only recourse is to unsubscribe from using the services.
                        </p>
                        <p className="mt-4">
                            For the sake of emphasis, we do not provide refunds, credit, or prorated billing for any canceled subscription.
                        </p>
                        <p className="mt-4">
                            If you wish to cancel your subscription, please email: info@heartbyteai.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                        <p>
                            If you have any questions or concerns regarding our privacy policy or terms please direct them to: info@heartbyteai.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
