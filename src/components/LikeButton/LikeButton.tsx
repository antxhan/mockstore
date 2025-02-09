"use client";

import HeartFilledIcon from "@/icons/HeartFilledIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./styles.module.css";

export default function LikeButton({
  isLiked,
  productId,
  className,
}: {
  isLiked: boolean;
  productId: number;
  className?: string;
}) {
  const [liked, setLiked] = useState(isLiked);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLiked(!liked);
    console.log(productId);
  };

  return (
    <Button
      icon={liked ? <HeartFilledIcon /> : <HeartOutlineIcon />}
      hoverIcon={<HeartFilledIcon />}
      ariaLabel={liked ? "Unlike" : "Like"}
      onClick={handleClick}
      className={`${styles.likeButton} ${
        liked ? styles.liked : ""
      } ${className}`}
    />
  );
}
