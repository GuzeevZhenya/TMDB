// common/hooks/usePagination.ts
import { useState, useEffect } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  initialPageSize?: number;
  resetOnPageSizeChange?: boolean; // новый параметр
  onPageSizeChange?: (size: number) => void; // колбэк
}

export const usePagination = ({ 
  initialPage = 1, 
  initialPageSize = 8,
  resetOnPageSizeChange = true, // по умолчанию сбрасываем
  onPageSizeChange
}: UsePaginationProps = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  // Функция для изменения размера страницы с автоматическим сбросом
  const changePageSize = (newSize: number) => {
    setPageSize(newSize);
    if (resetOnPageSizeChange) {
      setCurrentPage(1); // сбрасываем на первую страницу
    }
    onPageSizeChange?.(newSize);
  };

  const resetPage = () => setCurrentPage(1);

  // Валидация страницы (если нужно)
  const validatePage = (totalPages: number) => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    changePageSize, // новая функция
    resetPage,
    validatePage
  };
};