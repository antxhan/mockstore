import { Product } from "@/lib/types";

export const api = {
  async request(endpoint: string, params = {}) {
    console.log("Fetching from Fake Store API");
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
  async products(limit = 20): Promise<Product[]> {
    const endpoint = "products";
    const params = { limit };
    return await this.request(endpoint, params);
  },
};
