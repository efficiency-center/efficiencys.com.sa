"use client";

import { useId, useMemo } from "react";
import { BrandPixelMarkSymbol } from "@/components/BrandPixelMark";
import {
  SILHOUETTE_COLS,
  SILHOUETTE_ROWS,
  getMaskBounds,
  maskDensity,
  type SilhouetteVariant,
} from "@/lib/silhouetteMasks";

const SIZE_MIN = 1.15;
const SIZE_MAX = 2.85;
const MARK_ASPECT = 150 / 175;
const TOP_PAD = 3.5;
const SIDE_PAD = 4;

/** Uniform scale: max height/width in viewBox without stretching the mask. */
function computePortraitCell(bounds: ReturnType<typeof getMaskBounds>): number {
  const shapeRows = bounds.maxY - bounds.minY;
  const shapeCols = bounds.maxX - bounds.minX;
  const markReach = (SIZE_MAX * MARK_ASPECT) / 2;
  const bottomInset = markReach;
  const availH = 100 - TOP_PAD - bottomInset;
  const availW = 100 - SIDE_PAD * 2;

  const cellByH = shapeRows > 0 ? availH / shapeRows : availH;
  const cellByW = shapeCols > 0 ? availW / shapeCols : availW;

  return Math.min(cellByH, cellByW);
}

export type LogoPixel = {
  id: string;
  x: number;
  y: number;
  size: number;
  shimmerDelay: number;
  shimmerDuration: number;
};

function hashString(value: string): number {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) {
    h = (h << 5) - h + value.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function halftoneWeight(x: number, y: number): number {
  const cx = SILHOUETTE_COLS / 2;
  const cy = SILHOUETTE_ROWS * 0.38;
  const dist = Math.hypot(x - cx, (y - cy) * 1.05);
  const max = Math.hypot(cx, cy);
  return 1 - Math.min(1, dist / max) * 0.35;
}

export function buildLogoPortrait(seed: string, variant: SilhouetteVariant): LogoPixel[] {
  const base = hashString(seed);
  const bounds = getMaskBounds(variant);
  const pixels: LogoPixel[] = [];
  const cell = computePortraitCell(bounds);
  const bottomY = 100 - (SIZE_MAX * MARK_ASPECT) / 2;

  for (let y = 0; y < SILHOUETTE_ROWS; y += 1) {
    for (let x = 0; x < SILHOUETTE_COLS; x += 1) {
      const density = maskDensity(variant, x, y, base);
      if (density <= 0) continue;

      const weight = halftoneWeight(x, y);
      const size = SIZE_MIN + weight * (SIZE_MAX - SIZE_MIN);
      const jitter = ((base + x * 17 + y * 23) % 7) / 100;
      const px =
        50 + (x + 0.5 - bounds.centerX) * cell + jitter;
      const py = bottomY - (bounds.maxY - y) * cell;

      const phase = (base + x * 31 + y * 37) % 100;
      const tempo = (base + x * 19 + y * 41) % 24;
      pixels.push({
        id: `${seed}-${x}-${y}`,
        x: px,
        y: py,
        size,
        shimmerDelay: phase / 14,
        shimmerDuration: 2.8 + tempo / 8,
      });
    }
  }

  return pixels;
}

type PixelAvatarProps = {
  seed: string;
  variant: SilhouetteVariant;
  className?: string;
};

export default function PixelAvatar({ seed, variant, className = "" }: PixelAvatarProps) {
  const markId = useId().replace(/:/g, "");
  const pixels = useMemo(() => buildLogoPortrait(seed, variant), [seed, variant]);

  return (
    <svg
      className={`pixel-portrait ${className}`.trim()}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <BrandPixelMarkSymbol id={markId} />
      </defs>
      {pixels.map((p) => (
        <use
          key={p.id}
          href={`#${markId}`}
          x={p.x - p.size / 2}
          y={p.y - (p.size * MARK_ASPECT) / 2}
          width={p.size}
          height={p.size * MARK_ASPECT}
          className="pixel-portrait__mark pixel-portrait__mark--shimmer"
          style={{
            animationDelay: `${p.shimmerDelay}s`,
            animationDuration: `${p.shimmerDuration}s`,
          }}
        />
      ))}
    </svg>
  );
}
