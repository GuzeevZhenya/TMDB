import type { MovieProductionProps } from '../../types/movieDetails.types';
import styles from './MovieProduction.module.css';

export const MovieProduction = ({ companies }: MovieProductionProps) => {
  if (!companies?.length) return null;

  return (
    <div className={styles.production}>
      <h3>Production</h3>
      <div className={styles.companyList}>
        {companies.slice(0, 3).map(company => (
          <span key={company.id} className={styles.company}>
            {company.name}
          </span>
        ))}
      </div>
    </div>
  );
};