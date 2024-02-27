import React from "react";
import Product from "./Product";
import { IProductProps, type ProductProps } from "@/types/types";

export default function Products() {
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
  return (
    <div className="py-8">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, i) => {
          return (
            <Product
              key={i}
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
