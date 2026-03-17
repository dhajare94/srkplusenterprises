import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | SRKPLUSENTERPRISES',
    description: 'Partner with SRKPLUSENTERPRISES for reliable construction, civil engineering, and interior execution services.',
};

export default function Contact() {
    return (
        <main className="bg-gray-50 min-h-screen pb-24">
            {/* Contact Header */}
            <section className="relative min-h-[50vh] flex items-center bg-[#0B0B0B] overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                        alt="Contact Background" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                        Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight max-w-4xl mx-auto"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Let's Discuss Your Project
                    </h1>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Partner with SRKPLUSENTERPRISES for reliable construction, civil engineering, and interior execution services. Contact our team to start planning your next landmark.
                    </p>
                </div>
            </section>

            {/* Content & Info Panel */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Contact Interface (Left Col) */}
                        <div className="lg:col-span-8 space-y-10">
                            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/40">
                                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0B0B0B] mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Send us a message
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-gray-50" placeholder="John" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-gray-50" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-gray-50" placeholder="john@company.com" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-gray-50" placeholder="Project Inquiry" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors bg-gray-50" placeholder="Tell us about your project requirements..." />
                                    </div>

                                    <button type="button" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-xl shadow-gray-200/50">
                                        Send Message <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="20" height="20"></iconify-icon>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Information Panel (Right Col) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                            <div className="bg-[#0B0B0B] rounded-3xl p-8 border border-gray-800 shadow-2xl text-white">
                                <h3 className="text-xl font-semibold tracking-tight text-white mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Contact Information
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F97316] shrink-0">
                                            <iconify-icon icon="solar:map-point-linear" width="24" height="24"></iconify-icon>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Office Address</h4>
                                            <p className="text-base font-medium text-white leading-relaxed">
                                                Office No 3, Plot No 20/21<br />
                                                Sec-15, Roadapali, Kalamboli<br />
                                                Navi Mumbai - 410218
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F97316] shrink-0">
                                            <iconify-icon icon="solar:phone-linear" width="24" height="24"></iconify-icon>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                                            <p className="text-base font-medium text-white">
                                                +91 77009 57171<br />
                                                +91 77009 57171
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#F97316] shrink-0">
                                            <iconify-icon icon="solar:letter-linear" width="24" height="24"></iconify-icon>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                                            <p className="text-base font-medium text-white">
                                                kaoulavjadhav@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
