import { IProductProps, type ProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Product({ title, image, price, id }: IProductProps) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={204}
        height={194}
        className="h-24 w-48 object-cover rounded-sm"
      />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <Link href={`/products/${id}`}>View Details</Link>
    </div>
  );
}
