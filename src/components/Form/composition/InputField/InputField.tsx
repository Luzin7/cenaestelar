import { InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./inputField.module.css";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef(function InputField(
  { ...props }: InputFieldProps,
  ref: Ref<HTMLInputElement>,
) {
  return <input {...props} ref={ref} className={styles.input_field} />;
});

InputField.displayName = "InputField";
