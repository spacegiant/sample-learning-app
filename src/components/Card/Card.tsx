import { ReactNode } from "react";

function Card(props: { children: ReactNode; classNames?: string }) {
  const classes = `${
    props.classNames ?? ""
  } px-8 py-4 rounded-md text-black min-w-52 min-h-36 inline-block flex items-center justify-center `;
  return <span className={classes}>{props.children}</span>;
}

export function DropCard(props: { children: ReactNode; isOver?: boolean }) {
  return (
    <Card
      classNames={`flex flex-col border-2 border-slate-300 ${
        props.isOver && "border-slate-500"
      }`}
    >
      {props.children}
    </Card>
  );
}

export function DragCard(props: {
  children: ReactNode;
  hasBeenDropped: boolean;
}) {
  return (
    <Card
      classNames={`drop-shadow bg-gray-300 ${
        props.hasBeenDropped && "invisible"
      }`}
    >
      {props.children}
    </Card>
  );
}
