import React from "react";

export default function Button({
  title,
  loading,
}: {
  title: string;
  loading?: boolean;
}) {
  return (
    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center me-2 mb-2">
      {loading ? "Loading..." : <span>{title}</span>}
    </button>
  );
}
