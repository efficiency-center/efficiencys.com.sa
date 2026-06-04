/** Efficiency Center mark (dot + hook) — matches pixel-mark.png / Asset_6. */
export function BrandPixelMarkSymbol({ id }: { id: string }) {
  return (
    <symbol id={id} viewBox="0 0 175 150" overflow="visible">
      <circle cx="48" cy="42" r="16" className="brand-pixel-mark__dot" />
      <path
        className="brand-pixel-mark__hook"
        d="M108 16h34c0 0-4 42-46 78-14 13-38 20-56 14 24-8 46-30 56-58 6-18 8-32 12-34z"
      />
    </symbol>
  );
}
