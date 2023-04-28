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
