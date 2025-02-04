import { Product } from "@/lib/types";

export const api = {
  async request(endpoint: string, params = {}) {
    const baseUrl = "https://fakestoreapi.com/";
    const url = new URL(`${baseUrl}${endpoint}`);
    if (params) url.search = new URLSearchParams(params).toString();
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  },
  async products({
    filters = null,
    limit = 20,
  }: {
    filters?: {
      price?: string;
      category?: string;
      q?: string;
    } | null;
    limit?: number;
  }): Promise<Product[]> {
    const endpoint = "products";
    const params = { limit };
    const products = await this.request(endpoint, params);
    if (filters) {
      return filterProducts(products, filters);
    } else {
      return products;
    }
  },
};

function filterProducts(
  products: Product[],
  filters: {
    price?: string;
    category?: string;
    q?: string;
  }
) {
  const filteredProducts = [];
  for (const product of products) {
    if (filters.q) {
      const searchTerm = filters.q.toLowerCase();
      const searchRegex = new RegExp(`\\b${searchTerm}\\b`, "i");
      if (
        !searchRegex.test(product.title.toLowerCase()) &&
        !searchRegex.test(product.description.toLowerCase())
      ) {
        continue;
      }
    }
    if (filters.price) {
      const priceRange = filters.price.split(",");
      const minPrice = parseInt(priceRange[0]);
      const maxPrice = parseInt(priceRange[1]);
      if (product.price < minPrice || product.price > maxPrice) {
        continue;
      }
    }
    if (filters.category) {
      const category = filters.category.split(",");
      if (!category.includes(product.category)) {
        continue;
      }
    }
    filteredProducts.push(product);
  }
  return filteredProducts;
}
