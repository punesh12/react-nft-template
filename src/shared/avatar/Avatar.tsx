import React from "react";
import styled, { css } from "styled-components";
import { handleFallBackImage, handleImageError } from "utils/helpers/image";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "large" | "medium" | "small";
}

const sizeStyles = {
  large: css`
    width: 120px;
    height: 120px;
  `,
  medium: css`
    width: 60px;
    height: 60px;
  `,
  small: css`
    width: 24px;
    height: 24px;
  `,
};

const StyledAvatar = styled.img<AvatarProps>`
  border-radius: 50%;
  object-fit: cover;
  ${({ size }) => size && sizeStyles[size]}
`;

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  size = "large",
}) => {
  return (
    <StyledAvatar
      src={src ?? handleFallBackImage()}
      alt={alt}
      size={size}
      onError={handleImageError}
    />
  );
};

export default Avatar;
