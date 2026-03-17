'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroImages = [
  "https://images.pexels.com/photos/2036686/pexels-photo-2036686.jpeg",
  "https://images.pexels.com/photos/2383649/pexels-photo-2383649.jpeg",
  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
  "https://images.pexels.com/photos/12453932/pexels-photo-12453932.jpeg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0B0B0B] pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-70' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Construction Slide ${index + 1}`}
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/40 to-[#0B0B0B]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              Engineering Excellence
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
              Building Strong Structures and <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-orange-300">Exceptional
                Spaces.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Premier civil engineering and construction firm specializing in large-scale structural projects,
              commercial developments, and high-end interior finishing. We engineer the future, one project at a
              time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-[#0B0B0B] bg-white hover:bg-gray-100 transition-colors">
                View Projects
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Overview Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}>Core Capabilities</h2>
            <p className="text-base text-gray-500">Comprehensive construction and engineering solutions spanning from
              foundational groundworks to premium interior execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Service 1: Large Feature */}
            <div className="lg:col-span-5 group relative rounded-3xl overflow-hidden min-h-[500px] shadow-xl shadow-gray-200/50 flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src="https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg"
                  alt="RCC Work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent transition-opacity duration-300"></div>
              </div>
              <div className="relative z-10 p-8 w-full border-t border-white/10 backdrop-blur-[0px] bg-black/20">
                <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <iconify-icon icon="solar:ruler-cross-pen-linear" width="24" height="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>RCC Work</h3>
                <p className="text-sm text-gray-300 mb-6">We provide comprehensive RCC (Reinforced Cement Concrete) work services, ensuring structural integrity and durability in every project.</p>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-white hover:text-[#F97316] transition-colors pt-2 border-t border-white/20">
                  Learn more <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="16" height="16"></iconify-icon>
                </Link>
              </div>
            </div>

            {/* Service 2 & 3 Stack */}
            <div className="lg:col-span-7 grid grid-rows-2 gap-6 lg:gap-8">
              {/* Service 2: Horizontal Card */}
              <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100/60 shadow-lg shadow-gray-200/30 transition-all duration-300 flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-5/12 overflow-hidden bg-gray-100 min-h-[250px] sm:min-h-full">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                    alt="Commercial Construction"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center bg-white group-hover:bg-gray-50/50 transition-colors">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-5 text-[#F97316]">
                    <iconify-icon icon="solar:buildings-2-linear" width="24" height="24"></iconify-icon>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-[#0B0B0B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Commercial Build</h3>
                  <p className="text-sm text-gray-500 mb-6 flex-1">End-to-end solutions for corporate offices and retail spaces designed for scale.</p>
                  <Link href="/services" className="inline-flex items-center text-sm font-medium text-[#0B0B0B] hover:text-[#F97316] transition-colors mt-auto w-max">
                    Learn more <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="16" height="16"></iconify-icon>
                  </Link>
                </div>
              </div>

              {/* Service 3: Horizontal Card */}
              <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100/60 shadow-lg shadow-gray-200/30 transition-all duration-300 flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-5/12 overflow-hidden bg-gray-100 min-h-[250px] sm:min-h-full">
                  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
                    alt="Interior Finishing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center bg-white group-hover:bg-gray-50/50 transition-colors">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-5 text-[#F97316]">
                    <iconify-icon icon="solar:sofa-2-linear" width="24" height="24"></iconify-icon>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-[#0B0B0B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Interior Execution</h3>
                  <p className="text-sm text-gray-500 mb-6 flex-1">Premium finishing works, detailed millwork, and advanced spatial configuration.</p>
                  <Link href="/services" className="inline-flex items-center text-sm font-medium text-[#0B0B0B] hover:text-[#F97316] transition-colors mt-auto w-max">
                    Learn more <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="16" height="16"></iconify-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B] mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Selected Works</h2>
              <p className="text-base text-gray-500">A showcase of our engineering capabilities and attention to
                detail across various sectors.</p>
            </div>
            <Link href="/portfolio"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-[#0B0B0B] border border-gray-200 hover:bg-gray-50 transition-colors shrink-0">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[300px] gap-6 lg:gap-8">
            {/* Project 1 - Large Left */}
            <Link href="/portfolio/malodaya-hinjewadi-pune" className="group cursor-pointer block lg:col-span-7 row-span-2 relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-200/50">
              <img src="/project-images/Hinjewadi/Home.jpeg"
                alt="Malodaya Hinjewadi Pune"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent transition-opacity duration-300"></div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-[#0B0B0B] text-xs font-medium px-4 py-2 rounded-full shadow-lg">
                Personal Property
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end border-t border-white/10 backdrop-blur-[2px] bg-black/20">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 group-hover:text-[#F97316] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Malodaya</h3>
                  <p className="text-sm text-gray-300">RCC Work - Hinjewadi Pune </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:text-white transition-all text-white backdrop-blur-sm shadow-xl">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="24" height="24"></iconify-icon>
                </div>
              </div>
            </Link>

            {/* Project 2 - Top Right */}
            <Link href="/portfolio/sai-world-empire" className="group cursor-pointer block lg:col-span-5 row-span-1 relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-200/50">
              <img src="https://i.ibb.co/kgsC94dZ/IMG-20250507-WA0017.jpg"
                alt="Sai World Empire"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent transition-opacity duration-300"></div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0B0B0B] text-[10px] font-medium px-3 py-1.5 rounded-full shadow-lg">
                Interior
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white mb-1 group-hover:text-[#F97316] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>Sai World Empire</h3>
                  <p className="text-xs text-gray-300">Khargar , Navi Mumbai  Premium Interior Execution</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:text-white transition-all text-white backdrop-blur-sm">
                  <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20"></iconify-icon>
                </div>
              </div>
            </Link>

            {/* Project 3 - Bottom Right Left-Half */}
            <Link href="/portfolio/AR-Vrundavan-Society" className="group cursor-pointer block lg:col-span-2 lg:col-start-8 row-span-1 relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-200/50">
              <img src="https://i.ibb.co/3YBrv57B/pixelcut-export-2025-02-05-T123554-998.png"
                alt="AR Vrundavan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-[#F97316] transition-colors leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>AR Vrundavan</h3>
              </div>
            </Link>

            {/* Project 4 - Bottom Right Right-Half */}
            <Link href="/portfolio/Roswalt-Zaiden" className="group cursor-pointer block lg:col-span-3 lg:col-start-10 row-span-1 relative overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-200/50">
              <img src="https://i.ibb.co/SXZ6HyhV/1771670622.webp"
                alt="Roswalt Zaiden"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0B0B0B] text-[10px] font-medium px-3 py-1.5 rounded-full shadow-lg">
                RCC Work
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-1 group-hover:text-[#F97316] transition-colors leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>Roswalt Zaiden</h3>
                  <p className="text-[10px] text-gray-300">Oshiwara, Mumbai</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}>Engineered for Excellence</h2>
            <p className="text-base text-gray-400">We combine technical expertise with rigorous quality control to
              deliver structures that stand the test of time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div
                className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:shield-check-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-base font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Quality Materials</h3>
              <p className="text-sm text-gray-400">Uncompromising standards in sourcing construction materials
                ensuring longevity and safety.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div
                className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:users-group-rounded-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-base font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Expert Engineers</h3>
              <p className="text-sm text-gray-400">A dedicated team of seasoned civil engineers and skilled execution
                professionals.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div
                className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:calendar-date-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-base font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Timely Delivery</h3>
              <p className="text-sm text-gray-400">Strict adherence to project timelines through robust management and
                planning protocols.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div
                className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] rounded-xl flex items-center justify-center mb-6">
                <iconify-icon icon="solar:ruler-angular-linear" width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-base font-medium tracking-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Precision Finishing</h3>
              <p className="text-sm text-gray-400">Meticulous attention to detail in interior execution bridging the
                gap between structure and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}>Construction Workflow</h2>
            <p className="text-base text-gray-500 max-w-2xl">A systematic approach from initial ground breaking to final
              interior handover.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-100 z-0"></div>

            <div className="relative z-10 pt-4 md:pt-0">
              <span className="text-5xl md:text-6xl font-semibold text-gray-100 mb-6 block"
                style={{ fontFamily: "'Poppins', sans-serif" }}>01</span>
              <h3 className="text-lg font-medium tracking-tight text-[#0B0B0B] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Consultation & Planning</h3>
              <p className="text-sm text-gray-500">Site analysis, structural assessment, and comprehensive project
                blueprinting.</p>
            </div>

            <div className="relative z-10 pt-4 md:pt-0">
              <span className="text-5xl md:text-6xl font-semibold text-gray-100 mb-6 block"
                style={{ fontFamily: "'Poppins', sans-serif" }}>02</span>
              <h3 className="text-lg font-medium tracking-tight text-[#0B0B0B] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Engineering Design</h3>
              <p className="text-sm text-gray-500">Developing detailed structural frameworks and material
                specification documentation.</p>
            </div>

            <div className="relative z-10 pt-4 md:pt-0">
              <span className="text-5xl md:text-6xl font-semibold text-[#F97316]/20 mb-6 block"
                style={{ fontFamily: "'Poppins', sans-serif" }}>03</span>
              <h3 className="text-lg font-medium tracking-tight text-[#0B0B0B] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Civil Construction</h3>
              <p className="text-sm text-gray-500">Execution of core shell, masonry, and foundational works with
                rigorous safety standards.</p>
            </div>

            <div className="relative z-10 pt-4 md:pt-0">
              <span className="text-5xl md:text-6xl font-semibold text-gray-100 mb-6 block"
                style={{ fontFamily: "'Poppins', sans-serif" }}>04</span>
              <h3 className="text-lg font-medium tracking-tight text-[#0B0B0B] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Interior Finishing</h3>
              <p className="text-sm text-gray-500">Executing final spatial details, surface treatments, and high-end
                interior installations.</p>
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
