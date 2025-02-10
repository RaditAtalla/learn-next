import React from "react";

type ButtonProps = {
  label: string;
  className?: string;
};

export default function Button({ label, className }: ButtonProps) {
  return (
    <button
      className={`bg-zinc-950 hover:bg-zinc-700 transition-colors rounded px-3 py-2 text-white font-bold ${className}`}
    >
      {label}
    </button>
  );
}
