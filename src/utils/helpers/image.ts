import InvalidImagePlaceholder from "assets/images/asset-placeholder.png";
import React from "react";

/**
 * Returns the fallback image URL in case the original image is invalid or missing.
 *
 * @returns {string} The URL of the fallback image.
 */
export const handleFallBackImage = (): string => {
  return InvalidImagePlaceholder;
};

/**
 * Handles the error when an image fails to load by setting an alternative image source.
 *
 * @param event - The synthetic event representing the image loading error.
 */ export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
): void => {
  const target = event.target as HTMLImageElement;
  target.src = InvalidImagePlaceholder; // Set alternative image source
};
