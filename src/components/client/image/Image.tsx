'use client';

import clsx from 'clsx';
import { default as NextImage } from 'next/image';

export type Props = {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  quality?: number | `${number}`;
  sizes?: string;
  additionalStyle?: string;
  priority?: boolean;
};

export function Image(props: Props) {
  const {
    additionalStyle,
    src,
    alt,
    width,
    height,
    fill = false,
    sizes,
    quality,
    priority,
  } = props;

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(additionalStyle)}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      // placeholder="blur"
    />
  );
}
