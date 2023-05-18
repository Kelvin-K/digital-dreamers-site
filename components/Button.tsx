import React, { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="border-[1px] border-[rgb(225,225,255)]/50 px-4 py-4 rounded-lg w-[300px]">
      {children}
    </button>
  );
}
