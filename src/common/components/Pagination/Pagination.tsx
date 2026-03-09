// Pagination.tsx
import { getPaginationPages } from '../../utils/getPagination';
import s from './Pagination.module.css';

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pagesCount: number;
  pageSize: number;
  changePageSize: (size: number) => void;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
  pagesCount,
  changePageSize,
  pageSize
}: Props) => {
  const pages = getPaginationPages(currentPage, pagesCount);

  return (
    <div className={s.container}>
      {pagesCount > 1 && (
        <div className={s.pagination}>
          {pages.map((page, idx) =>
            page === '...' ? (
              <span className={s.ellipsis} key={`ellipsis-${idx}`}>
                ...
              </span>
            ) : (
              <button
                key={page}
                className={
                  page === currentPage ? `${s.pageButton} ${s.pageButtonActive}` : s.pageButton
                }
                onClick={() => page !== currentPage && setCurrentPage(Number(page))}
                disabled={page === currentPage}
                type="button"
              >
                {page}
              </button>
            )
          )}
        </div>
      )}

      {/* Селектор показываем ВСЕГДА */}
      <label className={s.pageSizeLabel}>
        Show
        <select value={pageSize} onChange={e => changePageSize(Number(e.target.value))}>
          {[2, 4, 6, 8, 16, 32].map(size => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
        per page
      </label>
    </div>
  );
};