import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

type Props = {
    params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | SRKPLUSENTERPRISES`,
        description: project.shortDesc
    };
}

export default async function ProjectDetail({ params }: Props) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main>
            {/* Project Hero Section */}
            <section className="relative min-h-[60vh] flex items-center bg-[#0B0B0B] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={project.coverImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#F97316] text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                        {project.category}
                    </div>
                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tighter text-white mt-6 leading-tight max-w-4xl"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {project.title}
                    </h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Back Button */}
                <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#F97316] transition-colors mb-12 group">
                    <iconify-icon icon="solar:arrow-left-linear" className="mr-2 group-hover:-translate-x-1 transition-transform" width="18" height="18"></iconify-icon>
                    Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Project Identity is now in Hero */}
                        {/* Project Overview */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Project Overview
                            </h2>
                            <div className="text-lg text-gray-500 leading-relaxed whitespace-pre-line max-w-3xl font-light">
                                {project.description}
                            </div>
                        </div>

                        {/* Project Gallery */}
                        <div className="space-y-10">
                            <h2 className="text-2xl font-semibold tracking-tight text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Project Gallery
                            </h2>
                            <div className="columns-1 md:columns-2 gap-6 space-y-6">
                                {project.gallery.map((imgUrl, index) => (
                                    <div key={index} className="relative rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group break-inside-avoid">
                                        <img src={imgUrl}
                                            alt={`${project.title} View ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-8">
                        <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold tracking-tight text-[#0B0B0B] mb-10 pb-8 border-b border-gray-200/50" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                Project Details
                            </h3>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Developer</span>
                                    <p className="text-lg font-medium text-[#0B0B0B]">{project.info.developer || 'SRKPLUSENTERPRISES'}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Project Name</span>
                                    <p className="text-lg font-medium text-[#0B0B0B]">{project.title}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Category</span>
                                    <p className="text-lg font-medium text-[#F97316]">{project.category}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Location</span>
                                    <p className="text-lg font-medium text-[#0B0B0B]">{project.location}</p>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-gray-200/50">
                                <Link href="/contact" className="w-full inline-flex items-center justify-center px-6 py-5 text-sm font-semibold rounded-xl text-white bg-[#0B0B0B] hover:bg-[#F97316] transition-all shadow-lg hover:shadow-orange-500/20">
                                    Inquire Now
                                    <iconify-icon icon="solar:arrow-right-linear" class="ml-2" width="20"></iconify-icon>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Trust Factor */}
                        <div className="p-8 bg-white rounded-[2rem] border border-gray-100 flex items-center gap-5 shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#F97316]">
                                <iconify-icon icon="solar:shield-check-linear" width="28" height="28"></iconify-icon>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#0B0B0B]">Guaranteed Delivery</p>
                                <p className="text-xs text-gray-500">Quality Assured Execution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
