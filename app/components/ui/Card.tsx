import { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge("rounded-lg border bg-white shadow-sm", className)}
      {...props}
    />
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={twMerge("border-b p-4 font-semibold", className)}
      {...props}
    />
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={twMerge("p-4", className)} {...props} />;
}
