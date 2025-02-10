export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity?: number;
};

export type Cart = {
  [key: Product["id"]]: number;
};

export type CartItem = {
  id: Product["id"];
  title: Product["title"];
  price: Product["price"];
  quantity: number;
  image: Product["image"];
};
