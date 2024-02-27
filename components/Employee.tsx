import { EmployeeProps, IEmployeeProps } from "@/types/types";
import React from "react";

export default function Employee({
  name,
  email,
  id,
  department,
}: IEmployeeProps) {
  return (
    <div>
      <h2>name: {name}</h2>
      <p>Email:{email}</p>
      <p>ID:{id}</p>
      <p>Department:{department}</p>
    </div>
  );
}
