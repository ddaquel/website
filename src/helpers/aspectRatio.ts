export const ASPECT_RATIO_MY_PHOTO = 1;

export const calculateScaledHeight = (
  width: number,
  aspectRatio: number
): number => {
  return width / aspectRatio;
};

export const calculateScaledWidth = (
  height: number,
  aspectRatio: number
): number => {
  return aspectRatio * height;
};
