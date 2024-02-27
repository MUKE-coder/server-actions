import Product from "@/components/Product";
import { IProductProps } from "@/types/types";
import React from "react";

export default function page({ params: { id } }: { params: { id: number } }) {
  const products: IProductProps[] = [
    {
      title: "Canon Camera",
      image: "/products/camera.jpeg",
      price: 300,
      id: 1,
    },
    {
      title: "Nice Fridge",
      image: "/products/fridge.jpeg",
      price: 600,
      id: 2,
    },
    {
      title: "Microsoft Surface",
      image: "/products/surface.jpeg",
      price: 900,
      id: 3,
    },
    {
      title: "Smart TV",
      image: "/products/tv.jpeg",
      price: 300,
      id: 4,
    },
  ];
  const product = products.find((product) => product.id == id);
  console.log(product);
  return (
    <div className="min-h-screen flex items-center justify-center">
      {product ? (
        <Product
          title={product.title}
          image={product.image}
          price={product.price}
          id={product.id}
        />
      ) : (
        <p>No Such Kind of Product</p>
      )}
    </div>
  );
}
