"use client";

import HeartFilledIcon from "@/icons/HeartFilledIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import Button from "../Button/Button";
import { useState } from "react";

export default function LikeButton({
  isLiked,
  onClick,
}: {
  isLiked: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [liked, setLiked] = useState(isLiked);
  return (
    <Button
      icon={liked ? <HeartFilledIcon /> : <HeartOutlineIcon />}
      ariaLabel={liked ? "Unlike" : "Like"}
      onClick={(e) => {
        e.preventDefault();
        setLiked(!liked);
        onClick(e);
      }}
    />
  );
}
