'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in animations on load
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out',
                delay: 0.3
            });

            gsap.from(subtitleRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.from(buttonsRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power3.out',
                delay: 0.7
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="@container" ref={heroRef}>
            <div className="@[480px]:p-4">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-4 relative">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background-dark/80 via-background-dark to-black/50 rounded-xl z-0 bg-[length:200%_200%] animate-background-pan" style={{ backgroundImage: 'linear-gradient(135deg, #102221, #123, #102221)' }}></div>

                    {/* Geometric Shapes */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
                        <div className="w-64 h-64 rounded-full bg-primary blur-[120px]"></div>
                        <div className="w-80 h-80 border border-primary/20 rounded-lg absolute animate-spin-slow"></div>
                        <div className="w-24 h-24 border border-primary/10 rounded-full absolute top-1/4 left-1/4 animate-spin-slow" style={{ animationDuration: '25s' }}></div>
                        <div className="w-16 h-16 bg-primary/20 rounded-xl absolute bottom-1/3 right-1/4 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
                        <h1
                            ref={headingRef}
                            className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                        >
                            Building Innovative Tech Products for Real-World Impact
                        </h1>
                        <p
                            ref={subtitleRef}
                            className="text-white/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal"
                        >
                            Developer • Engineer • Product Builder
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div ref={buttonsRef} className="flex-wrap gap-4 flex justify-center z-10">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:shadow-[0_0_20px_theme(colors.primary)] transition-shadow">
                            <span className="truncate">View Featured Projects</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 hover:bg-white/20 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors">
                            <span className="truncate">Explore All Products</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}