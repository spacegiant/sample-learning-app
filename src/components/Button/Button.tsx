// import { Direction } from "@dnd-kit/core/dist/types";
import { Direction } from "@/types";
import { JSX, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ children, disabled, onClick }: ButtonProps) {
  const classes = `${
    disabled && "opacity-30"
  } bg-lime-700 hover:bg-lime-800 text-lime-200 px-4 py-2 rounded-md`;
  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

type PaginationButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  isRight?: boolean;
  onClick: (direction: Direction) => void;
};

export function PaginationButton({
  children,
  disabled,
  isRight,
  onClick,
}: PaginationButtonProps) {
  const classes = `${disabled && "opacity-30"} ${
    isRight ? "rounded-l-none" : "rounded-r-none"
  } bg-lime-700 hover:bg-lime-800 text-lime-200 px-4 py-2 rounded-md`;
  return (
    <button
      onClick={() => {
        console.log(isRight);
        onClick(isRight ? Direction.Forward : Direction.Backward);
      }}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

export const ActionButton = (props: JSX.IntrinsicAttributes & ButtonProps) => {
  return <Button {...props}></Button>;
};
