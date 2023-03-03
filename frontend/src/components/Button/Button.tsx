import { ButtonProps } from "../../types";
import styles from "./Button.module.css";

const Button = ({ type, value }: ButtonProps) => (
  <input className={styles.button} type={type} value={value} />
);

export default Button;
