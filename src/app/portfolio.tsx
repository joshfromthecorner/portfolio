"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Briefcase02, CalendarDate, Code02, Mail01, MessageChatCircle, Moon01, PlayCircle, Sun, User01 } from "@untitledui/icons";
import { useTheme } from "next-themes";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { FloatingNav } from "@/components/floating-nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { GitHub, LinkedIn, X as XIcon } from "@/components/foundations/social-icons";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
        tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
        link: "#",
    },
    {
        title: "Task Management App",
        description: "Collaborative project management tool with drag-and-drop Kanban boards, team chat, and automated workflows.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        link: "#",
    },
    {
        title: "AI Content Generator",
        description: "SaaS platform that uses machine learning to generate marketing copy, blog posts, and social media content.",
        tags: ["Python", "OpenAI", "FastAPI", "React"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        link: "#",
    },
];

const skills = [
    { name: "User Research & Testing", level: "Expert" },
    { name: "UI/UX Design", level: "Expert" },
    { name: "Design Systems", level: "Expert" },
    { name: "Prototyping", level: "Advanced" },
    { name: "Figma", level: "Expert" },
    { name: "Design Thinking", level: "Advanced" },
];

const experience = [
    {
        company: "Valsplat",
        logo: "/valsplat-black.png",
        logoDark: "/valsplat-white.png",
        description: "At Valsplat, I've worked with a wide range of high-profile clients, some for extended periods (including two years at the Dutch Ministry of Health) and others in shorter engagements such as one-week design sprints. Each project taught me something new, not only through the challenges of different organisations but also through the people I met along the way, and especially my colleagues at Valsplat, each bringing their own curiosity, expertise, and perspective. Working at Valsplat has also strengthened my user-first mindset: putting real user needs at the centre, avoiding assumptions, and designing based on insights. I've learned to validate decisions early and often, ensuring the products we build are not only well-designed, but truly meaningful and impactful.",
        positions: [
            {
                role: "Medior Product Designer",
                period: "Mar 2023 - Present",
                projects: [
                    {
                        title: "Design System",
                        description: "Built a comprehensive design system used across 12 products.",
                        tags: ["React", "TypeScript", "Storybook"],
                        image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&h=400&fit=crop",
                    },
                    {
                        title: "Performance Optimization",
                        description: "Reduced load times by 40% through code splitting and lazy loading.",
                        tags: ["Webpack", "Core Web Vitals"],
                        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                    },
                ],
            },
            {
                role: "Junior Product Designer",
                period: "Sep 2021 - Apr 2023",
                projects: [
                    {
                        title: "Client Portals",
                        description: "Built custom client portals for 20+ enterprise clients.",
                        tags: ["Vue.js", "Node.js", "MongoDB"],
                        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                    },
                ],
            },
        ],
    },
    {
        company: "Ahold Delhaize - Albert Heijn app",
        logo: "/albert-heijn.png",
        description: "During my graduation internship at Albert Heijn, I worked on my thesis with the goal of improving the Track & Trace user experience of the Albert Heijn app. To this day, the prototype that I designed for Track & Trace is used by the team, developed, and is currently live. This graduation project got rewarded with a 10 from the Hogeschool Rotterdam, and therefore I successfully graduated my Bachelor's degree.",
        positions: [
            {
                role: "Junior UX Designer",
                period: "Jul 2021 - Sep 2021",
                projects: [],
            },
            {
                role: "Graduation Intern UX Designer",
                period: "Feb 2021 - Jul 2021",
                projects: [],
            },
        ],
    },
    {
        company: "D-signwrk",
        logo: "/d-signwrk.png",
        description: "In addition to my studies, I designed & developed websites for clients. I registered myself at the chamber of commerce as self-employed and formerly under the name D-signwrk to design and further develop myself outside of the classroom. Starting my own business has been one of the best steps in my development. Building websites learned me basic knowledge about HTML & CSS. I also worked on improving performance with SEO and Google Analytics.",
        positions: [
            {
                role: "Freelance UX Designer",
                period: "Oct 2018 - May 2021",
                projects: [],
            },
        ],
    },
    {
        company: "AirFrance - KLM Cargo",
        logo: "/klm.png",
        description: "At KLM I was part of the Air France KLM Digital Cargo team. My goal was to improve the user experience of myCargo. In collaboration with design agency Valsplat I created designs and prototypes to help the development team in France. I am very proud that at the end of my internship I successfully designed the Allotments Tool/API for in myCargo.",
        positions: [
            {
                role: "Intern UX Designer",
                period: "Sep 2019 - Feb 2020",
                projects: [],
            },
        ],
    },
];

const testimonials = [
    {
        name: "Team Lead",
        role: "Dutch Ministry of Health",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        content: "Joshua's research-driven approach and ability to translate complex requirements into intuitive designs made a significant impact on our project.",
    },
    {
        name: "Product Manager",
        role: "Albert Heijn",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        content: "Joshua's Track & Trace prototype exceeded expectations and is still being used and developed by our team today.",
    },
    {
        name: "Design Lead",
        role: "Valsplat",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        content: "Joshua brings curiosity and expertise to every project, always putting users first and validating design choices with real insights.",
    },
];

const JoshuaLogo = () => {
    return (
        <>
            <img src="/cloud-logo-white.svg" alt="Joshua" className="h-6 w-auto dark:hidden" />
            <img src="/cloud-logo-dark.svg" alt="Joshua" className="hidden h-6 w-auto dark:block" />
        </>
    );
};

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="flex size-10 items-center justify-center rounded-lg text-tertiary transition hover:bg-secondary hover:text-primary"
                aria-label="Toggle theme"
            >
                <div className="size-5" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex size-10 items-center justify-center rounded-lg text-tertiary transition hover:bg-secondary hover:text-primary"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <Sun className="size-5" /> : <Moon01 className="size-5" />}
        </button>
    );
};

const sectionIds = ["hero", "experience", "about", "testimonials", "contact"];

export const PortfolioPage = () => {
    const activeSection = useActiveSection(sectionIds);

    return (
        <div className="relative min-h-screen w-full bg-primary scroll-smooth">
            {/* Radial Gradient Background - Light Mode */}
            <div
                className="pointer-events-none fixed inset-0 z-0 dark:hidden"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, rgba(46, 144, 250, 0.5) 100%)",
                }}
            />
            {/* Radial Gradient Background - Dark Mode */}
            <div
                className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, #09090b 40%, rgba(21, 112, 239, 0.5) 100%)",
                }}
            />

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-10 flex h-18 w-full items-center justify-center md:h-20">
                <div className="mx-auto flex size-full max-w-[800px] flex-1 items-center justify-between px-4 md:px-8">
                    <div className="text-primary">
                        <JoshuaLogo />
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" className="relative z-1 flex min-h-screen items-center justify-center overflow-hidden">

                <div className="relative mx-auto w-full max-w-[800px] px-4 md:px-8">
                    <div className="flex flex-col items-start">
                        {/* Polaroid Photo */}
                        <div className="mb-8 rotate-[5deg] transform">
                            <div className="rounded-lg bg-white p-2 shadow-lg">
                                <img
                                    src="/josh-profile.jpg"
                                    alt="Joshua - Product Designer"
                                    className="w-48 rounded-sm object-cover md:w-64"
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-start">
                        {/* Badge/Pill */}
                        <Badge color="success" size="lg" className="mb-6">
                            <span className="relative mr-1.5 inline-flex size-2 items-center justify-center">
                                <span className="absolute inset-0 z-0 animate-ping rounded-full bg-utility-success-500 opacity-75" />
                                <span className="relative z-10 size-2 rounded-full bg-utility-success-500" />
                            </span>
                            Product Designer at Valsplat
                        </Badge>

                        {/* Heading */}
                        <h1 className="max-w-[800px] text-[28px] md:text-[44px] font-semibold leading-tight tracking-tight text-primary">
                            Helping teams create meaningful products through research-driven design
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 max-w-prose text-[18px] leading-relaxed text-tertiary">
                            Experienced working in scrum product development teams across a range of sectors, including PostNL, Sunweb, BNG Bank, OVpay, NVM, Air France–KLM Cargo, Albert Heijn, and the Dutch Ministry of Health.
                        </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <div className="relative z-1 mx-auto max-w-[800px] px-4 md:px-8">

                    {/* Experience Section */}
                    <section id="experience" className="py-16 md:py-24">
                        <div className="space-y-8">
                            {experience.map((job, index) => (
                                <div key={index} className="relative p-6 transition">
                                    {/* Company header with logo */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-6">
                                            <div className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full size-12 ${job.logo ? "" : "bg-brand-secondary"}`}>
                                                {job.logo ? (
                                                    <>
                                                        <img src={job.logo} alt={`${job.company} logo`} className={`size-full ${job.company.includes("Albert Heijn") ? "object-contain p-1" : "object-cover"} ${job.logoDark ? "dark:hidden" : ""}`} />
                                                        {job.logoDark && (
                                                            <img src={job.logoDark} alt={`${job.company} logo`} className="hidden size-full object-cover dark:block" />
                                                        )}
                                                    </>
                                                ) : (
                                                    <Briefcase02 className="size-6 text-brand-solid" />
                                                )}
                                            </div>
                                            <p className="text-lg font-semibold text-brand-solid">{job.company}</p>
                                        </div>
                                        <p className="text-lg text-tertiary pl-18 max-w-prose">{job.description}</p>
                                    </div>

                                    {/* Positions with timeline */}
                                    <div className="mt-6 sm:pl-18">
                                        {job.positions.map((position, posIndex) => (
                                            <div key={posIndex} className={`relative pl-8 ${posIndex > 0 ? "mt-8" : ""}`}>
                                                {/* Timeline line connecting positions */}
                                                {job.positions.length > 1 && posIndex < job.positions.length - 1 && (
                                                    <div className="absolute top-2.5 left-[3px] block w-0.5 bg-utility-gray-400 dark:bg-utility-gray-500" style={{ height: "calc(100% + 2rem)" }} />
                                                )}
                                                {/* Timeline dot */}
                                                <div className="absolute top-2 left-0 flex size-2 items-center justify-center">
                                                    {position.period.includes("Present") ? (
                                                        <span className="relative inline-flex size-2 items-center justify-center">
                                                            <span className="absolute inset-0 z-0 animate-ping rounded-full bg-utility-success-500 opacity-75" />
                                                            <span className="relative z-10 size-2 rounded-full bg-utility-success-500" />
                                                        </span>
                                                    ) : (
                                                        <div className="size-2 rounded-full bg-utility-gray-400 dark:bg-utility-gray-500" />
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap items-start justify-between gap-2">
                                                    <h3 className="font-semibold text-primary">{position.role}</h3>
                                                    <span className="text-base text-tertiary">
                                                        {position.period}
                                                    </span>
                                                </div>

                                                {/* Position project cards */}
                                                {position.projects && position.projects.length > 0 && (
                                                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                                        {position.projects.map((project, projectIndex) => (
                                                            <div
                                                                key={projectIndex}
                                                                className="overflow-hidden rounded-xl bg-secondary_alt shadow-lg ring-1 ring-secondary ring-inset backdrop-blur-sm"
                                                            >
                                                                <div className="aspect-video overflow-hidden">
                                                                    <img
                                                                        src={project.image}
                                                                        alt={project.title}
                                                                        className="size-full object-cover"
                                                                    />
                                                                </div>
                                                                <div className="p-4">
                                                                    <h4 className="font-medium text-primary">{project.title}</h4>
                                                                    <p className="mt-1 text-lg text-tertiary max-w-prose">{project.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16 md:py-24">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Text Content */}
                            <div className="order-2 space-y-6 text-lg leading-relaxed text-tertiary lg:order-1">
                                <p className="text-lg font-medium text-primary max-w-prose">
                                    Hi, I'm Joshua, a Dutch Product Designer based in the Randstad, the Netherlands.
                                </p>
                                
                                <p className="max-w-prose">
                                    I enjoy tackling diverse design challenges and focus on bringing ideas to life, whether that's solving complex problems for clients or exploring DIY projects at home (I'm currently busy building my own furniture).
                                </p>
                                
                                <p className="max-w-prose">
                                    My design journey started at a Graphic Design college. During my internships, I worked on digital advertising for brands like KPN and MediaMarkt. At first, I was proud of creating these campaigns, but over time I realized that people don't necessarily enjoy being interrupted by ads while reading the news. That insight pushed me toward creating products people genuinely love to use.
                                </p>
                                
                                <p className="max-w-prose">
                                    After graduating, I went on to study Communication & Multimedia Design (BSc) in Rotterdam. During this period, I completed an internship at Air France - KLM, which also marked my first encounter with Valsplat, as they were working together at the time. Little did I know that I would end up working at Valsplat myself, now already for five years.
                                </p>
                                
                                <p className="max-w-prose">
                                    For my graduation project, I completed an internship at Ahold Delhaize, working on the Albert Heijn app. I graduated with a grade of 10 for my thesis. Shortly after, while looking for an open role, I heard through a former colleague at KLM that Valsplat was looking for a new designer. Things moved quickly from there.
                                </p>
                                
                                <p className="max-w-prose">
                                    I truly enjoy working at Valsplat and have learned a great deal along the way. I'm grateful for the opportunities I've been given. Through my work at Valsplat, I've gained extensive experience collaborating in Agile/Scrum product development teams across a wide range of sectors.
                                </p>
                                
                                <div className="space-y-4 pt-4">
                                    <p className="font-semibold text-primary">What do I enjoy the most in my work?</p>
                                    <p className="max-w-prose">
                                        I love meeting new people and working together with them, especially from different countries. Over the past few years, I have often gotten the opportunity to work with people from different backgrounds and nationalities. I discovered working with people from various backgrounds and cultures has been so much fun and was beneficial for my personal development. It has exposed me to new ideas, perspectives, and ways of life. It makes you look different from the things you are used to, therefore it also helps creativity in product development teams. Working with people from different cultures has challenged my assumptions and encouraged critical thinking, leading to personal growth and development.
                                    </p>
                                </div>
                                
                                <div className="space-y-4 pt-4">
                                    <p className="font-semibold text-primary">What I like about Product Design/UX?</p>
                                    <p className="max-w-prose">
                                        The opportunity to make a positive impact and I get to see the impact of what I do. Seeing my design proposals used by end-users during the usability test is rewarding. Knowing that it is going to be used by millions of users makes it even more exciting. Solving complex problems. Multi-faceted problem-solving never gets boring. UX design involves tackling challenging problems and finding creative solutions that meet the needs of users and stakeholders. The opportunity to learn and grow. The field of UX is constantly evolving, and we as designers have the opportunity to learn new skills and techniques.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Profile Image */}
                            <div className="order-1 flex items-start justify-center lg:order-2 lg:justify-end">
                                <img
                                    src="/josh-profile.jpg"
                                    alt="Joshua - Product Designer"
                                    className="w-full max-w-md rounded-2xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section id="testimonials" className="py-16 md:py-24">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex flex-col rounded-2xl bg-secondary p-6">
                                    <p className="flex-1 text-secondary">{testimonial.content}</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <Avatar size="md" src={testimonial.avatar} alt={testimonial.name} />
                                        <div>
                                            <p className="font-semibold text-primary">{testimonial.name}</p>
                                            <p className="text-lg text-tertiary">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-16 md:py-24">
                        <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
                            <p className="text-lg font-semibold text-primary">Let&apos;s work together</p>
                            <p className="mx-auto mt-3 max-w-prose text-lg text-tertiary">
                                I&apos;m currently available for freelance work and full-time opportunities. If you have a project in mind, let&apos;s
                                talk!
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                                <Button color="secondary" size="xl" iconLeading={LinkedIn} href="https://linkedin.com/in/joshua" target="_blank">
                                    Chat on LinkedIn
                                </Button>
                                <Button color="primary" size="xl" iconLeading={CalendarDate} href="https://cal.com/joshua" target="_blank" className="[&_*[data-icon]]:text-white">
                                    Schedule a call
                                </Button>
                            </div>
                        </div>
                    </section>
            </div>

            {/* Floating Navigation */}
            <FloatingNav activeSection={activeSection} />

            {/* Footer */}
            <footer className="relative z-1 pt-20 pb-24">
                <div className="mx-auto max-w-[800px] px-4 text-center text-lg text-tertiary md:px-8">
                    <p>© {new Date().getFullYear()} Joshua. Made with Cursor/Claude Code and Figma. Deployed via GitHub & Vercel.</p>
                </div>
            </footer>
        </div>
    );
};
