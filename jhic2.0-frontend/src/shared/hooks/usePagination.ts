"use client";

import { useMemo, useState } from "react";

interface UsePaginationOptions {
  itemsPerPage?: number;
  scrollToTop?: boolean;
}

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Reusable pagination hook. Slices `items`, exposes the current page slice and
 * props ready to spread into `<Pagination {...paginationProps} />`.
 *
 * - Auto-resets to page 1 when the item *content* changes (search/filter).
 * - Clamps the page if the list shrinks below the current page.
 * - Optionally smooth-scrolls to the top on page change.
 */
export function usePagination<T>(items: T[], options: UsePaginationOptions = {}) {
  const { itemsPerPage = 6, scrollToTop = true } = options;

  // Content signature: resets the page only when the items change, not on every
  // re-render (locally-computed filtered arrays get new references each render).
  const signature = useMemo(
    () =>
      items
        .map((item) => {
          const id = (item as { id?: unknown })?.id;
          return id !== undefined && id !== null ? String(id) : JSON.stringify(item);
        })
        .join("|"),
    [items]
  );

  const [prevSignature, setPrevSignature] = useState(signature);
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));

  // React-recommended "adjust state during render" pattern (no effect, lint-safe):
  // reset when content changes; clamp when out of range.
  if (prevSignature !== signature) {
    setPrevSignature(signature);
    setCurrentPage(1);
  }
  if (currentPage > pageCount) {
    setCurrentPage(pageCount);
  }

  const safePage = Math.min(currentPage, pageCount);
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const currentItems = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const paginationProps: PaginationProps = {
    pageCount,
    currentPage: safePage,
    onPageChange,
  };

  return {
    currentPage: safePage,
    setPage: onPageChange,
    pageCount,
    currentItems,
    totalItems: items.length,
    startIndex,
    endIndex,
    paginationProps,
  };
}
