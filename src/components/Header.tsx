'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-white/5 py-0 shadow-lg'
            : 'bg-transparent border-transparent py-2'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center py-2">
                            <img
                                src="/project-images/srk logo.png"
                                alt="SRKPLUSENTERPRISES Logo"
                                className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105 brightness-0 invert"
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-white hover:text-[#F97316] transition-all hover:-translate-y-0.5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Icon */}
                    <div className="flex items-center gap-6">
                        <Link href="/contact"
                            className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg text-white bg-[#F97316] hover:bg-[#E06511] transition-all shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:scale-105">
                            Start Project
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white hover:text-gray-300 transition-colors focus:outline-none z-50 p-2"
                        >
                            <iconify-icon
                                icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
                                width="32"
                                height="32"
                            ></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`fixed inset-0 bg-[#0B0B0B] z-40 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl font-semibold text-white hover:text-[#F97316] transition-colors"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium rounded-xl text-white bg-[#F97316] hover:bg-[#E06511] transition-all w-full max-w-xs shadow-xl"
                    >
                        Start Project
                    </Link>
                </div>
            </div>
        </header>
    );
}
