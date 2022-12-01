export const ASPECT_RATIO_CURRENT_WORK_LOGO = 1280 / 467;
export const ASPECT_RATIO_MY_PHOTO = 1;
export const ASPECT_RATIO_BACKGROUND = 4032 / 2268;
export const ASPECT_JOB_LOGO = 1;
export const ASPECT_BRAND_LOGO = 962 / 160;

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
