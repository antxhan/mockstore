"use client";

import HeartFilledIcon from "@/icons/HeartFilledIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { db } from "@/utils/db";

export default function LikeButton({
  productId,
  className,
}: {
  productId: number;
  className?: string;
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(db.likes.get().includes(productId));
  }, [setLiked, productId]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLiked(!liked);
    db.likes.toggle(productId);
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
