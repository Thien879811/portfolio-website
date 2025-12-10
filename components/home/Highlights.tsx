'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
    value: string;
    label: string;
    numericValue: number;
}

const stats: Stat[] = [
    { value: '50+', label: 'Completed Projects', numericValue: 50 },
    { value: '8+', label: 'Years of Experience', numericValue: 8 },
    { value: '20+', label: 'Technologies Mastered', numericValue: 20 },
    { value: '100K+', label: 'Users Impacted', numericValue: 100000 },
];

export default function Highlights() {
    const sectionRef = useRef<HTMLElement>(null);
    const statsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            statsRef.current.forEach((stat, index) => {
                if (stat) {
                    const valueElement = stat.querySelector('.stat-value');
                    const numericValue = stats[index].numericValue;

                    // Counter animation
                    gsap.from(stat, {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top center+=100',
                            toggleActions: 'play none none reverse',
                        },
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'back.out(1.7)',
                    });

                    // Number counting animation
                    if (valueElement) {
                        const obj = { value: 0 };
                        gsap.to(obj, {
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top center+=100',
                                toggleActions: 'play none none reverse',
                            },
                            value: numericValue,
                            duration: 2,
                            delay: index * 0.1,
                            ease: 'power2.out',
                            onUpdate: () => {
                                const currentValue = Math.round(obj.value);
                                if (stats[index].value.includes('K')) {
                                    valueElement.textContent = `${Math.round(currentValue / 1000)}K+`;
                                } else {
                                    valueElement.textContent = `${currentValue}+`;
                                }
                            },
                        });
                    }
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col items-center gap-8 px-4 text-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white">Highlights</h2>
                <p className="text-white/60">A quick look at my journey and achievements.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 w-full max-w-4xl">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        ref={(el) => { statsRef.current[index] = el; }}
                        className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-6"
                    >
                        <p className="stat-value text-4xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-white/70">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
