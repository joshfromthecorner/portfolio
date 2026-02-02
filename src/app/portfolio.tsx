"use client";

import { useEffect, useState } from "react";
import type { Key } from "react-aria-components";
import { ArrowRight, ArrowUpRight, Briefcase02, CalendarDate, Code02, Mail01, Moon01, PlayCircle, Star01, Sun, User01 } from "@untitledui/icons";
import { useTheme } from "next-themes";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { NativeSelect } from "@/components/base/select/select-native";
import { Tabs } from "@/components/application/tabs/tabs";
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
    { name: "React / Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "AWS / Cloud", level: "Intermediate" },
];

const experience = [
    {
        role: "Senior Frontend Engineer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        description: "Leading frontend architecture and mentoring a team of 5 developers.",
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
        role: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        description: "Built and shipped 3 major products from concept to production.",
        projects: [
            {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with real-time inventory management.",
                tags: ["Next.js", "Stripe", "PostgreSQL"],
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
            },
            {
                title: "Analytics Dashboard",
                description: "Real-time analytics dashboard processing 1M+ events daily.",
                tags: ["React", "D3.js", "WebSockets"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            },
        ],
    },
    {
        role: "Junior Developer",
        company: "Digital Agency",
        period: "2018 - 2020",
        description: "Developed responsive websites and web applications for clients.",
        projects: [
            {
                title: "Client Portals",
                description: "Built custom client portals for 20+ enterprise clients.",
                tags: ["Vue.js", "Node.js", "MongoDB"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            },
        ],
    },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO at TechStartup",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Product Manager at InnovateCo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        content: "Working with John was a pleasure. He understood our requirements perfectly and delivered a product that exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Founder at DesignStudio",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        content: "John's technical expertise combined with his design sensibility made him the perfect choice for our project. Highly recommended!",
        rating: 5,
    },
];

const tabItems = [
    { id: "experience", label: "Work" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
];

const JoshuaLogo = () => {
    return (
        <svg width="128" height="40" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_228_95)">
                <path d="M18 3C18 5.36379 17.5344 7.70444 16.6298 9.8883C15.7252 12.0722 14.3994 14.0565 12.7279 15.7279C11.0565 17.3994 9.07216 18.7252 6.8883 19.6298C4.70444 20.5344 2.36379 21 0 21L1.36651e-06 12.6124C1.26232 12.6124 2.51228 12.3638 3.67852 11.8807C4.84475 11.3977 5.90442 10.6896 6.79701 9.79701C7.68961 8.90442 8.39766 7.84475 8.88073 6.67852C9.3638 5.51228 9.61243 4.26232 9.61243 3H18Z" fill="#1570EF"/>
                <path d="M15 21C15 16.2261 16.8964 11.6477 20.2721 8.27208C23.6477 4.89642 28.2261 3 33 3V11.3876C30.4506 11.3876 28.0057 12.4003 26.203 14.203C24.4003 16.0057 23.3876 18.4506 23.3876 21L15 21Z" fill="#1570EF"/>
            </g>
            <path d="M108.513 20.5755L108.388 18.2288V14.1595C108.388 13.3107 108.296 12.6034 108.113 12.0375C107.947 11.455 107.664 11.0139 107.264 10.7144C106.882 10.3981 106.366 10.24 105.716 10.24C105.117 10.24 104.593 10.3649 104.144 10.6145C103.694 10.8642 103.312 11.2553 102.995 11.7879L100.549 10.8891C100.815 10.3399 101.165 9.83227 101.597 9.36625C102.047 8.8836 102.604 8.5008 103.27 8.21786C103.952 7.93493 104.768 7.79346 105.716 7.79346C106.931 7.79346 107.947 8.03479 108.762 8.51744C109.578 8.98346 110.177 9.65751 110.56 10.5396C110.959 11.4217 111.159 12.4869 111.159 13.7351L111.084 20.5755H108.513ZM104.918 20.8751C103.42 20.8751 102.255 20.5423 101.423 19.8765C100.607 19.2108 100.199 18.2704 100.199 17.0555C100.199 15.7573 100.632 14.767 101.497 14.0846C102.379 13.4023 103.603 13.0611 105.167 13.0611H108.513V15.2081H106.066C104.951 15.2081 104.169 15.3662 103.719 15.6824C103.27 15.982 103.045 16.4147 103.045 16.9806C103.045 17.4632 103.237 17.846 103.619 18.129C104.019 18.3953 104.568 18.5284 105.267 18.5284C105.9 18.5284 106.449 18.3869 106.915 18.104C107.381 17.8211 107.739 17.4466 107.988 16.9806C108.255 16.5146 108.388 15.9903 108.388 15.4078H109.212C109.212 17.1054 108.87 18.4452 108.188 19.4271C107.506 20.3925 106.415 20.8751 104.918 20.8751Z" fill="currentColor"/>
            <path d="M96.2102 20.5755L96.0604 18.2787V8.09302H98.8315V20.5755H96.2102ZM87.5723 14.4841V8.09302H90.3683V14.4841H87.5723ZM90.3683 14.4841C90.3683 15.466 90.4849 16.2316 90.7179 16.7808C90.9509 17.3301 91.2671 17.7129 91.6665 17.9292C92.0826 18.1456 92.5569 18.2538 93.0895 18.2538C94.0382 18.2704 94.7705 17.9625 95.2865 17.3301C95.8024 16.6976 96.0604 15.7906 96.0604 14.6089H97.1089C97.1089 15.9237 96.9092 17.0555 96.5097 18.0041C96.1269 18.9362 95.5777 19.6518 94.8621 20.1511C94.163 20.6338 93.3142 20.8751 92.3156 20.8751C91.3337 20.8751 90.4848 20.6754 89.7692 20.2759C89.0702 19.8765 88.5293 19.2524 88.1465 18.4036C87.7637 17.5548 87.5723 16.4646 87.5723 15.1331V14.4841H90.3683Z" fill="currentColor"/>
            <path d="M74.7949 20.5756V3.1001H77.591V20.5756H74.7949ZM83.2581 20.5756V14.1846H86.0541V20.5756H83.2581ZM83.2581 14.1846C83.2581 13.186 83.1416 12.4204 82.9085 11.8878C82.6755 11.3385 82.351 10.9558 81.9349 10.7394C81.5355 10.523 81.0695 10.4148 80.5369 10.4148C79.5882 10.3982 78.8559 10.7061 78.34 11.3385C77.8407 11.971 77.591 12.8781 77.591 14.0597H76.5175C76.5175 12.7449 76.7089 11.6215 77.0917 10.6895C77.4911 9.74079 78.0487 9.02513 78.7644 8.54247C79.48 8.04317 80.3288 7.79352 81.3108 7.79352C82.2927 7.79352 83.1416 7.99324 83.8572 8.39268C84.5729 8.79212 85.1138 9.41624 85.4799 10.2651C85.8627 11.0972 86.0541 12.1874 86.0541 13.5355V14.1846H83.2581Z" fill="currentColor"/>
            <path d="M68.727 20.8751C67.8949 20.8751 67.1293 20.7503 66.4302 20.5006C65.7312 20.251 65.1321 19.9015 64.6328 19.4521C64.1335 18.9861 63.7507 18.4452 63.4844 17.8294L65.906 16.7559C66.1556 17.2219 66.5218 17.613 67.0044 17.9292C67.5037 18.2455 68.053 18.4036 68.6521 18.4036C69.3012 18.4036 69.8172 18.2954 70.2 18.079C70.5994 17.846 70.7991 17.5298 70.7991 17.1304C70.7991 16.7476 70.6493 16.4563 70.3498 16.2566C70.0502 16.0402 69.6258 15.8655 69.0765 15.7323L67.9032 15.4078C66.7215 15.1082 65.7978 14.6339 65.1321 13.9848C64.4663 13.319 64.1335 12.5618 64.1335 11.713C64.1335 10.4647 64.5329 9.4994 65.3318 8.81702C66.1473 8.13464 67.3123 7.79346 68.8269 7.79346C69.5925 7.79346 70.2915 7.90996 70.9239 8.14297C71.573 8.35933 72.1306 8.67555 72.5966 9.09164C73.0626 9.49108 73.3872 9.96541 73.5702 10.5146L71.2485 11.5632C71.0821 11.1471 70.7658 10.8309 70.2998 10.6145C69.8338 10.3815 69.3179 10.265 68.752 10.265C68.1861 10.265 67.7451 10.3898 67.4288 10.6395C67.1126 10.8725 66.9545 11.2053 66.9545 11.6381C66.9545 11.8877 67.096 12.1207 67.3789 12.3371C67.6619 12.5368 68.0696 12.7032 68.6022 12.8364L70.0751 13.1859C70.8907 13.3856 71.5564 13.7018 72.0723 14.1346C72.5883 14.5507 72.9711 15.025 73.2207 15.5576C73.4704 16.0735 73.5952 16.5978 73.5952 17.1304C73.5952 17.8793 73.3788 18.5367 72.9461 19.1026C72.53 19.6685 71.9558 20.1095 71.2235 20.4257C70.4912 20.7253 69.6591 20.8751 68.727 20.8751Z" fill="currentColor"/>
            <path d="M56.4586 20.8751C55.2103 20.8751 54.0952 20.6005 53.1132 20.0513C52.1479 19.4854 51.3907 18.7115 50.8414 17.7295C50.2922 16.7476 50.0176 15.6158 50.0176 14.3343C50.0176 13.0528 50.2839 11.921 50.8165 10.939C51.3657 9.95709 52.123 9.1915 53.0883 8.64227C54.0536 8.07639 55.1604 7.79346 56.4086 7.79346C57.6569 7.79346 58.7637 8.07639 59.729 8.64227C60.6943 9.1915 61.4432 9.95709 61.9758 10.939C62.525 11.921 62.7997 13.0528 62.7997 14.3343C62.7997 15.6158 62.5334 16.7476 62.0008 17.7295C61.4682 18.7115 60.7192 19.4854 59.7539 20.0513C58.7886 20.6005 57.6902 20.8751 56.4586 20.8751ZM56.4586 18.3037C57.1409 18.3037 57.7484 18.1373 58.281 17.8044C58.8136 17.4549 59.2297 16.9889 59.5292 16.4064C59.8288 15.8072 59.9786 15.1165 59.9786 14.3343C59.9786 13.5521 59.8205 12.8697 59.5043 12.2872C59.2047 11.688 58.7886 11.222 58.256 10.8891C57.7234 10.5396 57.1076 10.3649 56.4086 10.3649C55.7096 10.3649 55.0938 10.5313 54.5612 10.8642C54.0286 11.197 53.6125 11.663 53.313 12.2622C53.0134 12.8614 52.8636 13.5521 52.8636 14.3343C52.8636 15.1165 53.0134 15.8072 53.313 16.4064C53.6292 16.9889 54.0536 17.4549 54.5862 17.8044C55.1354 18.1373 55.7595 18.3037 56.4586 18.3037Z" fill="currentColor"/>
            <path d="M42.2427 20.9001C41.4771 20.9001 40.7947 20.7836 40.1955 20.5506C39.613 20.3176 39.1054 20.0097 38.6727 19.6269C38.2399 19.2441 37.8821 18.8281 37.5992 18.3787C37.3329 17.9293 37.1331 17.4883 37 17.0555L39.3717 16.032C39.6713 16.7143 40.0541 17.2553 40.5201 17.6547C41.0027 18.0541 41.5852 18.2539 42.2676 18.2539C42.8168 18.2539 43.3328 18.129 43.8154 17.8794C44.3147 17.6131 44.7225 17.197 45.0387 16.6311C45.355 16.0653 45.5131 15.3163 45.5131 14.3843V3.1001H48.409V15.308C48.409 16.2067 48.2426 17.0056 47.9097 17.7046C47.5935 18.387 47.1524 18.9695 46.5866 19.4522C46.0207 19.9348 45.3633 20.301 44.6143 20.5506C43.8654 20.7836 43.0748 20.9001 42.2427 20.9001Z" fill="currentColor"/>
            <defs>
                <filter id="filter0_i_228_95" x="0" y="3" width="33" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.897029 0 0 0 0 0.897029 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_228_95"/>
                </filter>
            </defs>
        </svg>
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

export const PortfolioPage = () => {
    const [selectedTab, setSelectedTab] = useState<Key>("experience");

    return (
        <div className="min-h-screen bg-primary">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-10 flex h-18 w-full items-center justify-center bg-transparent md:h-20">
                <div className="mx-auto flex size-full max-w-6xl flex-1 items-center justify-between px-4 md:px-8">
                    <div className="text-primary">
                        <JoshuaLogo />
                    </div>
                    <ThemeToggle />
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden pb-16 pt-8 md:pb-40 md:pt-40">
                {/* Dashed Top Fade Grid - Light Mode */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 dark:hidden"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        maskImage: `
                            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                        `,
                        WebkitMaskImage: `
                            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                        `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />
                {/* Dashed Top Fade Grid - Dark Mode */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #3f3f46 1px, transparent 1px),
                            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        maskImage: `
                            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                        `,
                        WebkitMaskImage: `
                            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                        `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-4 md:px-8">
                    <div className="flex flex-col items-start">
                        {/* Badge/Pill */}
                        <div
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary bg-primary py-1 pl-1.5 pr-3 text-base"
                        >
                            <Badge color="brand" size="sm">
                                Open for work
                            </Badge>
                            <span className="text-base text-secondary">Current role: Product Designer at Valsplat</span>
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-4xl text-[48px] font-semibold leading-tight tracking-tight text-primary">
                            Helping teams create meaningful products through research-driven design
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-tertiary">
                            Experienced working in scrum product development teams across a range of sectors, including PostNL, Sunweb, BNG Bank, OVpay, NVM, Air France–KLM Cargo, Albert Heijn, and the Dutch Ministry of Health. I work in a research-driven way, using data and qualitative insights to shape solutions, which I then validate with users to build products they truly want to use.
                        </p>

                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <div className="mx-auto max-w-6xl px-4 md:px-8">
                <NativeSelect
                    aria-label="Tabs"
                    value={selectedTab as string}
                    onChange={(event) => setSelectedTab(event.target.value)}
                    options={tabItems.map((tab) => ({ label: tab.label, value: tab.id }))}
                    className="w-full md:hidden"
                />
                <Tabs selectedKey={selectedTab} onSelectionChange={setSelectedTab} className="max-md:hidden">
                    <Tabs.List type="button-border" size="md" fullWidth items={tabItems}>
                        {(tab) => <Tabs.Item {...tab} />}
                    </Tabs.List>

                    {/* About Tab */}
                    <Tabs.Panel id="about" className="py-16 md:py-24">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {skills.map((skill) => (
                                <div key={skill.name} className="flex items-center justify-between rounded-xl bg-secondary p-4">
                                    <span className="font-medium text-primary">{skill.name}</span>
                                    <Badge color={skill.level === "Expert" ? "brand" : skill.level === "Advanced" ? "success" : "gray"} size="sm">
                                        {skill.level}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </Tabs.Panel>

                    {/* Projects Tab */}
                    <Tabs.Panel id="projects" className="py-16 md:py-24">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <a key={project.title} href={project.link} className="group overflow-hidden rounded-2xl bg-secondary transition">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="size-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-primary">{project.title}</h3>
                                            <ArrowUpRight className="size-5 text-tertiary transition group-hover:text-brand-solid" />
                                        </div>
                                        <p className="mt-2 text-base text-tertiary">{project.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} color="gray" size="sm">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Tabs.Panel>

                    {/* Experience Tab */}
                    <Tabs.Panel id="experience" className="py-16 md:py-24">
                        <div className="space-y-8">
                            {experience.map((job, index) => (
                                <div key={index} className="relative rounded-xl bg-secondary p-6 transition">
                                    <div className="flex gap-6">
                                        <div className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-brand-secondary sm:flex">
                                            <Briefcase02 className="size-6 text-brand-solid" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-start justify-between gap-2">
                                                <div>
                                                    <h3 className="font-semibold text-primary">{job.role}</h3>
                                                    <p className="text-base text-brand-solid">{job.company}</p>
                                                </div>
                                                <Badge color="gray" size="sm">
                                                    {job.period}
                                                </Badge>
                                            </div>
                                            <p className="mt-3 text-base text-tertiary">{job.description}</p>
                                        </div>
                                    </div>
                                    {/* Project Cards */}
                                    {job.projects && job.projects.length > 0 && (
                                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                            {job.projects.map((project, projectIndex) => (
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
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {project.tags.map((tag) => (
                                                                <Badge key={tag} color="gray" size="sm">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Tabs.Panel>

                    {/* Testimonials Tab */}
                    <Tabs.Panel id="testimonials" className="py-16 md:py-24">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex flex-col rounded-2xl bg-secondary p-6">
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star01 key={i} className="size-5 fill-warning-solid text-warning-solid" />
                                        ))}
                                    </div>
                                    <p className="mt-4 flex-1 text-secondary">{testimonial.content}</p>
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
                    </Tabs.Panel>

                    {/* Contact Tab */}
                    <Tabs.Panel id="contact" className="py-16 md:py-24">
                        <div className="rounded-2xl bg-secondary p-8 text-center md:p-12">
                            <p className="text-base font-semibold text-primary">Let&apos;s work together</p>
                            <p className="mx-auto mt-3 max-w-lg text-base text-tertiary">
                                I&apos;m currently available for freelance work and full-time opportunities. If you have a project in mind, let&apos;s
                                talk!
                            </p>
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                                <Button color="secondary" size="xl" iconLeading={LinkedIn} href="https://linkedin.com" target="_blank">
                                    Chat on LinkedIn
                                </Button>
                                <Button color="primary" size="xl" iconLeading={CalendarDate}>
                                    Schedule a call
                                </Button>
                                <img
                                    src="/joshua.png"
                                    alt=""
                                    className="size-12 rounded-full bg-secondary object-cover"
                                />
                            </div>
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full bg-primary text-tertiary transition hover:bg-secondary hover:text-primary"
                                >
                                    <GitHub className="size-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full bg-primary text-tertiary transition hover:bg-secondary hover:text-primary"
                                >
                                    <LinkedIn className="size-5" />
                                </a>
                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full bg-primary text-tertiary transition hover:bg-secondary hover:text-primary"
                                >
                                    <XIcon className="size-5" />
                                </a>
                            </div>
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>

            {/* Footer */}
            <footer className="pt-20 pb-8">
                <div className="mx-auto max-w-6xl px-4 text-center text-base text-tertiary md:px-8">
                    <p>© Made by Joshua using Cursor/Claude Code and Figma for coding and design, deployed to Github Repo connected to Vercel for hosting</p>
                </div>
            </footer>
        </div>
    );
};
