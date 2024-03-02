import RegisterForm from "@/components/RegisterForm";
import React from "react";

export default function Home() {
  return (
    <div className="px-16 py-16 bg-slate-50 min-h-screen">
      <h2 className="text-2xl py-6 font-bold text-center">
        The Best way to Use Server Actions
      </h2>

      <div className="mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <RegisterForm />
      </div>
    </div>
  );
}
