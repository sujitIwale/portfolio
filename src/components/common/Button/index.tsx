import { classNames } from "@/utils/styles";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "error" | "success" | "warning";
type ButtonVariant = "contained" | "outlined" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

const Button = ({
  children,
  variant = "contained",
  size = "medium",
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
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
};

export default Button;
