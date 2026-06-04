#!/usr/bin/env python3
"""Regenerate lib/silhouetteMasks.ts from source PNGs (letterboxed, centered)."""

from __future__ import annotations

import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(
    os.path.dirname(ROOT),
    ".cursor/projects/Users-omarkhuddose-Documents-GitHub-Efficiency-Center-Website/assets",
)
# Fallback if run from repo only
if not os.path.isdir(ASSETS):
    ASSETS = "/Users/omarkhuddose/.cursor/projects/Users-omarkhuddose-Documents-GitHub-Efficiency-Center-Website/assets"

FILES = {
    "male": os.path.join(ROOT, "public", "assets", "imgs", "silhouettes", "male.png"),
    "female": os.path.join(ROOT, "public", "assets", "imgs", "silhouettes", "female.png"),
}

COLS, ROWS = 36, 36
PAD = 0.09


def crop_silhouette(img: Image.Image) -> Image.Image:
    px = img.load()
    w, h = img.size
    coords = [(x, y) for y in range(h) for x in range(w) if px[x, y] < 200]
    if not coords:
        raise ValueError("empty silhouette")
    x0, x1 = min(c[0] for c in coords), max(c[0] for c in coords)
    y0, y1 = min(c[1] for c in coords), max(c[1] for c in coords)
    return img.crop((x0, y0, x1 + 1, y1 + 1))


def sample_dark(img: Image.Image, ix: float, iy: float) -> bool:
    w, h = img.size
    px = int(ix)
    py = int(iy)
    vals = []
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            xx, yy = px + dx, py + dy
            if 0 <= xx < w and 0 <= yy < h:
                vals.append(img.getpixel((xx, yy)))
    if not vals:
        return False
    return sum(1 for v in vals if v < 200) / len(vals) > 0.32


def grid_from_image(path: str) -> list[list[int]]:
    img = crop_silhouette(Image.open(path).convert("L"))
    cw, ch = img.size
    inner_rows = ROWS * (1 - PAD * 2)
    inner_cols = COLS * (1 - PAD * 2)
    scale = min(inner_cols / cw, inner_rows / ch)
    draw_w = cw * scale
    draw_h = ch * scale
    off_x = (COLS - draw_w) / 2
    off_y = PAD * ROWS + (inner_rows - draw_h) / 2

    grid = []
    for gy in range(ROWS):
        row = []
        for gx in range(COLS):
            ix = (gx + 0.5 - off_x) / scale
            iy = (gy + 0.5 - off_y) / scale
            row.append(1 if 0 <= ix < cw and 0 <= iy < ch and sample_dark(img, ix, iy) else 0)
        grid.append(row)
    return center_mask(grid)


def center_mask(grid: list[list[int]]) -> list[list[int]]:
    points = [(x, y) for y, row in enumerate(grid) for x, cell in enumerate(row) if cell]
    if not points:
        return grid

    cx = sum(p[0] for p in points) / len(points)
    cy = sum(p[1] for p in points) / len(points)
    shift_x = round((COLS - 1) / 2 - cx)
    shift_y = round((ROWS - 1) / 2 - cy)

    out = [[0 for _ in range(COLS)] for _ in range(ROWS)]
    for y, row in enumerate(grid):
        for x, cell in enumerate(row):
            if not cell:
                continue
            nx, ny = x + shift_x, y + shift_y
            if 0 <= nx < COLS and 0 <= ny < ROWS:
                out[ny][nx] = 1
    return out


def main() -> None:
    masks: dict[str, list[list[int]]] = {}
    for key, path in FILES.items():
        masks[key] = grid_from_image(path)
        print(key, sum(sum(r) for r in masks[key]))

    out = os.path.join(ROOT, "lib", "silhouetteMasks.ts")
    variants = list(masks.keys())
    with open(out, "w") as f:
        f.write("export type SilhouetteVariant =\n")
        for i, v in enumerate(variants):
            f.write(f'  | "{v}"' + ("\n" if i == len(variants) - 1 else "\n"))
        f.write(";\n\n")
        f.write(f"export const SILHOUETTE_COLS = {COLS};\n")
        f.write(f"export const SILHOUETTE_ROWS = {ROWS};\n\n")
        for key, grid in masks.items():
            const = key.upper().replace("-", "_")
            f.write(f"const MASK_{const}: number[][] = [\n")
            for row in grid:
                f.write(f"  [{','.join(str(c) for c in row)}],\n")
            f.write("];\n\n")
        f.write("export const SILHOUETTE_MASKS: Record<SilhouetteVariant, number[][]> = {\n")
        for key in variants:
            const = key.upper().replace("-", "_")
            f.write(f'  "{key}": MASK_{const},\n')
        f.write("};\n\n")
        f.write(
            "export const SILHOUETTE_VARIANTS = Object.keys(SILHOUETTE_MASKS) as SilhouetteVariant[];\n\n"
        )
        f.write(
            "export function maskDensity(variant: SilhouetteVariant, x: number, y: number, seed: number): number {\n"
        )
        f.write("  if (y < 0 || y >= SILHOUETTE_ROWS || x < 0 || x >= SILHOUETTE_COLS) return 0;\n")
        f.write("  const base = SILHOUETTE_MASKS[variant][y][x];\n")
        f.write("  if (!base) return 0;\n")
        f.write("  const edgeNoise = ((seed + x * 13 + y * 19) % 11) / 55;\n")
        f.write("  return 0.85 + edgeNoise;\n")
        f.write("}\n")
    print("wrote", out)


if __name__ == "__main__":
    main()
