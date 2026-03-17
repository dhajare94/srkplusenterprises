'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Portfolio() {
    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main>
            {/* Portfolio Header */}
            <section className="relative min-h-[50vh] flex items-center bg-[#0B0B0B] overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                        alt="Portfolio Background" 
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                        Our Portfolio
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight max-w-4xl mx-auto"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Selected Works & Projects
                    </h1>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive showcase of our engineering capabilities, structural execution, and premium interior developments.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter UI */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-[#F97316] text-white shadow-lg shadow-orange-200'
                                    : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-10">
                        {filteredProjects.map((project) => (
                            <Link key={project.id} href={`/portfolio/${project.id}`} className="group cursor-pointer block flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 p-4">
                                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] mb-6">
                                    <img src={project.coverImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                    <div
                                        className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    </div>
                                    <div
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0B0B0B] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-xl font-medium tracking-tight text-[#0B0B0B] mb-2 group-hover:text-[#F97316] transition-colors"
                                        style={{ fontFamily: "'Poppins', sans-serif" }}>{project.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-1">{project.shortDesc} • {project.location}</p>
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                                        <span className="inline-flex items-center text-sm font-medium text-[#0B0B0B] group-hover:text-[#F97316] transition-colors">
                                            View Project <iconify-icon icon="solar:arrow-right-linear" className="ml-2" width="16" height="16"></iconify-icon>
                                        </span>
                                        <div
                                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#F97316] group-hover:text-white transition-all text-gray-400">
                                            <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16"></iconify-icon>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-500">No projects found in this category.</p>
                        </div>
                    )}
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

