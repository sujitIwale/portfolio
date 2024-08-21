import styles from "./Chip.module.css";

interface ChipProps {
  label: string;
  color?: string;
}

const Chip = ({ label, color }: ChipProps) => {
  return (
    <span className={styles["chip"]} style={{ backgroundColor: color }}>
      {label}
    </span>
  );
};

export default Chip;
