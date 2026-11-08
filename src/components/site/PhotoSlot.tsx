import Image from 'next/image';
import { photoExists } from '@/lib/images';

const sizesByRatio = {
  '4:5': [1280, 1600],
  '3:4': [1200, 1600],
  '4:3': [1600, 1200],
  '3:2': [1600, 1067],
  '1:1': [1600, 1600],
  fill: [1600, 1067],
} as const;

export type PhotoRatio = keyof typeof sizesByRatio;

interface PhotoSlotProps {
  /** Path under /public, for example /images/hero-argan-oil.webp */
  src: string;
  alt: string;
  ratio: PhotoRatio;
  /** Name of the scene, shown in the development fallback while the photo is missing. */
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Shows the photo when the file exists in /public.
 * When it is missing: development shows a designed block with the scene name,
 * production shows nothing (the page then uses its text-only layout).
 */
export default function PhotoSlot({ src, alt, ratio, label, priority = false, sizes, className }: PhotoSlotProps) {
  const classes = `mop-photo mop-photo--${ratio.replace(':', 'x')}${className ? ` ${className}` : ''}`;

  if (!photoExists(src)) {
    if (process.env.NODE_ENV === 'production') return null;
    return (
      <div className={`${classes} mop-photo--empty`}>
        <span className="mop-photo__label">{label}</span>
      </div>
    );
  }

  const [width, height] = sizesByRatio[ratio];
  return (
    <div className={classes}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes ?? '(max-width: 900px) 100vw, 560px'}
      />
    </div>
  );
}
