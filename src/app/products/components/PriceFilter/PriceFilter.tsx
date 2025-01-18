import FilterWrapper from "../FilterWrapper/FilterWrapper";
import styles from "./styles.module.css";

export default function PriceFilter() {
  const minPrice = 0;
  const maxPrice = 1000;
  return (
    <FilterWrapper title="Price">
      <div className={styles.sliderRange}>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          defaultValue={minPrice}
          id="slider-min"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          defaultValue={maxPrice}
          id="slider-max"
        />
      </div>
      <div className={styles.sliderNumInputs}>
        <div>
          <span>$</span>
          <input
            type="number"
            min={minPrice}
            max={maxPrice}
            defaultValue={minPrice}
            id="num-min"
          />
        </div>
        <div>
          <span>$</span>
          <input
            type="number"
            min={minPrice}
            max={maxPrice}
            defaultValue={maxPrice}
            id="num-max"
          />
        </div>
      </div>
    </FilterWrapper>
  );
}
