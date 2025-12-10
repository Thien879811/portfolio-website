'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Project {
    title: string;
    description: string;
    image: string;
    techCount: number;
}

const projects: Project[] = [
    {
        title: 'Project QuantumLeap',
        description: 'An AI-powered platform for predictive analytics in the e-commerce sector.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBzSBunVWSHXEh4K-0wnIGaJ4TDokWOqEKAB2eDcagkublVIBdEH15QxDPqv4AYTQd_IW3mFGfF5QOIpA9e-URQIQmazEX9SPiLDuMEMcTjsjAvxlkXtdgnotYajqLrjN3SRBsr4KE3uB6iBYtxp1XSWauIZr1sP_7on1wlMK_R1gyK7febTde9_zpIDwCk75QQJp6XzJST7goGBnXWaGV1pfJlnoJRIENIx2EJRS9i7ygQS-6MWqL3wu7eqx0ILoj10Y7vkReWTuk',
        techCount: 2,
    },
    {
        title: 'Project Nova',
        description: 'A decentralized finance application for secure asset management on the blockchain.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCL7cCGWktNp7KJ-0etxK3iBV6cEYWR_InVcCjBaQjaO_bSVCE3-Ic05fdBs04e5IF9HGJ6z-3_19W8f_Qoph0ujiMyisBc-0ua7RYkv4n5-KLg77950wFTrc037kII2gAmcm2-wvSaSu7qHjtPiG-H0wxhndJYW1vmo_0n6NVEf5r_tHG48dPFKJe4kXZfJhmI2nJKooo7X758ZzsEjGzoKyhq0FSJeN8J5KpFhBlgmJ57DZqaiE7Gxa93CZJ611Yr7rpD13xLtCg',
        techCount: 3,
    },
    {
        title: 'Project Orion',
        description: 'A cross-platform mobile app for real-time collaboration and project management.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCYlYoYqpM4lpmc59BtOBdI6bkxW9LoNeG2Otisj0_qUgaAgIZM_MYqWIoGN77QJTd-64as-3a1HS8AcjMlsC37skTUZWtaq1HK2RPJKjBDlXQJUw5KbsQcxXZCfiTeAYuwaIJWeEGIXoM7QkDvfasTboYjb5qdftl7vbMDQP7v2GMb9gZdm-g52HuhxU74LpjpZr2xed6xSodrknjAJZ6ok1r7n4lqL5Ho0T8cFzF3BnVPIKWav9MCu3KuRuYnnxwVfbYHNB24YVg',
        techCount: 4,
    },
];

export default function FeaturedProjects() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [currentIndex, setCurrentIndex] = useState(1);

    // Animate cards whenever index changes
    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            const position = index - currentIndex;

            gsap.to(card, {
                x: position * 260,
                scale: position === 0 ? 1 : 0.8,
                opacity: position === 0 ? 1 : 0.35,
                filter: position === 0 ? 'blur(0px)' : 'blur(4px)',
                zIndex: position === 0 ? 10 : 5,
                duration: 0.6,
                ease: 'power3.out',
            });
        });
    }, [currentIndex]);

    const prev = () => {
        setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
    };

    const next = () => {
        setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
    };

    return (
        <section className="relative mx-auto w-full max-w-6xl py-20">
            <h2 className="mb-2 text-3xl font-bold text-white">Featured Projects</h2>
            <p className="mb-12 max-w-xl text-white/60">
                A selection of my best work, showcasing my skills in product development and engineering.
            </p>

            <div className="relative flex h-[500px] items-center justify-center overflow-hidden">
                {projects.map((project, index) => {
                    const isCenter = index === currentIndex;

                    return (
                        <div
                            key={project.title}
                            ref={(el) => {cardsRef.current[index] = el}}
                            className="absolute w-80 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </div>

                            <div className="space-y-4 p-5">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-sm text-white/70">{project.description}</p>

                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gray-600" />
                                    <span className="h-6 w-6 rounded-full bg-gray-600" />
                                    <span className="h-6 w-6 rounded-full bg-gray-600" />
                                    <span className="text-xs text-white/50">+{project.techCount}</span>
                                </div>

                                <button
                                    className={`mt-3 w-full rounded-lg py-2 text-sm font-bold transition
                                        ${isCenter
                                            ? 'bg-primary text-black hover:opacity-90'
                                            : 'bg-white/10 text-white'
                                        }`}
                                >
                                    View Project Details
                                </button>
                            </div>
                        </div>
                    );
                })}

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
