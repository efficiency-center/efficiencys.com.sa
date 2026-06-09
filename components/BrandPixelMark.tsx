import { withBasePath } from "@/lib/paths";

const BRAND_MARK_HOOK =
  "M108 16h34c0 0-4 42-46 78-14 13-38 20-56 14 24-8 46-30 56-58 6-18 8-32 12-34z";

const DOT_MASK_SRC = withBasePath("/assets/imgs/nav-mark-dot-mask.png");
const HOOK_MASK_SRC = withBasePath("/assets/imgs/nav-mark-hook-mask.png");

/** Pixel portraits — simplified mark tiles. */
export function BrandPixelMarkSymbol({ id }: { id: string }) {
  return (
    <symbol id={id} viewBox="0 0 175 150" overflow="visible">
      <circle cx="48" cy="42" r="16" className="brand-pixel-mark__dot" />
      <path className="brand-pixel-mark__hook" d={BRAND_MARK_HOOK} />
    </symbol>
  );
}

type BrandMarkProps = {
  className?: string;
};

/**
 * Navbar mark traced from Asset_11 / nav-mark.png.
 * Dot stays brand navy; hook follows hero (white) vs page (black) like nav links.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 175 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <mask id="brand-mark-dot-mask" maskUnits="userSpaceOnUse">
          <image href={DOT_MASK_SRC} width="175" height="150" />
        </mask>
        <mask id="brand-mark-hook-mask" maskUnits="userSpaceOnUse">
          <image href={HOOK_MASK_SRC} width="175" height="150" />
        </mask>
      </defs>
      <rect
        className="brand-mark__dot"
        width="175"
        height="150"
        mask="url(#brand-mark-dot-mask)"
      />
      <rect
        className="brand-mark__hook"
        width="175"
        height="150"
        mask="url(#brand-mark-hook-mask)"
      />
    </svg>
  );
}
