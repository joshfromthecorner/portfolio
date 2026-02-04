"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        for (const id of sectionIds) {
            const element = document.getElementById(id);
            if (!element) continue;

            const observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    }
                },
                {
                    rootMargin: "-80px 0px -60% 0px",
                    threshold: 0,
                },
            );

            observer.observe(element);
            observers.push(observer);
        }

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    return activeSection;
}
