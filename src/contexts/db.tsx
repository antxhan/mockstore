"use client";

import { Product } from "@/lib/types";
import { db } from "@/utils/db";
import React, { createContext, useContext, useEffect, useState } from "react";

type Cart = {
  [key: Product["id"]]: number;
};

type DBContext = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  likes: Product["id"][];
  setLikes: React.Dispatch<React.SetStateAction<Product["id"][]>>;
};

export const DBContext = createContext<DBContext | null>(null);

export default function DBContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Cart>({});
  const [likes, setLikes] = useState<Product["id"][]>([]);

  useEffect(() => {
    setCart(db.cart.get());
    setLikes(db.likes.get());
  }, []);

  return (
    <DBContext.Provider value={{ cart, setCart, likes, setLikes }}>
      {children}
    </DBContext.Provider>
  );
}

export function useDBContext() {
  const context = useContext(DBContext);
  if (!context) {
    throw new Error("useDBContext must be used within a DBContextProvider");
  }
  return context;
}
