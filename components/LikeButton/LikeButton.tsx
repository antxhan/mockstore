"use client";

import HeartFilledIcon from "@/icons/HeartFilledIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import Button from "../Button/Button";
import styles from "./styles.module.css";
import { db } from "@/utils/db";
import { useDBContext } from "@/contexts/db";

export default function LikeButton({
  productId,
  className,
}: {
  productId: number;
  className?: string;
}) {
  const { likes, setLikes } = useDBContext();
  const liked = likes.includes(productId);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    db.likes.toggle(productId);
    setLikes(db.likes.get());
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
