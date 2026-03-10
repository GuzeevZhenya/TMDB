// components/RatingFilter/RatingFilter.tsx
import styles from './RatingFilter.module.css';

interface RatingFilterProps {
  ratingRange: [number, number];
  onRatingChange: (min: number, max: number) => void;
}

export const RatingFilter = ({ ratingRange, onRatingChange }: RatingFilterProps) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.ratingRange}>
        <span>{ratingRange[0].toFixed(1)}</span>
        <span> - </span>
        <span>{ratingRange[1].toFixed(1)}</span>
      </div>
      <div className={styles.ratingSlider}>
        <div className={styles.sliderTrack} />
        <div
          className={styles.sliderRange}
          style={{
            left: `${(ratingRange[0] / 10) * 100}%`,
            width: `${((ratingRange[1] - ratingRange[0]) / 10) * 100}%`
          }}
        />
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={ratingRange[0]}
          onChange={(e) => {
            const minVal = Number(e.target.value);
            const maxVal = ratingRange[1];
            if (minVal <= maxVal - 0.1) {
              onRatingChange(minVal, maxVal);
            }
          }}
          className={styles.rangeInput}
          style={{ zIndex: 3 }}
        />
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={ratingRange[1]}
          onChange={(e) => {
            const minVal = ratingRange[0];
            const maxVal = Number(e.target.value);
            if (maxVal >= minVal + 0.1) {
              onRatingChange(minVal, maxVal);
            }
          }}
          className={styles.rangeInput}
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};