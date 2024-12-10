import { classNames } from "@/utils/styles";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "error" | "success" | "warning";
type ButtonVariant = "contained" | "outlined" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  href?: string;
  target?: string;
}

const Button = ({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  ...props
}: ButtonProps) => {
  const buttonElement = (
    <button
      {...props}
      className={classNames(
        "button",
        styles[variant],
        styles[color],
        styles[size]
      )}
    >
      {children}
    </button>
  );

  if (props.href) {
    return (
      <Link href={props.href} target={props.target}>
        {buttonElement}
      </Link>
    );
  }

  return buttonElement;
};

export default Button;
