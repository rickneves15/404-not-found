import { ReactNode } from "react";

export function Brand({ children }: { children: ReactNode }) {
  return <span className="font-alt font-bold text-2xl">{children}</span>
}