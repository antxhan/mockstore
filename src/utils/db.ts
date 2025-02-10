import { Product } from "@/lib/types";

export const db = {
  cart: {},
  likes: {
    get(): Product["id"][] {
      return JSON.parse(localStorage.getItem("likes") || "[]");
    },
    set(productIds: Product["id"][]) {
      localStorage.setItem("likes", JSON.stringify(productIds));
    },
    toggle(productId: Product["id"]) {
      const likes = this.get();
      if (likes.includes(productId)) {
        this.set(likes.filter((id: Product["id"]) => id !== productId));
      } else {
        this.set([...likes, productId]);
      }
    },
  },
};
