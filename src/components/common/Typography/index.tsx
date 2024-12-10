import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: number;
  weight?: number;
  style?: React.CSSProperties;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "caption"
    | "button"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
}

const Typography = ({
  children,
  size,
  weight,
  style,
  ...props
}: TypographyProps) => {
  let element = "p";
  let className = "";
  const combinedStyles = {
    fontSize: size,
    fontWeight: weight,
    ...style,
  };

  switch (props.variant) {
    case "h1":
      element = "h1";
      className = styles.h1;
      break;
    case "h2":
      element = "h2";
      className = styles.h2;
      break;
    case "h3":
      element = "h3";
      className = styles.h3;
      break;
    case "h4":
      element = "h4";
      className = styles.h4;
      break;
    case "h5":
      element = "h5";
      className = styles.h5;
      break;
    case "h6":
      element = "h6";
      className = styles.h6;
      break;
    case "p":
      element = "p";
      className = styles.p;
      break;
    case "body1":
      element = "p";
      className = styles.body1;
      break;
    case "body2":
      element = "p";
      className = styles.body2;
      break;
    case "span":
      element = "span";
      className = styles.span;
      break;
  }

  return React.createElement(
    element,
    {
      ...props,
      className: `${className} ${props.className}`,
      style: combinedStyles,
    },
    children
  );
};

export default Typography;
