"use client";

import { cx } from "@/utils/cx";
import type { PaginationRootProps } from "./pagination-base";
import { Pagination } from "./pagination-base";

// Shared styles for pagination indicators
const paginationIndicatorBase = {
    item: "relative cursor-pointer rounded-full bg-quaternary outline-focus-ring after:absolute focus-visible:outline-2 focus-visible:outline-offset-2",
    itemCurrent: "bg-fg-brand-primary_alt",
};

interface PaginationDotProps extends Omit<PaginationRootProps, "children"> {
    /** The size of the pagination dot. */
    size?: "md" | "lg";
    /** Whether the pagination uses brand colors. */
    isBrand?: boolean;
    /** Whether the pagination is displayed in a card. */
    framed?: boolean;
}

const dotSizes = {
    md: {
        root: "gap-3",
        rootFramed: "p-2",
        button: "h-2 w-2 after:-inset-x-1.5 after:-inset-y-2",
    },
    lg: {
        root: "gap-4",
        rootFramed: "p-3",
        button: "h-2.5 w-2.5 after:-inset-x-2 after:-inset-y-3",
    },
};

export const PaginationDot = ({ framed, className, size = "md", isBrand, ...props }: PaginationDotProps) => {
    const sizeStyles = dotSizes[size];

    return (
        <Pagination.Root
            {...props}
            className={cx("flex h-max w-max", sizeStyles.root, framed && sizeStyles.rootFramed, framed && "rounded-full bg-alpha-white/90 backdrop-blur", className)}
        >
            <Pagination.Context>
                {({ pages }) =>
                    pages.map((page, index) =>
                        page.type === "page" ? (
                            <Pagination.Item
                                {...page}
                                asChild
                                key={index}
                                className={cx(
                                    paginationIndicatorBase.item,
                                    sizeStyles.button,
                                    page.isCurrent && paginationIndicatorBase.itemCurrent,
                                    isBrand && "bg-fg-brand-secondary",
                                    isBrand && page.isCurrent && "bg-fg-white",
                                )}
                            />
                        ) : (
                            <Pagination.Ellipsis {...page} key={index} />
                        ),
                    )
                }
            </Pagination.Context>
        </Pagination.Root>
    );
};

// Export shared styles for use in pagination-line
export { paginationIndicatorBase };
