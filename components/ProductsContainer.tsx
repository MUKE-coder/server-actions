import { ReactNode } from "react";
import Products from "./Products";
import Link from "next/link";

export default function ProductsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-6xl p-4 bg-slate-800 border border-slate-600 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-8">
      {children}
    </div>
  );
}
