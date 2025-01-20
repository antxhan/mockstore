"use client";
import { useRef, useState } from "react";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import styles from "./styles.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function PriceFilter() {
  const minPrice = 0;
  const maxPrice = 1000;
  const margin = 100;
  const router = useRouter();
  const searchParams = useSearchParams();
  let priceRange = searchParams.get("price");
  if (priceRange) {
    const urlMin = priceRange.split("-")[0];
    if (+urlMin.trim() < minPrice) {
      priceRange = `${minPrice}-${priceRange.split("-")[1]}`;
    }
    const urlMax = priceRange.split("-")[1];
    if (+urlMax.trim() > maxPrice) {
      priceRange = `${priceRange.split("-")[0]}-${maxPrice}`;
    }
  }
  // console.log(priceRange);
  // router.replace(`?price=${priceRange}`);
  const [minValue, setMinValue] = useState<number | string>(
    priceRange ? +priceRange.split("-")[0] : minPrice
  );
  const [maxValue, setMaxValue] = useState<number | string>(
    priceRange ? +priceRange.split("-")[1] : maxPrice
  );

  const formatIndicator = (rangeStart: string, rangeEnd: string) => {
    return `$${rangeStart} - $${rangeEnd}`;
  };

  const [range, setRange] = useState<string | null>(
    priceRange
      ? formatIndicator(priceRange.split("-")[0], priceRange.split("-")[1])
      : null
  );
  const minSliderRef = useRef<HTMLInputElement | null>(null);
  const maxSliderRef = useRef<HTMLInputElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);

  const handleValues = (
    e: React.ChangeEvent<HTMLInputElement>,
    isMin: boolean
  ) => {
    const refs = isMin
      ? {
          slider: minSliderRef,
          input: minInputRef,
          oppositeValue: maxValue,
          boundary: minPrice,
        }
      : {
          slider: maxSliderRef,
          input: maxInputRef,
          oppositeValue: minValue,
          boundary: maxPrice,
        };

    if (e.target.value === "") {
      if (isMin) setMinValue("");
      else setMaxValue("");
      return;
    }

    const marginAdjustedValue = isMin
      ? Math.min(+e.target.value, +refs.oppositeValue - margin)
      : Math.max(+e.target.value, +refs.oppositeValue + margin);

    refs.slider.current!.value = marginAdjustedValue.toString();
    refs.input.current!.value = marginAdjustedValue.toString();

    if (isMin) {
      setMinValue(marginAdjustedValue);
    } else {
      setMaxValue(marginAdjustedValue);
    }

    const rangeStart = isMin ? marginAdjustedValue : minValue;
    const rangeEnd = isMin ? maxValue : marginAdjustedValue;

    if (rangeStart === minPrice && rangeEnd === maxPrice) {
      setRange(null);
    } else {
      setRange(`$${rangeStart} - $${rangeEnd}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === minSliderRef.current || e.target === minInputRef.current) {
      if (+e.target.value < minPrice) {
        setMinValue(minPrice);
        return;
      }
      handleValues(e, true);
    } else if (
      e.target === maxSliderRef.current ||
      e.target === maxInputRef.current
    ) {
      if (+e.target.value > maxPrice) {
        setMaxValue(maxPrice);
        return;
      }
      handleValues(e, false);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target === minInputRef.current) {
      if (e.target.value === "") {
        setMinValue(minPrice);
        router.replace(`?price=${minPrice}-${maxValue}`);
      } else {
        handleValues(e, true);
        router.replace(`?price=${minInputRef.current.value}-${maxValue}`);
      }
    } else if (e.target === maxInputRef.current) {
      if (e.target.value === "") {
        setMaxValue(maxPrice);
        router.replace(`?price=${minValue}-${maxPrice}`);
      } else {
        handleValues(e, false);
        router.replace(`?price=${minValue}-${maxInputRef.current.value}`);
      }
    }
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target === minSliderRef.current) {
      router.replace(`?price=${minSliderRef.current.value}-${maxValue}`);
    } else if (e.target === maxSliderRef.current) {
      router.replace(`?price=${minValue}-${maxSliderRef.current.value}`);
    }
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      router.replace(`?price=${minValue}-${maxValue}`);
      e.currentTarget.blur();
    }
  };
  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === minInputRef.current) {
      if (e.target.value === "") {
        setMinValue(minPrice);
        // router.replace(`?price=${minPrice}-${maxValue}`);
      } else {
        // handleValues(e, true);
        // router.replace(`?price=${minInputRef.current.value}-${maxValue}`);
      }
    } else if (e.target === maxInputRef.current) {
      if (e.target.value === "") {
        setMaxValue(maxPrice);
        // router.replace(`?price=${minValue}-${maxPrice}`);
      } else {
        // handleValues(e, false);
        // router.replace(`?price=${minValue}-${maxInputRef.current.value}`);
      }
    }
  };
  return (
    <FilterWrapper title="Price" indicator={range}>
      <div className={styles.sliderRange}>
        <input
          ref={minSliderRef}
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          id="slider-min"
          onChange={handleChange}
          onMouseUp={handleMouseUp}
        />
        <input
          ref={maxSliderRef}
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          id="slider-max"
          onChange={handleChange}
          onMouseUp={handleMouseUp}
        />
      </div>
      <div className={styles.sliderNumInputs}>
        <div>
          <span>$</span>
          <input
            ref={minInputRef}
            type="number"
            min={minPrice}
            max={maxPrice}
            value={minValue}
            onChange={handleNumChange}
            id="num-min"
            onBlur={handleBlur}
            onKeyDown={handleKeydown}
          />
        </div>
        <div>
          <span>$</span>
          <input
            ref={maxInputRef}
            type="number"
            min={minPrice}
            max={maxPrice}
            value={maxValue}
            onChange={handleNumChange}
            id="num-max"
            onBlur={handleBlur}
            onKeyDown={handleKeydown}
          />
        </div>
      </div>
    </FilterWrapper>
  );
}
