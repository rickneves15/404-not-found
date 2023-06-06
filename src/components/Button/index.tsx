import { ReactNode } from "react";

export function Button({ children }: { children: ReactNode }) {
  return <button type="button" className="w-56 h-16 bg-gray-900 text-white uppercase">{children}</button>
}