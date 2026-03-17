import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | SRKPLUSENTERPRISES',
    description: 'A legacy of structural integrity, engineering innovation, and architectural excellence.',
};

export default function About() {
    return (
        <main>
            {/* Hero Banner Section */}
            <section className="relative min-h-[60vh] flex items-center bg-[#0B0B0B] pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://i.ibb.co/kgsC94dZ/IMG-20250507-WA0017.jpg"
                        alt="Construction Development" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                            Our Story
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight"
                            style={{ fontFamily: "'Poppins', sans-serif" }}>
                            About SRKPLUSENTERPRISES
                        </h1>
                        <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                            A legacy of structural integrity, engineering innovation, and architectural excellence. We transform
                            blueprints into enduring realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Introduction (Two-Column) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div
                                className="absolute -inset-4 bg-gray-50 rounded-[2rem] transform -rotate-2 -z-10 transition-transform duration-500 hover:rotate-0">
                            </div>
                            <div
                                className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 border border-gray-100 shadow-2xl shadow-gray-200/50">
                                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                                    alt="Engineers on site"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B] mb-6 leading-tight"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Engineering the future with unwavering precision.
                            </h2>
                            <div className="space-y-6 text-base text-gray-500 leading-relaxed">
                                <p>
                                    At SRKPLUSENTERPRISES, we are fundamentally driven by a commitment to quality construction
                                    and structural excellence. For years, we have been at the forefront of the civil engineering
                                    sector, delivering complex foundational works and large-scale commercial developments that
                                    stand as testaments to our technical expertise.
                                </p>
                                <p>
                                    Our project delivery mechanism is built on a client-focused approach. We understand that
                                    every structure is an investment in the future. Therefore, we integrate rigorous planning,
                                    state-of-the-art engineering practices, and stringent safety protocols into every phase of
                                    construction.
                                </p>
                                <p>
                                    Beyond the core structure, we recognize the importance of the built environment. As a
                                    complementary capability, our specialized teams execute premium interior finishing and
                                    fit-outs, ensuring that the spaces we build are not only structurally sound but also
                                    functionally refined and aesthetically complete.
                                </p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-6">
                                <div
                                    className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                    <iconify-icon icon="solar:medal-ribbons-star-linear" className="text-[#F97316]" width="32"
                                        height="32"></iconify-icon>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold tracking-tight text-[#0B0B0B] uppercase"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}>Certified Excellence</h4>
                                    <p className="text-sm text-gray-500 mt-1">Adhering to international construction codes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div
                            className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                            <div
                                className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-8 text-[#F97316] border border-gray-100">
                                <iconify-icon icon="solar:eye-linear" width="28" height="28"></iconify-icon>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-[#0B0B0B] mb-4"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>Our Vision</h3>
                            <p className="text-base text-gray-500 leading-relaxed">
                                To be the region's most trusted partner in infrastructure and structural development. We
                                envision a future where our engineering solutions contribute to sustainable, enduring
                                landscapes, setting new benchmarks for reliability in the construction industry.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div
                            className="bg-white rounded-2xl p-10 md:p-14 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                            <div
                                className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-8 text-[#F97316] border border-gray-100">
                                <iconify-icon icon="solar:target-linear" width="28" height="28"></iconify-icon>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-[#0B0B0B] mb-4"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>Our Mission</h3>
                            <p className="text-base text-gray-500 leading-relaxed">
                                To deliver unparalleled construction, civil engineering, and interior execution services. We are
                                dedicated to translating our clients' objectives into reality through meticulous project
                                management, ethical practices, and an unyielding commitment to quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-[#0B0B0B] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
                            style={{ fontFamily: "'Poppins', sans-serif" }}>Our Core Values</h2>
                        <p className="text-base text-gray-400">The foundational principles that guide every concrete pour,
                            structural design, and client interaction.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
                            <div
                                className="w-16 h-16 bg-[#F97316]/10 text-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:buildings-linear" width="32" height="32"></iconify-icon>
                            </div>
                            <h3 className="text-lg font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Quality Construction</h3>
                            <p className="text-sm text-gray-400">Zero compromises on material integrity and structural execution.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
                            <div
                                className="w-16 h-16 bg-[#F97316]/10 text-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:hand-shake-linear" width="32" height="32"></iconify-icon>
                            </div>
                            <h3 className="text-lg font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Professional Integrity</h3>
                            <p className="text-sm text-gray-400">Transparent reporting, ethical practices, and honest project
                                costing.</p>
                        </div>

                        {/* Value 3 */}
                        <div
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
                            <div
                                className="w-16 h-16 bg-[#F97316]/10 text-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:shield-warning-linear" width="32" height="32"></iconify-icon>
                            </div>
                            <h3 className="text-lg font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Safety Standards</h3>
                            <p className="text-sm text-gray-400">Maintaining the highest levels of site safety for our workforce and
                                clients.</p>
                        </div>

                        {/* Value 4 */}
                        <div
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
                            <div
                                className="w-16 h-16 bg-[#F97316]/10 text-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:smile-circle-linear" width="32" height="32"></iconify-icon>
                            </div>
                            <h3 className="text-lg font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Client Satisfaction</h3>
                            <p className="text-sm text-gray-400">Delivering on time, within budget, and exceeding expectations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements / Stats Section */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100/50 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B0B0B] mb-2"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>150+</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Projects
                                Completed</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start pl-0 md:pl-12">
                            <span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B0B0B] mb-2"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>15</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Years
                                Experience</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start pl-0 md:pl-12">
                            <span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B0B0B] mb-2"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>120+</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Satisfied
                                Clients</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start pl-0 md:pl-12">
                            <span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B0B0B] mb-2"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>2.5M</span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">Sq.Ft
                                Developed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workforce / Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B] mb-6"
                                style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Our greatest asset is our workforce.
                            </h2>
                            <p className="text-base text-gray-500 mb-6 leading-relaxed">
                                The backbone of SRKPLUSENTERPRISES is our dedicated team of professionals. From highly qualified
                                structural engineers mapping out complex loads, to skilled technicians and craftsmen executing
                                intricate details on site, our workforce is defined by competence and dedication.
                            </p>
                            <p className="text-base text-gray-500 mb-8 leading-relaxed">
                                We invest heavily in continuous training, ensuring our teams are equipped with the latest civil
                                engineering methodologies, safety standards, and interior finishing techniques. It is their
                                on-ground expertise that guarantees the successful execution of every project we undertake.
                            </p>
                            <Link href="/contact"
                                className="inline-flex items-center text-sm font-medium text-[#0B0B0B] hover:text-[#F97316] transition-colors pb-1 border-b border-[#0B0B0B] hover:border-[#F97316]">
                                Join our engineering team <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="16"
                                    height="16"></iconify-icon>
                            </Link>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                                    <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 shadow-lg">
                                        <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800"
                                            alt="Construction team discussing plans" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 md:space-y-6">
                                    <div className="rounded-2xl overflow-hidden aspect-square bg-gray-200 shadow-lg">
                                        <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
                                            alt="Engineer inspecting site" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-lg">
                                        <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
                                            alt="Skilled worker" className="w-full h-full object-cover" />
                                    </div>
                                </div>
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
                        services. Let's discuss your requirements.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-[#0B0B0B] hover:bg-gray-900 transition-colors shadow-xl">
                        Contact Our Team <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="20"
                            height="20"></iconify-icon>
                    </Link>
                </div>
            </section>
        </main>
    );
}
