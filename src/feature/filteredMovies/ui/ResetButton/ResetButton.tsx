// components/ResetButton/ResetButton.tsx
import styles from './ResetButton.module.css';

interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton = ({ onReset }: ResetButtonProps) => {
  return (
    <button className={styles.resetButton} onClick={onReset}>
      Reset filters
    </button>
  );
};