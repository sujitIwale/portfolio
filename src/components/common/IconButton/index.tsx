import styles from "./IconButton.module.css";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "string";
  onClick?: () => void;
}

const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`${styles.button} ${props.className && ""}`}
      style={{ ...props.style, color: props.color }}
    >
      {children}
    </button>
  );
};

export default IconButton;
