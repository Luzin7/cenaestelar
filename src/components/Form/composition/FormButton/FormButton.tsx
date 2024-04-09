import { ButtonHTMLAttributes, Ref, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton = forwardRef(function Button(
  { ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return <button {...props} ref={ref}></button>;
});

FormButton.displayName = "Form Button";
