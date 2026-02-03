import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const figtree = Figtree({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-figtree",
});

export const metadata: Metadata = {
    title: "Joshua - Product Designer | Research-Driven Design",
    description: "Product Designer helping teams create meaningful products through research-driven design. Experienced in scrum product development across PostNL, Sunweb, BNG Bank, OVpay, NVM, Air France–KLM Cargo, Albert Heijn, and Dutch Ministry of Health.",
    keywords: ["Product Designer", "UX Designer", "UI Designer", "Design Systems", "User Research", "Figma", "Design Thinking"],
    authors: [{ name: "Joshua" }],
    openGraph: {
        title: "Joshua - Product Designer",
        description: "Product Designer helping teams create meaningful products through research-driven design",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Joshua - Product Designer",
        description: "Product Designer helping teams create meaningful products through research-driven design",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: "#1570EF",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(figtree.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
