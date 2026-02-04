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
            <svg className="h-6 w-auto text-primary" width="97" height="24" viewBox="0 0 97 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.7875 14.7125C2.59583 14.5208 2.5 14.2833 2.5 14C2.5 13.7167 2.59583 13.4792 2.7875 13.2875C2.97917 13.0958 3.21667 13 3.5 13C3.78333 13 4.02083 13.0958 4.2125 13.2875C4.40417 13.4792 4.5 13.7167 4.5 14C4.5 14.2833 4.40417 14.5208 4.2125 14.7125C4.02083 14.9042 3.78333 15 3.5 15C3.21667 15 2.97917 14.9042 2.7875 14.7125ZM2.7875 18.7125C2.59583 18.5208 2.5 18.2833 2.5 18C2.5 17.7167 2.59583 17.4792 2.7875 17.2875C2.97917 17.0958 3.21667 17 3.5 17C3.78333 17 4.02083 17.0958 4.2125 17.2875C4.40417 17.4792 4.5 17.7167 4.5 18C4.5 18.2833 4.40417 18.5208 4.2125 18.7125C4.02083 18.9042 3.78333 19 3.5 19C3.21667 19 2.97917 18.9042 2.7875 18.7125ZM2.7875 10.7125C2.59583 10.5208 2.5 10.2833 2.5 10C2.5 9.71667 2.59583 9.47917 2.7875 9.2875C2.97917 9.09583 3.21667 9 3.5 9C3.78333 9 4.02083 9.09583 4.2125 9.2875C4.40417 9.47917 4.5 9.71667 4.5 10C4.5 10.2833 4.40417 10.5208 4.2125 10.7125C4.02083 10.9042 3.78333 11 3.5 11C3.21667 11 2.97917 10.9042 2.7875 10.7125ZM0.15 10.35C0.05 10.25 0 10.1333 0 10C0 9.86667 0.05 9.75 0.15 9.65C0.25 9.55 0.366667 9.5 0.5 9.5C0.633333 9.5 0.75 9.55 0.85 9.65C0.95 9.75 1 9.86667 1 10C1 10.1333 0.95 10.25 0.85 10.35C0.75 10.45 0.633333 10.5 0.5 10.5C0.366667 10.5 0.25 10.45 0.15 10.35ZM2.7875 6.7125C2.59583 6.52083 2.5 6.28333 2.5 6C2.5 5.71667 2.59583 5.47917 2.7875 5.2875C2.97917 5.09583 3.21667 5 3.5 5C3.78333 5 4.02083 5.09583 4.2125 5.2875C4.40417 5.47917 4.5 5.71667 4.5 6C4.5 6.28333 4.40417 6.52083 4.2125 6.7125C4.02083 6.90417 3.78333 7 3.5 7C3.21667 7 2.97917 6.90417 2.7875 6.7125ZM0.15 14.35C0.05 14.25 0 14.1333 0 14C0 13.8667 0.05 13.75 0.15 13.65C0.25 13.55 0.366667 13.5 0.5 13.5C0.633333 13.5 0.75 13.55 0.85 13.65C0.95 13.75 1 13.8667 1 14C1 14.1333 0.95 14.25 0.85 14.35C0.75 14.45 0.633333 14.5 0.5 14.5C0.366667 14.5 0.25 14.45 0.15 14.35ZM7.15 21.35C7.05 21.25 7 21.1333 7 21C7 20.8667 7.05 20.75 7.15 20.65C7.25 20.55 7.36667 20.5 7.5 20.5C7.63333 20.5 7.75 20.55 7.85 20.65C7.95 20.75 8 20.8667 8 21C8 21.1333 7.95 21.25 7.85 21.35C7.75 21.45 7.63333 21.5 7.5 21.5C7.36667 21.5 7.25 21.45 7.15 21.35ZM7.15 3.35C7.05 3.25 7 3.13333 7 3C7 2.86667 7.05 2.75 7.15 2.65C7.25 2.55 7.36667 2.5 7.5 2.5C7.63333 2.5 7.75 2.55 7.85 2.65C7.95 2.75 8 2.86667 8 3C8 3.13333 7.95 3.25 7.85 3.35C7.75 3.45 7.63333 3.5 7.5 3.5C7.36667 3.5 7.25 3.45 7.15 3.35ZM6.7875 6.7125C6.59583 6.52083 6.5 6.28333 6.5 6C6.5 5.71667 6.59583 5.47917 6.7875 5.2875C6.97917 5.09583 7.21667 5 7.5 5C7.78333 5 8.02083 5.09583 8.2125 5.2875C8.40417 5.47917 8.5 5.71667 8.5 6C8.5 6.28333 8.40417 6.52083 8.2125 6.7125C8.02083 6.90417 7.78333 7 7.5 7C7.21667 7 6.97917 6.90417 6.7875 6.7125ZM6.4375 15.0625C6.14583 14.7708 6 14.4167 6 14C6 13.5833 6.14583 13.2292 6.4375 12.9375C6.72917 12.6458 7.08333 12.5 7.5 12.5C7.91667 12.5 8.27083 12.6458 8.5625 12.9375C8.85417 13.2292 9 13.5833 9 14C9 14.4167 8.85417 14.7708 8.5625 15.0625C8.27083 15.3542 7.91667 15.5 7.5 15.5C7.08333 15.5 6.72917 15.3542 6.4375 15.0625ZM6.4375 11.0625C6.14583 10.7708 6 10.4167 6 10C6 9.58333 6.14583 9.22917 6.4375 8.9375C6.72917 8.64583 7.08333 8.5 7.5 8.5C7.91667 8.5 8.27083 8.64583 8.5625 8.9375C8.85417 9.22917 9 9.58333 9 10C9 10.4167 8.85417 10.7708 8.5625 11.0625C8.27083 11.3542 7.91667 11.5 7.5 11.5C7.08333 11.5 6.72917 11.3542 6.4375 11.0625ZM6.7875 18.7125C6.59583 18.5208 6.5 18.2833 6.5 18C6.5 17.7167 6.59583 17.4792 6.7875 17.2875C6.97917 17.0958 7.21667 17 7.5 17C7.78333 17 8.02083 17.0958 8.2125 17.2875C8.40417 17.4792 8.5 17.7167 8.5 18C8.5 18.2833 8.40417 18.5208 8.2125 18.7125C8.02083 18.9042 7.78333 19 7.5 19C7.21667 19 6.97917 18.9042 6.7875 18.7125ZM16.2625 17.95C14.7708 19.6333 12.925 20.625 10.725 20.925C10.3917 20.975 10.1042 20.8833 9.8625 20.65C9.62083 20.4167 9.5 20.1333 9.5 19.8V4.2C9.5 3.86667 9.62083 3.5875 9.8625 3.3625C10.1042 3.1375 10.3917 3.04167 10.725 3.075C12.925 3.375 14.7708 4.36667 16.2625 6.05C17.7542 7.73333 18.5 9.71667 18.5 12C18.5 14.2833 17.7542 16.2667 16.2625 17.95Z" fill="currentColor"/>
                <path d="M94.0126 20.5755L93.8877 18.2288V14.1595C93.8877 13.3107 93.7962 12.6034 93.6131 12.0375C93.4467 11.455 93.1638 11.0139 92.7643 10.7144C92.3815 10.3981 91.8656 10.24 91.2165 10.24C90.6173 10.24 90.0931 10.3649 89.6437 10.6145C89.1943 10.8642 88.8115 11.2553 88.4953 11.7879L86.0487 10.8891C86.315 10.3399 86.6645 9.83227 87.0973 9.36625C87.5466 8.8836 88.1042 8.5008 88.7699 8.21786C89.4523 7.93493 90.2678 7.79346 91.2165 7.79346C92.4314 7.79346 93.4467 8.03479 94.2622 8.51744C95.0777 8.98346 95.6769 9.65751 96.0597 10.5396C96.4591 11.4217 96.6588 12.4869 96.6588 13.7351L96.584 20.5755H94.0126ZM90.4176 20.8751C88.9197 20.8751 87.7547 20.5423 86.9225 19.8765C86.107 19.2108 85.6992 18.2704 85.6992 17.0555C85.6992 15.7573 86.1319 14.767 86.9974 14.0846C87.8795 13.4023 89.1028 13.0611 90.6673 13.0611H94.0126V15.2081H91.566C90.4509 15.2081 89.6686 15.3662 89.2193 15.6824C88.7699 15.982 88.5452 16.4147 88.5452 16.9806C88.5452 17.4632 88.7366 17.846 89.1194 18.129C89.5189 18.3953 90.0681 18.5284 90.7671 18.5284C91.3996 18.5284 91.9488 18.3869 92.4148 18.104C92.8808 17.8211 93.2386 17.4466 93.4883 16.9806C93.7546 16.5146 93.8877 15.9903 93.8877 15.4078H94.7116C94.7116 17.1054 94.3704 18.4452 93.688 19.4271C93.0056 20.3925 91.9155 20.8751 90.4176 20.8751Z" fill="currentColor"/>
                <path d="M81.7102 20.5755L81.5604 18.2787V8.09302H84.3315V20.5755H81.7102ZM73.0723 14.4841V8.09302H75.8683V14.4841H73.0723ZM75.8683 14.4841C75.8683 15.466 75.9849 16.2316 76.2179 16.7808C76.4509 17.3301 76.7671 17.7129 77.1665 17.9292C77.5826 18.1456 78.0569 18.2538 78.5895 18.2538C79.5382 18.2704 80.2705 17.9625 80.7865 17.3301C81.3024 16.6976 81.5604 15.7906 81.5604 14.6089H82.6089C82.6089 15.9237 82.4092 17.0555 82.0097 18.0041C81.6269 18.9362 81.0777 19.6518 80.362 20.1511C79.663 20.6338 78.8142 20.8751 77.8156 20.8751C76.8337 20.8751 75.9848 20.6754 75.2692 20.2759C74.5702 19.8765 74.0293 19.2524 73.6465 18.4036C73.2637 17.5548 73.0723 16.4646 73.0723 15.1331V14.4841H75.8683Z" fill="currentColor"/>
                <path d="M60.2949 20.5756V3.1001H63.091V20.5756H60.2949ZM68.7581 20.5756V14.1846H71.5541V20.5756H68.7581ZM68.7581 14.1846C68.7581 13.186 68.6416 12.4204 68.4085 11.8878C68.1755 11.3385 67.851 10.9558 67.4349 10.7394C67.0355 10.523 66.5695 10.4148 66.0369 10.4148C65.0882 10.3982 64.3559 10.7061 63.84 11.3385C63.3407 11.971 63.091 12.8781 63.091 14.0597H62.0175C62.0175 12.7449 62.2089 11.6215 62.5917 10.6895C62.9911 9.74079 63.5487 9.02512 64.2644 8.54247C64.98 8.04317 65.8288 7.79352 66.8108 7.79352C67.7927 7.79352 68.6416 7.99324 69.3572 8.39268C70.0729 8.79212 70.6138 9.41624 70.9799 10.2651C71.3627 11.0972 71.5541 12.1874 71.5541 13.5355V14.1846H68.7581Z" fill="currentColor"/>
                <path d="M54.227 20.8751C53.3949 20.8751 52.6293 20.7503 51.9302 20.5006C51.2312 20.251 50.6321 19.9015 50.1328 19.4521C49.6335 18.9861 49.2507 18.4452 48.9844 17.8294L51.406 16.7559C51.6556 17.2219 52.0218 17.613 52.5044 17.9292C53.0037 18.2455 53.553 18.4036 54.1521 18.4036C54.8012 18.4036 55.3172 18.2954 55.7 18.079C56.0994 17.846 56.2991 17.5298 56.2991 17.1304C56.2991 16.7476 56.1493 16.4563 55.8498 16.2566C55.5502 16.0402 55.1258 15.8655 54.5765 15.7323L53.4032 15.4078C52.2215 15.1082 51.2978 14.6339 50.6321 13.9848C49.9663 13.319 49.6335 12.5618 49.6335 11.713C49.6335 10.4647 50.0329 9.4994 50.8318 8.81702C51.6473 8.13464 52.8123 7.79346 54.3269 7.79346C55.0925 7.79346 55.7915 7.90996 56.4239 8.14297C57.073 8.35933 57.6306 8.67555 58.0966 9.09164C58.5626 9.49108 58.8872 9.96541 59.0702 10.5146L56.7485 11.5632C56.5821 11.1471 56.2658 10.8309 55.7998 10.6145C55.3338 10.3815 54.8179 10.265 54.252 10.265C53.6861 10.265 53.2451 10.3898 52.9288 10.6395C52.6126 10.8725 52.4545 11.2053 52.4545 11.6381C52.4545 11.8877 52.596 12.1207 52.8789 12.3371C53.1619 12.5368 53.5696 12.7032 54.1022 12.8364L55.5751 13.1859C56.3907 13.3856 57.0564 13.7018 57.5723 14.1346C58.0883 14.5507 58.4711 15.025 58.7207 15.5576C58.9704 16.0735 59.0952 16.5978 59.0952 17.1304C59.0952 17.8793 58.8788 18.5367 58.4461 19.1026C58.03 19.6685 57.4558 20.1095 56.7235 20.4257C55.9912 20.7253 55.1591 20.8751 54.227 20.8751Z" fill="currentColor"/>
                <path d="M41.9586 20.8751C40.7103 20.8751 39.5952 20.6005 38.6132 20.0513C37.6479 19.4854 36.8907 18.7115 36.3414 17.7295C35.7922 16.7476 35.5176 15.6158 35.5176 14.3343C35.5176 13.0528 35.7839 11.921 36.3165 10.939C36.8657 9.95709 37.623 9.1915 38.5883 8.64227C39.5536 8.07639 40.6604 7.79346 41.9086 7.79346C43.1569 7.79346 44.2637 8.07639 45.229 8.64227C46.1943 9.1915 46.9432 9.95709 47.4758 10.939C48.025 11.921 48.2997 13.0528 48.2997 14.3343C48.2997 15.6158 48.0334 16.7476 47.5008 17.7295C46.9682 18.7115 46.2192 19.4854 45.2539 20.0513C44.2886 20.6005 43.1902 20.8751 41.9586 20.8751ZM41.9586 18.3037C42.6409 18.3037 43.2484 18.1373 43.781 17.8044C44.3136 17.4549 44.7297 16.9889 45.0292 16.4064C45.3288 15.8072 45.4786 15.1165 45.4786 14.3343C45.4786 13.5521 45.3205 12.8697 45.0043 12.2872C44.7047 11.688 44.2886 11.222 43.756 10.8891C43.2234 10.5396 42.6076 10.3649 41.9086 10.3649C41.2096 10.3649 40.5938 10.5313 40.0612 10.8642C39.5286 11.197 39.1125 11.663 38.813 12.2622C38.5134 12.8614 38.3636 13.5521 38.3636 14.3343C38.3636 15.1165 38.5134 15.8072 38.813 16.4064C39.1292 16.9889 39.5536 17.4549 40.0862 17.8044C40.6354 18.1373 41.2595 18.3037 41.9586 18.3037Z" fill="currentColor"/>
                <path d="M27.7427 20.9001C26.9771 20.9001 26.2947 20.7836 25.6955 20.5506C25.113 20.3176 24.6054 20.0097 24.1727 19.6269C23.7399 19.2441 23.3821 18.8281 23.0992 18.3787C22.8329 17.9293 22.6331 17.4883 22.5 17.0555L24.8717 16.032C25.1713 16.7143 25.5541 17.2553 26.0201 17.6547C26.5027 18.0541 27.0852 18.2539 27.7676 18.2539C28.3168 18.2539 28.8328 18.129 29.3154 17.8794C29.8147 17.6131 30.2225 17.197 30.5387 16.6311C30.855 16.0653 31.0131 15.3163 31.0131 14.3843V3.1001H33.909V15.308C33.909 16.2067 33.7426 17.0056 33.4097 17.7046C33.0935 18.387 32.6524 18.9695 32.0866 19.4522C31.5207 19.9348 30.8633 20.301 30.1143 20.5506C29.3654 20.7836 28.5748 20.9001 27.7427 20.9001Z" fill="currentColor"/>
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
                        <h1 className="max-w-[800px] text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight text-primary">
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
                                <div key={index} className="relative transition">
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
