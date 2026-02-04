"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase02, Home01, Mail01, MessageChatCircle, User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const navItems = [
    { id: "hero", label: "Home", icon: Home01 },
    { id: "experience", label: "Work", icon: Briefcase02 },
    { id: "about", label: "About", icon: User01 },
    { id: "testimonials", label: "Testimonials", icon: MessageChatCircle },
    { id: "contact", label: "Contact", icon: Mail01 },
];

interface FloatingNavProps {
    activeSection: string;
}

export const FloatingNav = ({ activeSection }: FloatingNavProps) => {
    const navRef = useRef<HTMLElement>(null);
    const [isSide, setIsSide] = useState(false);

    useEffect(() => {
        const checkFit = () => {
            // The side position: left = 50% + 25rem + 5rem = 50% + 480px
            // Nav needs to fit within viewport width
            const navWidth = navRef.current?.offsetWidth ?? 60;
            const sideLeft = window.innerWidth / 2 + 480;
            const fits = sideLeft + navWidth + 24 <= window.innerWidth; // 24px right margin
            setIsSide(fits);
        };

        checkFit();
        window.addEventListener("resize", checkFit);
        return () => window.removeEventListener("resize", checkFit);
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            ref={navRef}
            className={cx(
                "fixed z-50",
                isSide
                    ? "left-[calc(50%+25rem+5rem)] top-1/2 -translate-y-1/2 flex-col"
                    : "bottom-6 left-1/2 -translate-x-1/2 flex-row",
                "flex gap-1 rounded-xl bg-secondary_alt p-1.5 ring-1 ring-secondary ring-inset",
                "shadow-lg backdrop-blur-sm",
            )}
        >
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={cx(
                            "flex h-max cursor-pointer items-center justify-start gap-2 rounded-md whitespace-nowrap transition duration-100 ease-linear",
                            "text-md font-semibold py-2.5 px-3",
                            "text-quaternary",
                            isActive && "bg-primary_alt dark:bg-tertiary text-utility-gray-900 dark:text-white shadow-sm",
                            !isActive && "hover:bg-primary_alt hover:text-secondary hover:shadow-sm",
                        )}
                    >
                        <item.icon className="size-5" />
                        {isSide && <span>{item.label}</span>}
                        {!isSide && <span className="hidden sm:inline">{item.label}</span>}
                    </button>
                );
            })}
        </nav>
    );
};
