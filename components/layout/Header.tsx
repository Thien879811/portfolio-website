'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between whitespace-nowrap border-b border-white/10 px-6 py-4 md:px-10">
                <Link href="/">
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-6 text-primary">

                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                                    fill="currentColor"
                                />
                            </svg>

                        </div>
                        <h2 className="text-lg font-bold tracking-tight text-white">Alex Doe</h2>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
                    <div className="flex items-center gap-9 text-white">
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                        <Link href="/projects" className="nav-link">
                            Projects
                        </Link>
                        <Link href="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </div>

                    <button className="h-10 rounded-lg bg-primary px-4 text-sm font-bold text-background-dark hover:opacity-90">
                        Hire Me
                    </button>
                </div>

                {/* Mobile Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </header >

            {/* Overlay */}
            < div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                    ${mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
                    `}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Slide Menu */}
            <aside
                className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-background-dark border-l border-white/10
                transform transition-transform duration-300 ease-out
                ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <span className="text-lg font-bold text-white">Menu</span>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-6 px-6 py-8">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                        About
                    </Link>
                    <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                        Projects
                    </Link>
                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                        Blog
                    </Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
                        Contact
                    </Link>

                    <button className="mt-6 h-11 rounded-lg bg-primary text-sm font-bold text-background-dark hover:opacity-90">
                        Hire Me
                    </button>
                </nav>
            </aside>
        </>
    );
}
