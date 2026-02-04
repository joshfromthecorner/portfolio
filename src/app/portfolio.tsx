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
        <div className="flex items-center gap-0">
            <img src="/avatar-josh-hq.png" alt="Joshua" className="size-12 rounded-full object-cover" />
            <svg width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M71.5126 20.5755L71.3877 18.2288V14.1595C71.3877 13.3107 71.2962 12.6034 71.1131 12.0375C70.9467 11.455 70.6638 11.0139 70.2643 10.7144C69.8815 10.3981 69.3656 10.24 68.7165 10.24C68.1173 10.24 67.5931 10.3649 67.1437 10.6145C66.6943 10.8642 66.3115 11.2553 65.9953 11.7879L63.5487 10.8891C63.815 10.3399 64.1645 9.83227 64.5973 9.36625C65.0466 8.8836 65.6042 8.5008 66.2699 8.21786C66.9523 7.93493 67.7678 7.79346 68.7165 7.79346C69.9314 7.79346 70.9467 8.03479 71.7622 8.51744C72.5777 8.98346 73.1769 9.65751 73.5597 10.5396C73.9591 11.4217 74.1588 12.4869 74.1588 13.7351L74.084 20.5755H71.5126ZM67.9176 20.8751C66.4197 20.8751 65.2547 20.5423 64.4225 19.8765C63.607 19.2108 63.1992 18.2704 63.1992 17.0555C63.1992 15.7573 63.6319 14.767 64.4974 14.0846C65.3795 13.4023 66.6028 13.0611 68.1673 13.0611H71.5126V15.2081H69.066C67.9509 15.2081 67.1686 15.3662 66.7193 15.6824C66.2699 15.982 66.0452 16.4147 66.0452 16.9806C66.0452 17.4632 66.2366 17.846 66.6194 18.129C67.0189 18.3953 67.5681 18.5284 68.2671 18.5284C68.8996 18.5284 69.4488 18.3869 69.9148 18.104C70.3808 17.8211 70.7386 17.4466 70.9883 16.9806C71.2546 16.5146 71.3877 15.9903 71.3877 15.4078H72.2116C72.2116 17.1054 71.8704 18.4452 71.188 19.4271C70.5056 20.3925 69.4155 20.8751 67.9176 20.8751Z" fill="currentColor"/>
                <path d="M59.2102 20.5755L59.0604 18.2787V8.09302H61.8315V20.5755H59.2102ZM50.5723 14.4841V8.09302H53.3683V14.4841H50.5723ZM53.3683 14.4841C53.3683 15.466 53.4849 16.2316 53.7179 16.7808C53.9509 17.3301 54.2671 17.7129 54.6665 17.9292C55.0826 18.1456 55.5569 18.2538 56.0895 18.2538C57.0382 18.2704 57.7705 17.9625 58.2865 17.3301C58.8024 16.6976 59.0604 15.7906 59.0604 14.6089H60.1089C60.1089 15.9237 59.9092 17.0555 59.5097 18.0041C59.1269 18.9362 58.5777 19.6518 57.862 20.1511C57.163 20.6338 56.3142 20.8751 55.3156 20.8751C54.3337 20.8751 53.4848 20.6754 52.7692 20.2759C52.0702 19.8765 51.5293 19.2524 51.1465 18.4036C50.7637 17.5548 50.5723 16.4646 50.5723 15.1331V14.4841H53.3683Z" fill="currentColor"/>
                <path d="M37.7949 20.5756V3.1001H40.591V20.5756H37.7949ZM46.2581 20.5756V14.1846H49.0541V20.5756H46.2581ZM46.2581 14.1846C46.2581 13.186 46.1416 12.4204 45.9085 11.8878C45.6755 11.3385 45.351 10.9558 44.9349 10.7394C44.5355 10.523 44.0695 10.4148 43.5369 10.4148C42.5882 10.3982 41.8559 10.7061 41.34 11.3385C40.8407 11.971 40.591 12.8781 40.591 14.0597H39.5175C39.5175 12.7449 39.7089 11.6215 40.0917 10.6895C40.4911 9.74079 41.0487 9.02512 41.7644 8.54247C42.48 8.04317 43.3288 7.79352 44.3108 7.79352C45.2927 7.79352 46.1416 7.99324 46.8572 8.39268C47.5729 8.79212 48.1138 9.41624 48.4799 10.2651C48.8627 11.0972 49.0541 12.1874 49.0541 13.5355V14.1846H46.2581Z" fill="currentColor"/>
                <path d="M31.727 20.8751C30.8949 20.8751 30.1293 20.7503 29.4302 20.5006C28.7312 20.251 28.1321 19.9015 27.6328 19.4521C27.1335 18.9861 26.7507 18.4452 26.4844 17.8294L28.906 16.7559C29.1556 17.2219 29.5218 17.613 30.0044 17.9292C30.5037 18.2455 31.053 18.4036 31.6521 18.4036C32.3012 18.4036 32.8172 18.2954 33.2 18.079C33.5994 17.846 33.7991 17.5298 33.7991 17.1304C33.7991 16.7476 33.6493 16.4563 33.3498 16.2566C33.0502 16.0402 32.6258 15.8655 32.0765 15.7323L30.9032 15.4078C29.7215 15.1082 28.7978 14.6339 28.1321 13.9848C27.4663 13.319 27.1335 12.5618 27.1335 11.713C27.1335 10.4647 27.5329 9.4994 28.3318 8.81702C29.1473 8.13464 30.3123 7.79346 31.8269 7.79346C32.5925 7.79346 33.2915 7.90996 33.9239 8.14297C34.573 8.35933 35.1306 8.67555 35.5966 9.09164C36.0626 9.49108 36.3872 9.96541 36.5702 10.5146L34.2485 11.5632C34.0821 11.1471 33.7658 10.8309 33.2998 10.6145C32.8338 10.3815 32.3179 10.265 31.752 10.265C31.1861 10.265 30.7451 10.3898 30.4288 10.6395C30.1126 10.8725 29.9545 11.2053 29.9545 11.6381C29.9545 11.8877 30.096 12.1207 30.3789 12.3371C30.6619 12.5368 31.0696 12.7032 31.6022 12.8364L33.0751 13.1859C33.8907 13.3856 34.5564 13.7018 35.0723 14.1346C35.5883 14.5507 35.9711 15.025 36.2207 15.5576C36.4704 16.0735 36.5952 16.5978 36.5952 17.1304C36.5952 17.8793 36.3788 18.5367 35.9461 19.1026C35.53 19.6685 34.9558 20.1095 34.2235 20.4257C33.4912 20.7253 32.6591 20.8751 31.727 20.8751Z" fill="currentColor"/>
                <path d="M19.4586 20.8751C18.2103 20.8751 17.0952 20.6005 16.1132 20.0513C15.1479 19.4854 14.3907 18.7115 13.8414 17.7295C13.2922 16.7476 13.0176 15.6158 13.0176 14.3343C13.0176 13.0528 13.2839 11.921 13.8165 10.939C14.3657 9.95709 15.123 9.1915 16.0883 8.64227C17.0536 8.07639 18.1604 7.79346 19.4086 7.79346C20.6569 7.79346 21.7637 8.07639 22.729 8.64227C23.6943 9.1915 24.4432 9.95709 24.9758 10.939C25.525 11.921 25.7997 13.0528 25.7997 14.3343C25.7997 15.6158 25.5334 16.7476 25.0008 17.7295C24.4682 18.7115 23.7192 19.4854 22.7539 20.0513C21.7886 20.6005 20.6902 20.8751 19.4586 20.8751ZM19.4586 18.3037C20.1409 18.3037 20.7484 18.1373 21.281 17.8044C21.8136 17.4549 22.2297 16.9889 22.5292 16.4064C22.8288 15.8072 22.9786 15.1165 22.9786 14.3343C22.9786 13.5521 22.8205 12.8697 22.5043 12.2872C22.2047 11.688 21.7886 11.222 21.256 10.8891C20.7234 10.5396 20.1076 10.3649 19.4086 10.3649C18.7096 10.3649 18.0938 10.5313 17.5612 10.8642C17.0286 11.197 16.6125 11.663 16.313 12.2622C16.0134 12.8614 15.8636 13.5521 15.8636 14.3343C15.8636 15.1165 16.0134 15.8072 16.313 16.4064C16.6292 16.9889 17.0536 17.4549 17.5862 17.8044C18.1354 18.1373 18.7595 18.3037 19.4586 18.3037Z" fill="currentColor"/>
                <path d="M5.24265 20.9001C4.47706 20.9001 3.79468 20.7836 3.19552 20.5506C2.613 20.3176 2.10538 20.0097 1.67266 19.6269C1.23993 19.2441 0.882097 18.8281 0.59916 18.3787C0.332867 17.9293 0.133147 17.4883 0 17.0555L2.37168 16.032C2.67126 16.7143 3.05405 17.2553 3.52007 17.6547C4.00272 18.0541 4.58524 18.2539 5.26762 18.2539C5.81685 18.2539 6.33279 18.129 6.81545 17.8794C7.31475 17.6131 7.72251 17.197 8.03873 16.6311C8.35495 16.0653 8.51307 15.3163 8.51307 14.3843V3.1001H11.409V15.308C11.409 16.2067 11.2426 17.0056 10.9097 17.7046C10.5935 18.387 10.1524 18.9695 9.58656 19.4522C9.02069 19.9348 8.36328 20.301 7.61433 20.5506C6.86538 20.7836 6.07482 20.9001 5.24265 20.9001Z" fill="currentColor"/>
            </svg>
        </div>
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

const sectionIds = ["experience", "about", "testimonials", "contact"];

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
                    background: "radial-gradient(125% 125% at 50% 90%, #09090b 40%, rgba(23, 92, 211, 0.6) 100%)",
                }}
            />

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-10 flex h-18 w-full items-center justify-center md:h-20">
                <div className="mx-auto flex size-full max-w-6xl flex-1 items-center justify-between px-4 md:px-8">
                    <div className="text-primary">
                        <JoshuaLogo />
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-1 overflow-hidden pb-16 pt-24 md:pb-24 md:pt-40">

                <div className="relative mx-auto max-w-6xl px-4 md:px-8">
                    <div className="flex flex-col items-start">
                        {/* Badge/Pill */}
                        <Badge color="success" size="lg" className="mb-6">
                            <span className="relative mr-0.5 inline-flex size-2 items-center justify-center">
                                <span className="absolute inset-0 z-0 animate-ping rounded-full bg-utility-success-500 opacity-75" />
                                <span className="relative z-10 size-2 rounded-full bg-utility-success-500" />
                            </span>
                            Product Designer at Valsplat
                        </Badge>

                        {/* Heading */}
                        <h1 className="max-w-4xl text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary">
                            Helping teams create meaningful products through research-driven design
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-tertiary">
                            Experienced working in scrum product development teams across a range of sectors, including PostNL, Sunweb, BNG Bank, OVpay, NVM, Air France–KLM Cargo, Albert Heijn, and the Dutch Ministry of Health.
                        </p>

                    </div>
                </div>
            </section>

            {/* Sections */}
            <div className="relative z-1 mx-auto max-w-6xl px-4 md:px-8">

                    {/* Experience Section */}
                    <section id="experience" className="scroll-mt-20 py-16 md:py-24">
                        <div className="space-y-8">
                            {experience.map((job, index) => (
                                <div key={index} className="relative p-6 transition">
                                    {/* Company header with logo */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                                        <div className="flex items-center gap-3 sm:contents">
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
                                            <p className="text-base font-semibold text-brand-solid sm:hidden">{job.company}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="hidden text-base font-semibold text-brand-solid sm:block">{job.company}</p>
                                            <p className="text-base text-tertiary sm:mt-2">{job.description}</p>
                                        </div>
                                    </div>

                                    {/* Positions with timeline */}
                                    <div className="mt-6 sm:pl-18">
                                        {job.positions.map((position, posIndex) => (
                                            <div key={posIndex} className={`relative pl-8 ${posIndex > 0 ? "mt-8" : ""}`}>
                                                {/* Timeline line connecting positions */}
                                                {job.positions.length > 1 && posIndex < job.positions.length - 1 && (
                                                    <div className="absolute top-2.5 left-[3px] block w-0.5 bg-border-secondary" style={{ height: "calc(100% + 2rem)" }} />
                                                )}
                                                {/* Timeline dot */}
                                                <div className="absolute top-2 left-0 flex size-2 items-center justify-center">
                                                    <div className={`size-2 rounded-full ${position.period.includes("Present") ? "bg-utility-success-500" : "bg-utility-gray-400 dark:bg-utility-gray-500"}`} />
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
                                                                className="overflow-hidden rounded-lg border border-primary bg-primary"
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
                                                                    <p className="mt-1 text-base text-tertiary">{project.description}</p>
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
                    <section id="about" className="scroll-mt-20 py-16 md:py-24">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Text Content */}
                            <div className="order-2 space-y-6 text-base leading-relaxed text-tertiary lg:order-1">
                                <p className="text-lg font-medium text-primary">
                                    Hi, I'm Joshua, a Dutch Product Designer based in the Randstad, the Netherlands.
                                </p>
                                
                                <p>
                                    I enjoy tackling diverse design challenges and focus on bringing ideas to life, whether that's solving complex problems for clients or exploring DIY projects at home (I'm currently busy building my own furniture).
                                </p>
                                
                                <p>
                                    My design journey started at a Graphic Design college. During my internships, I worked on digital advertising for brands like KPN and MediaMarkt. At first, I was proud of creating these campaigns, but over time I realized that people don't necessarily enjoy being interrupted by ads while reading the news. That insight pushed me toward creating products people genuinely love to use.
                                </p>
                                
                                <p>
                                    After graduating, I went on to study Communication & Multimedia Design (BSc) in Rotterdam. During this period, I completed an internship at Air France - KLM, which also marked my first encounter with Valsplat, as they were working together at the time. Little did I know that I would end up working at Valsplat myself, now already for five years.
                                </p>
                                
                                <p>
                                    For my graduation project, I completed an internship at Ahold Delhaize, working on the Albert Heijn app. I graduated with a grade of 10 for my thesis. Shortly after, while looking for an open role, I heard through a former colleague at KLM that Valsplat was looking for a new designer. Things moved quickly from there.
                                </p>
                                
                                <p>
                                    I truly enjoy working at Valsplat and have learned a great deal along the way. I'm grateful for the opportunities I've been given. Through my work at Valsplat, I've gained extensive experience collaborating in Agile/Scrum product development teams across a wide range of sectors.
                                </p>
                                
                                <div className="space-y-4 pt-4">
                                    <p className="font-semibold text-primary">What do I enjoy the most in my work?</p>
                                    <p>
                                        I love meeting new people and working together with them, especially from different countries. Over the past few years, I have often gotten the opportunity to work with people from different backgrounds and nationalities. I discovered working with people from various backgrounds and cultures has been so much fun and was beneficial for my personal development. It has exposed me to new ideas, perspectives, and ways of life. It makes you look different from the things you are used to, therefore it also helps creativity in product development teams. Working with people from different cultures has challenged my assumptions and encouraged critical thinking, leading to personal growth and development.
                                    </p>
                                </div>
                                
                                <div className="space-y-4 pt-4">
                                    <p className="font-semibold text-primary">What I like about Product Design/UX?</p>
                                    <p>
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
                    <section id="testimonials" className="scroll-mt-20 py-16 md:py-24">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex flex-col rounded-2xl bg-secondary p-6">
                                    <p className="flex-1 text-secondary">{testimonial.content}</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <Avatar size="md" src={testimonial.avatar} alt={testimonial.name} />
                                        <div>
                                            <p className="font-semibold text-primary">{testimonial.name}</p>
                                            <p className="text-base text-tertiary">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
                        <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
                            <p className="text-base font-semibold text-primary">Let&apos;s work together</p>
                            <p className="mx-auto mt-3 max-w-lg text-base text-tertiary">
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
                <div className="mx-auto max-w-6xl px-4 text-center text-base text-tertiary md:px-8">
                    <p>© {new Date().getFullYear()} Joshua. Made with Cursor/Claude Code and Figma. Deployed via GitHub & Vercel.</p>
                </div>
            </footer>
        </div>
    );
};
