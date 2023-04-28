/**
 * This is a TypeScript React component for a button with customizable props such as onClick, type,
 * disabled, and className.
 * @param {ButtonProps}  - - `ReactNode`: a type that represents any valid React child node, such as a
 * string, number, element, or fragment.
 * @returns The `Button` component is being returned. It is a reusable button component that takes in
 * props such as `children`, `onClick`, `type`, `disabled`, and `className`. It renders a button
 * element with the provided props and the `button-styles.module.scss` styles applied.
 */
import React, { ReactNode } from "react";
import styles from "./button-styles.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
