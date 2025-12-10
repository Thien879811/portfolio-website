'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhatIBuild() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger animation for service cards
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col items-center gap-8 px-4 text-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white">What I Build</h2>
                <p className="max-w-2xl text-white/60">
                    I specialize in turning complex requirements into elegant, functional, and scalable software solutions.
                    My approach is centered on user experience, robust architecture, and clean, maintainable code.
                </p>
            </div>

            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                <div
                    ref={(el) => { cardsRef.current[0] = el; }}
                    className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Web Applications</h3>
                    <p className="text-sm text-white/70">
                        Developing responsive, high-performance web apps with modern frameworks like React and Next.js.
                    </p>
                </div>

                <div
                    ref={(el) => { cardsRef.current[1] = el; }}
                    className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Automation & APIs</h3>
                    <p className="text-sm text-white/70">
                        Building robust backend systems, RESTful APIs, and automation scripts to streamline business processes.
                    </p>
                </div>

                <div
                    ref={(el) => { cardsRef.current[2] = el; }}
                    className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-center"
                >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-3xl">design_services</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Product Prototyping</h3>
                    <p className="text-sm text-white/70">
                        Transforming ideas into tangible prototypes and MVPs with a focus on rapid iteration and user feedback.
                    </p>
                </div>
            </div>
        </section>
    );
}
