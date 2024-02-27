import Link from "next/link";
import React, { ReactNode } from "react";

type CustomButtonProps = {
  variant?: "primary" | "secondary" | "default";
  title: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
};
export default function CustomButton({
  title,
  className,
  icon,
  onClick,
  href,
  variant = "default",
}: CustomButtonProps) {
  let defaultClassName =
    "py-3 px-6 bg-slate-200 text-slate-900 flex items-center";
  let variantClassName = "";
  if (variant === "primary") {
    variantClassName = "bg-blue-500 hover:bg-blue-700 text-white";
  } else if (variant === "secondary") {
    variantClassName = "bg-slate-600 hover:bg-slate-900 text-slate-50";
  } else if (variant === "default") {
    variantClassName = "bg-white text-slate-900";
  } else {
    variantClassName = "";
  }
  const combinedClassName = `${defaultClassName} ${variantClassName} ${className}`;
  return (
    <>
      {href ? (
        <Link href={href} className={combinedClassName} onClick={onClick}>
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </Link>
      ) : (
        <button className={combinedClassName} onClick={onClick}>
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </button>
      )}
    </>
  );
}
