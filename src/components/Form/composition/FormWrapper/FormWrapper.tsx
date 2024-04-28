import { FormHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import styles from "./formWrapper.module.css";

interface FormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const FormWrapper = forwardRef(function FormWrapper(
  { children, ...props }: FormWrapperProps,
  ref: Ref<HTMLFormElement>,
) {
  return (
    <form {...props} ref={ref} className={styles.form_wrapper}>
      {children}
    </form>
  );
});

FormWrapper.displayName = "FormWrapper";
