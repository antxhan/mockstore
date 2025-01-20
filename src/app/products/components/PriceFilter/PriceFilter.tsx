"use client";
import { useRef, useState } from "react";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import styles from "./styles.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function PriceFilter() {
  const minPrice = 0;
  const maxPrice = 1000;
  const margin = 100;

  const searchParams = useSearchParams();
  const router = useRouter();

  const getUrlRange = (searchParams: URLSearchParams) => {
    // url stuff
    let [urlMin, urlMax] = searchParams.get("price")?.split(",") || [
      minPrice.toString(),
      maxPrice.toString(),
    ];

    // parse and validate urlMin and urlMax
    const parsedMin = Math.max(minPrice, parseInt(urlMin) || minPrice);
    const parsedMax = Math.min(maxPrice, parseInt(urlMax) || maxPrice);

    // ensure min does not exceed max and vice versa
    urlMin = parsedMin > parsedMax ? minPrice.toString() : parsedMin.toString();
    urlMax = parsedMax < parsedMin ? maxPrice.toString() : parsedMax.toString();

    // ensure min and max have margin between them
    if (
      parseInt(urlMin) + margin > parseInt(urlMax) &&
      parseInt(urlMax) - margin > minPrice
    ) {
      urlMin = (parseInt(urlMax) - margin).toString();
    } else if (
      parseInt(urlMax) - margin < parseInt(urlMin) &&
      parseInt(urlMin) + margin < maxPrice
    ) {
      urlMax = (parseInt(urlMin) + margin).toString();
    }

    return [urlMin, urlMax];
  };
  const [urlMin, urlMax] = getUrlRange(searchParams);

  // REFS ------------------------------------------------------------

  const minSliderRef = useRef<HTMLInputElement | null>(null);
  const maxSliderRef = useRef<HTMLInputElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);

  // FUNCTIONS -------------------------------------------------------

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === minSliderRef.current) {
      if (+e.target.value >= +urlMax - margin) {
        e.target.value = (+urlMax - margin).toString();
      }
      minInputRef.current!.value = e.target.value;
    } else if (e.target === maxSliderRef.current) {
      if (+e.target.value <= +urlMin + margin) {
        e.target.value = (+urlMin + margin).toString();
      }
      maxInputRef.current!.value = e.target.value;
    }
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target === minSliderRef.current) {
      router.replace(`?price=${minSliderRef.current.value},${urlMax}`);
    } else if (e.target === maxSliderRef.current) {
      router.replace(`?price=${urlMin},${maxSliderRef.current.value}`);
    }
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value !== "") {
      // router.replace(`?price=${urlMin},${urlMax}`);
      e.currentTarget.blur();
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(minPrice) && +e.target.value < minPrice) {
      e.target.value = minPrice.toString();
    }
    if (!isNaN(maxPrice) && +e.target.value > maxPrice) {
      e.target.value = maxPrice.toString();
    }
    if (!isNaN(+e.target.value)) {
      e.target.value = parseInt(e.target.value).toString();
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target === minInputRef.current) {
      if (+e.target.value > parseInt(urlMax) - margin) {
        e.target.value = (parseInt(urlMax) - margin).toString();
      }
      router.replace(`?price=${e.target.value},${urlMax}`);
    } else if (e.target === maxInputRef.current) {
      if (+e.target.value < parseInt(urlMin) + margin) {
        e.target.value = (parseInt(urlMin) + margin).toString();
      }
      router.replace(`?price=${urlMin},${e.target.value}`);
    }
  };

  return (
    <FilterWrapper title="Price" indicator={null}>
      <div className={styles.sliderRange}>
        <input
          ref={minSliderRef}
          type="range"
          min={minPrice}
          max={maxPrice}
          id="slider-min"
          defaultValue={urlMin}
          onChange={handleSliderChange}
          onMouseUp={handleMouseUp}
        />
        <input
          ref={maxSliderRef}
          type="range"
          min={minPrice}
          max={maxPrice}
          id="slider-max"
          defaultValue={urlMax}
          onChange={handleSliderChange}
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
            id="num-min"
            defaultValue={urlMin}
            onBlur={handleBlur}
            onKeyDown={handleKeydown}
            onInput={handleInput}
          />
        </div>
        <div>
          <span>$</span>
          <input
            ref={maxInputRef}
            type="number"
            min={minPrice}
            max={maxPrice}
            id="num-max"
            defaultValue={urlMax}
            onBlur={handleBlur}
            onKeyDown={handleKeydown}
            onInput={handleInput}
          />
        </div>
      </div>
    </FilterWrapper>
  );
}
