"use client";

import HeartFilledIcon from "@/icons/HeartFilledIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import Button from "../Button/Button";
import { useState } from "react";

export default function LikeButton({
  isLiked,
  productId,
}: {
  isLiked: boolean;
  productId: number;
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
      ariaLabel={liked ? "Unlike" : "Like"}
      onClick={handleClick}
    />
  );
}
