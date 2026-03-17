import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | SRKPLUSENTERPRISES',
    description: 'Comprehensive construction and engineering solutions spanning from foundational groundworks to premium interior execution.',
};

export default function Services() {
    return (
        <main>
            {/* Services Header */}
            <section className="relative min-h-[50vh] flex items-center bg-[#0B0B0B] overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/2036686/pexels-photo-2036686.jpeg" 
                        alt="Services Background" 
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                        Capabilities
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight max-w-4xl mx-auto"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Core Engineering Solutions
                    </h1>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive construction and engineering capabilities spanning from foundational groundworks to premium interior execution.
                    </p>
                </div>
            </section>

            {/* Services Overview Section */}
            <section id="services" className="py-[clamp(4rem,10vw,8rem)] bg-white">
                <div className="max-w-7xl mx-auto px-[clamp(1rem,5vw,2rem)]">
                    <div className="mb-[clamp(3rem,8vw,6rem)] max-w-2xl">
                        <h2 className="text-[clamp(2rem,6vw,3rem)] font-semibold tracking-tight text-[#0B0B0B] mb-[clamp(1rem,3vw,1.5rem)]"
                            style={{ fontFamily: "'Poppins', sans-serif" }}>What We Do</h2>
                        <p className="text-base text-gray-500">Executing complex structural and aesthetic plans with industry-leading precision and safety.</p>
                    </div>

                    <div className="flex flex-col gap-[clamp(4rem,10vw,10rem)]">
                        {/* Service 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,6vw,5rem)] items-start">
                            <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1 flex flex-col gap-[clamp(1rem,3vw,2rem)]">
                                <div className="w-[clamp(3.5rem,8vw,4rem)] h-[clamp(3.5rem,8vw,4rem)] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                                    <iconify-icon icon="solar:ruler-cross-pen-linear" width="32" height="32"></iconify-icon>
                                </div>
                                <h3 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-[#0B0B0B] leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    RCC Works
                                </h3>
                                <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-500 leading-relaxed">
                                    RCC works executed with precision. We ensure base stability and load bearing excellence for all structures.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Foundation & Earthworks</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Structural Frameworks</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Highway & Road Construction</li>
                                </ul>
                                <Link href="/contact" className="inline-flex max-w-max items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-xl shadow-gray-200/50 mt-[clamp(1rem,4vw,2.5rem)]">
                                    Inquire About This Service <iconify-icon icon="solar:arrow-right-linear" class="ml-2" width="20" height="20"></iconify-icon>
                                </Link>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,4vw,2rem)] order-1 lg:order-2">
                                <div className="space-y-6">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl">
                                        <img src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg" alt="Civil Engineering" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-6 md:pt-16">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" alt="Engineering planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl hidden md:block">
                                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Construction detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,6vw,5rem)] items-start">
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,4vw,2rem)] order-1 lg:order-1">
                                <div className="space-y-[clamp(1rem,4vw,2rem)] sm:pt-16">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl hidden sm:block">
                                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Commercial space" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&q=80&w=800" alt="Office exterior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Commercial Construction" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-2 flex flex-col gap-[clamp(1rem,3vw,2rem)]">
                                <div className="w-[clamp(3.5rem,8vw,4rem)] h-[clamp(3.5rem,8vw,4rem)] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                                    <iconify-icon icon="solar:buildings-2-linear" width="32" height="32"></iconify-icon>
                                </div>
                                <h3 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-[#0B0B0B] leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Commercial Construction
                                </h3>
                                <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-500 leading-relaxed">
                                    End-to-end building solutions for corporate offices, retail spaces, and industrial facilities. Tailored to meet high volume business requirements with state-of-the-art facilities.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Corporate Office Towers</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Retail & Malls</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Industrial Warehousing</li>
                                </ul>
                                <Link href="/contact" className="inline-flex max-w-max items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-xl shadow-gray-200/50 mt-[clamp(1rem,4vw,2.5rem)]">
                                    Inquire About This Service <iconify-icon icon="solar:arrow-right-linear" class="ml-2" width="20" height="20"></iconify-icon>
                                </Link>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,6vw,5rem)] items-start">
                            <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-1 flex flex-col gap-[clamp(1rem,3vw,2rem)]">
                                <div className="w-[clamp(3.5rem,8vw,4rem)] h-[clamp(3.5rem,8vw,4rem)] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                                    <iconify-icon icon="solar:home-2-linear" width="32" height="32"></iconify-icon>
                                </div>
                                <h3 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-[#0B0B0B] leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Residential Projects
                                </h3>
                                <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-500 leading-relaxed">
                                    From single-family homes to large-scale residential complexes, we craft enduring, safe, and comfortable living spaces. Delivering dreams with structural perfection.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Luxury Villas</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> High-Rise Apartments</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Private Residences</li>
                                </ul>
                                <Link href="/contact" className="inline-flex max-w-max items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-xl shadow-gray-200/50 mt-[clamp(1rem,4vw,2.5rem)]">
                                    Inquire About This Service <iconify-icon icon="solar:arrow-right-linear" class="ml-2" width="20" height="20"></iconify-icon>
                                </Link>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,4vw,2rem)] order-1 lg:order-2">
                                <div className="space-y-6">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80&w=1200" alt="Residential Construction" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-6 md:pt-16">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" alt="Home interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl hidden md:block">
                                        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" alt="Villas" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,6vw,5rem)] items-start">
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1rem,4vw,2rem)] order-1 lg:order-1">
                                <div className="space-y-[clamp(1rem,4vw,2rem)] sm:pt-16">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl hidden sm:block">
                                        <img src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg" alt="Interior detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Premium finish" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-100 shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" alt="Interior Execution" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 lg:sticky lg:top-32 order-2 lg:order-2 flex flex-col gap-[clamp(1rem,3vw,2rem)]">
                                <div className="w-[clamp(3.5rem,8vw,4rem)] h-[clamp(3.5rem,8vw,4rem)] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-[#F97316] shadow-sm">
                                    <iconify-icon icon="solar:sofa-2-linear" width="32" height="32"></iconify-icon>
                                </div>
                                <h3 className="text-[clamp(1.75rem,5vw,2.5rem)] font-semibold tracking-tight text-[#0B0B0B] leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Interior Execution
                                </h3>
                                <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-500 leading-relaxed">
                                    Premium finishing works, detailed millwork, and complete interior fit-outs for built environments focusing on aesthetics and high-end functionality.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Custom Millwork</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Premium Surface Finishing</li>
                                    <li className="flex items-center text-gray-600"><iconify-icon icon="solar:check-circle-linear" class="text-[#F97316] mr-3" width="20"></iconify-icon> Spatial Configurations</li>
                                </ul>
                                <Link href="/contact" className="inline-flex max-w-max items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-xl shadow-gray-200/50 mt-[clamp(1rem,4vw,2.5rem)]">
                                    Inquire About This Service <iconify-icon icon="solar:arrow-right-linear" class="ml-2" width="20" height="20"></iconify-icon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-[#F97316] relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent">
                </div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to build your next landmark?</h2>
                    <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                        Partner with SRKPLUSENTERPRISES for reliable construction, civil engineering, and interior execution
                        services.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-gray-900 transition-colors shadow-xl">
                        Start Your Project <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="20"
                            height="20"></iconify-icon>
                    </Link>
                </div>
            </section>
        </main>
    );
}
