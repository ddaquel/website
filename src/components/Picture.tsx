import Image from "next/legacy/image";
import {
  calculateScaledHeight,
  calculateScaledWidth,
} from "src/helpers/aspectRatio";

export interface IPictureProps {
  height?: number;
  width?: number;
  src: string;
  alt: string;
  aspectRatio: number;
  customWrapperStyle?: any;
  customWrapperClass?: any;
  customImgStyle?: any;
  customImgClass?: any;
}

const styles = {
  wrapper: "relative",
};

export function Picture(props: IPictureProps) {
  const {
    height,
    width,
    src,
    alt,
    aspectRatio,
    customWrapperStyle,
    customWrapperClass,
    customImgClass,
    customImgStyle,
  } = props;

  const wrapperHeight = `${
    height ? height : calculateScaledHeight(width as number, aspectRatio)
  }px`;

  const wrapperWidth = `${
    width ? width : calculateScaledWidth(height as number, aspectRatio)
  }px`;

  return (
    <div
      className={`${styles.wrapper} ${customWrapperClass || ""}`}
      style={{
        ...(customWrapperStyle || {}),
        height: wrapperHeight,
        width: wrapperWidth,
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        priority
        objectFit="contain"
        className={customImgClass || ""}
        style={customImgStyle || ""}
      />
    </div>
  );
}
