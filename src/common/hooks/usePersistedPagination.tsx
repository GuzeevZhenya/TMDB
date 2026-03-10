// common/hooks/usePersistedPagination.ts
import { useState, useEffect } from 'react';

interface UsePersistedPaginationProps {
  storageKey: string; // уникальный ключ для localStorage
  initialPage?: number;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  totalPages?: number; // опционально, для валидации
}

export const usePersistedPagination = ({
  storageKey,
  initialPage = 1,
  initialPageSize = 8,
  pageSizeOptions = [2, 4, 6, 8, 16, 32],
  totalPages = 1
}: UsePersistedPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(() => {
    const saved = localStorage.getItem(`${storageKey}_pageSize`);
    return saved ? Number(saved) : initialPageSize;
  });

  // Сохраняем pageSize при изменении
  useEffect(() => {
    localStorage.setItem(`${storageKey}_pageSize`, pageSize.toString());
  }, [storageKey, pageSize]);

  // Валидация текущей страницы
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const changePageSize = (size: number) => {
    setCurrentPage(1);
    setPageSize(size);
  };

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    changePageSize,
    resetPage,
    pageSizeOptions
  };
};