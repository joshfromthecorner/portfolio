"use client";

import { Briefcase02, Mail01, MessageChatCircle, User01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";

const navItems = [
    { id: "experience", label: "Work", icon: Briefcase02 },
    { id: "about", label: "About", icon: User01 },
    { id: "testimonials", label: "Testimonials", icon: MessageChatCircle },
    { id: "contact", label: "Contact", icon: Mail01 },
];

interface FloatingNavProps {
    activeSection: string;
}

export const FloatingNav = ({ activeSection }: FloatingNavProps) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className={cx(
                "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
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
                            "flex h-max cursor-pointer items-center justify-center gap-2 rounded-md whitespace-nowrap transition duration-100 ease-linear",
                            "text-md font-semibold py-2.5 px-3",
                            "text-quaternary",
                            isActive && "bg-primary_alt dark:bg-tertiary text-utility-gray-900 dark:text-white shadow-sm",
                            !isActive && "hover:bg-primary_alt hover:text-secondary hover:shadow-sm",
                        )}
                    >
                        <item.icon className="size-5" />
                        <span className="hidden sm:inline">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
};
