import React from "react";
import { ButtonContainer } from "./button.style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The variant of the button: 'primary', 'secondary', or 'tertiary'. */
  variant: "primary" | "secondary" | "tertiary";

  /** Indicates if the button should have an outline style. */
  outline?: boolean;

  /** The width of the button. */
  width?: string;

  /** The icon to be displayed on the left side of the button. */
  leftIcon?: React.ReactNode;

  /** The icon to be displayed on the right side of the button. */
  rightIcon?: React.ReactNode;

  /** Indicates if the button is disabled. */
  disabled?: boolean;
}

/**
 * Represents a memoized button component with customizable properties.
 */
export const Button: React.FC<ButtonProps> = React.memo(
  ({
    variant = "primary",
    width,
    leftIcon,
    rightIcon,
    children,
    disabled,
    outline,
    ...props
  }) => {
    return (
      <ButtonContainer
        variant={variant}
        width={width}
        disabled={disabled}
        outline={outline}
        {...props}
      >
        {leftIcon && <span style={{ marginRight: "8px" }}>{leftIcon}</span>}
        {children}
        {rightIcon && <span style={{ marginLeft: "8px" }}>{rightIcon}</span>}
      </ButtonContainer>
    );
  },
);
