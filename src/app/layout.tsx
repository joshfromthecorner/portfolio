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
    title: "Joshua - Product Designer",
    description: "Product Designer helping teams create meaningful products through research-driven design",
    icons: {
        icon: [],
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
