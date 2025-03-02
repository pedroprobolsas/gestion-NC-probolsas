import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
        variant === "danger" &&
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4",
        size === "lg" && "h-12 px-6 text-lg",
        className
      )}
      {...props}
    />
  );
}
