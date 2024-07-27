import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from "./Button";

// Define animation keyframes
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const activeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
  }
`;

// Define button variations
const buttonVariations = {
  primary: css`
    height: 72px;
  `,
  secondary: css`
    height: 60px;
  `,
  tertiary: css`
    height: 46px;
  `,
};

// Define Button styles
export const ButtonContainer = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 20px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.3s ease;
  width: ${({ width }) => width || "auto"};
  ${({ variant }) => buttonVariations[variant]}

  background-color: ${({ outline, theme }) =>
    outline ? "transparent" : theme.primary};
  color: ${({ outline, theme }) => (outline ? theme.primary : theme.text)};
  border: 2px solid ${({ theme }) => theme.primary};
  outline: none;

  &:hover:not(:disabled) {
    animation: ${hoverAnimation} 0.3s forwards;
    ${({ outline }) =>
      !outline &&
      css`
        transform: scale(0.9);
        outline: none;
      `}
  }

  &:active:not(:disabled) {
    animation: ${activeAnimation} 0.2s forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.primary};
      }
    `};
`;
