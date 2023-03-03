import React from "react";
import { InputFieldProps } from "../../types";
import styles from "./InputField.module.css";

export const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.InputField}
      type={type}
      id={id}
      value={value}
      required
      onChange={onChange}
    />
  );
};
