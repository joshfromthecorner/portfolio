"use client";

import { cx } from "@/utils/cx";
import type { PaginationRootProps } from "./pagination-base";
import { Pagination } from "./pagination-base";
import { paginationIndicatorBase } from "./pagination-dot";

interface PaginationLineProps extends Omit<PaginationRootProps, "children"> {
    /** The size of the pagination line. */
    size?: "md" | "lg";
    /** Whether the pagination is displayed in a card. */
    framed?: boolean;
}

const lineSizes = {
    md: {
        root: "gap-2",
        rootFramed: "p-2",
        button: "h-1.5 w-full after:-inset-x-1.5 after:-inset-y-2",
    },
    lg: {
        root: "gap-3",
        rootFramed: "p-3",
        button: "h-2 w-full after:-inset-x-2 after:-inset-y-3",
    },
};

export const PaginationLine = ({ framed, className, size = "md", ...props }: PaginationLineProps) => {
    const sizeStyles = lineSizes[size];

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
                                className={cx(paginationIndicatorBase.item, sizeStyles.button, page.isCurrent && paginationIndicatorBase.itemCurrent)}
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
