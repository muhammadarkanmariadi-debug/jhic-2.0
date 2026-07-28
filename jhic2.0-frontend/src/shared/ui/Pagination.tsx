import React from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<ChevronRight className="w-5 h-5" />}
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      previousLabel={<ChevronLeft className="w-5 h-5" />}
      containerClassName="flex flex-wrap items-center justify-center gap-2 mt-12"
      pageLinkClassName="w-10 h-10 rounded-xl flex items-center justify-center border border-border-light bg-white text-text-main hover:bg-gray-50 font-medium transition-colors cursor-pointer select-none"
      activeLinkClassName="bg-accent text-white border-accent shadow-sm font-bold hover:bg-accent-hover hover:text-white"
      previousLinkClassName="w-10 h-10 rounded-xl flex items-center justify-center border border-border-light bg-white text-text-main hover:bg-gray-50 font-medium transition-colors cursor-pointer select-none"
      nextLinkClassName="w-10 h-10 rounded-xl flex items-center justify-center border border-border-light bg-white text-text-main hover:bg-gray-50 font-medium transition-colors cursor-pointer select-none"
      disabledLinkClassName="opacity-50 cursor-not-allowed hover:bg-white"
      breakLinkClassName="w-10 h-10 rounded-xl flex items-center justify-center font-medium text-gray-500 select-none"
      renderOnZeroPageCount={null}
    />
  );
}
