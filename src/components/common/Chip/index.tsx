import styles from "./Chip.module.css";

interface ChipProps {
  children: React.ReactNode;
  color?: string;
}

const Chip = ({ children, color }: ChipProps) => {
  return (
    <span className={styles["chip"]} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};

export default Chip;
