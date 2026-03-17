import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0B] pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="block mb-6">
                            <img
                                src="/project-images/srk logo.png"
                                alt="SRKPLUSENTERPRISES Logo"
                                className="h-32 md:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105 brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Setting standards in construction, civil engineering, and premium interior execution.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Our Portfolio</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Safety Standards</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Capabilities</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Civil Engineering</Link></li>
                            <li><Link href="/services" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Commercial Construction</Link></li>
                            <li><Link href="/services" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Residential Projects</Link></li>
                            <li><Link href="/services" className="text-sm text-gray-400 hover:text-[#F97316] transition-colors">Interior Execution</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-sm text-gray-400">
                                <iconify-icon icon="solar:map-point-linear" class="mr-3 mt-0.5 text-[#F97316]" width="18" height="18"></iconify-icon>
                                Shop No 3, Plot No 20/21 , Kalamboli<br />Navi Mumbai, Maharashtra 410218
                            </li>
                            <li className="flex items-center text-sm text-gray-400">
                                <iconify-icon icon="solar:phone-linear" class="mr-3 text-[#F97316]" width="18" height="18"></iconify-icon>
                                +91 7700957171
                            </li>
                            <li className="flex items-center text-sm text-gray-400">
                                <iconify-icon icon="solar:letter-linear" class="mr-3 text-[#F97316]" width="18" height="18"></iconify-icon>
                                kaoulavjadhav@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-xs text-gray-500 mb-4 md:mb-0">
                        © 2026 SRKPLUSENTERPRISES. All rights reserved. by Informa Pavilion Software Solutions Pvt Ltd.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
