import { AdminProps } from "@/types/types";
import React from "react";

export default function Admin({name,email,adminNo}:AdminProps) {
  return (
    <div>
      <h2>name: {name}</h2>
      <p>Email:{email}</p>
      <p>AdminNo:{adminNo}</p>
    </div>
  );
}
