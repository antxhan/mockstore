import { Product } from "@/lib/types";

export const api = {
  async request<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T | null> {
    const baseUrl = "https://fakestoreapi.com/";
    const url = new URL(`${baseUrl}${endpoint}`);
    if (params && Object.keys(params).length) {
      url.search = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, String(value)])
      ).toString();
    }
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`Request to ${url.toString()} failed with ${response.status}`);
        return null;
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        const bodyPreview = (await response.text()).slice(0, 200);
        console.error(
          `Unexpected response format from ${url.toString()}. Content-Type: ${contentType}. Body: ${bodyPreview}`
        );
        return null;
      }

      return (await response.json()) as T;
    } catch (err) {
      console.error(`Error fetching ${url.toString()}`, err);
      return null;
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
      sort?: string;
    } | null;
    limit?: number;
  }): Promise<Product[]> {
    const endpoint = "products";
    const params = { limit };
    let products = (await this.request<Product[]>(endpoint, params)) ?? [];

    if (filters) {
      products = filterProducts(products, filters);
    }
    if (filters?.sort) {
      products = sortProducts(products, filters.sort);
    }
    return products;
  },
  async product(id: Product["id"]): Promise<Product> {
    const endpoint = `products/${id}`;
    const product = await this.request<Product>(endpoint);
    if (product) return product;

    // Graceful fallback so prerendering doesn't crash if the API is unreachable.
    return {
      id,
      title: "Unavailable product",
      price: 0,
      description: "We couldn't load this product right now. Please try again later.",
      category: "unknown",
      image: "/images/placeholder.png",
      rating: { rate: 0, count: 0 },
    };
  },
  async category({
    category,
    limit = 20,
  }: {
    category: string;
    limit?: number;
  }): Promise<Product[]> {
    const endpoint = `products/category/${category}`;
    const products = await this.request<Product[]>(endpoint);
    if (!Array.isArray(products)) return [];
    return products.slice(0, limit);
  },
};

function sortProducts(products: Product[], sort: string) {
  if (sort === "relevance") {
    // return products.sort((a, b) => b.rating - a.rating);
    return products;
  } else if (sort === "price-lowest") {
    return products.sort((a, b) => a.price - b.price);
  } else if (sort === "price-highest") {
    return products.sort((a, b) => b.price - a.price);
  }
  return products;
}

function filterProducts(
  products: Product[],
  filters: {
    price?: string;
    category?: string;
    q?: string;
    sort?: string;
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
