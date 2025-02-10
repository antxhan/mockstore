"use client";

import { Product } from "@/lib/types";

export const db = {
  cart: {
    get() {
      if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("cart") || "{}");
      } else {
        return [];
      }
    },
  },
  likes: {
    get(): Product["id"][] {
      if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("likes") || "[]");
      } else {
        return [];
      }
    },
    set(productIds: Product["id"][]) {
      if (typeof window !== "undefined") {
        localStorage.setItem("likes", JSON.stringify(productIds));
      }
    },
    toggle(productId: Product["id"]) {
      if (typeof window !== "undefined") {
        const likes = this.get();
        if (likes.includes(productId)) {
          this.set(likes.filter((id: Product["id"]) => id !== productId));
        } else {
          this.set([...likes, productId]);
        }
      }
    },
  },
};
