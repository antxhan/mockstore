"use client";

import { Cart, Product } from "@/lib/types";

export const db = {
  cart: {
    get() {
      return JSON.parse(localStorage.getItem("cart") || "{}");
    },
    set(cart: Cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    add(id: Product["id"], quantity: number) {
      const cart = this.get();
      if (cart[id]) {
        cart[id] += quantity;
      } else {
        cart[id] = quantity;
      }
      this.set(cart);
    },
    decrement(id: Product["id"]) {
      const cart = this.get();
      if (cart[id]) {
        cart[id]--;
        if (cart[id] === 0) {
          delete cart[id];
        }
        this.set(cart);
      }
    },
    delete(id: Product["id"]) {
      const cart = this.get();
      delete cart[id];
      this.set(cart);
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
