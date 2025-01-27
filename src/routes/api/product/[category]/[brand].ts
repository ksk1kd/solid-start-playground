import type { APIEvent } from "@solidjs/start/server";

export async function GET({ params }: APIEvent) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: params.category,
      brand: params.brand,
    },
    {
      id: 2,
      name: "Product 2",
      category: params.category,
      brand: params.brand,
    },
  ];
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
