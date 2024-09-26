import { ReactNode } from "react";

export function PageTitle(props: { children: ReactNode }) {
  return <h2 className="text-4xl">{props.children}</h2>;
}
