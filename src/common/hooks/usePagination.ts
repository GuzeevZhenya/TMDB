import { useState } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  initialPageSize?: number;
}

export const usePagination = ({ 
  initialPage = 1, 
  initialPageSize = 8 
}: UsePaginationProps = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    resetPage
  };
};