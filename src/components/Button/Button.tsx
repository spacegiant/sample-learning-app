import { JSX, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => null;
};

export function Button({ children, disabled }: ButtonProps) {
  const classes = `${
    disabled && "opacity-30"
  } bg-lime-700 hover:bg-lime-800 text-lime-200 px-4 py-2 rounded-md`;
  return (
    <button onClick={() => {}} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

type PaginationButtonProps = {
  isRight?: boolean;
};

export function PaginationButton({
  children,
  disabled,
  isRight,
}: ButtonProps & PaginationButtonProps) {
  const classes = `${disabled && "opacity-30"} ${
    isRight ? "rounded-l-none" : "rounded-r-none"
  } bg-lime-700 hover:bg-lime-800 text-lime-200 px-4 py-2 rounded-md`;
  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export const ActionButton = (props: JSX.IntrinsicAttributes & ButtonProps) => {
  return <Button {...props}></Button>;
};
