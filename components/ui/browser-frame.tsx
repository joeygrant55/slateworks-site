import type { FC } from "react";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** faux address-bar label, e.g. "profluence.com" */
  url?: string;
  /** aspect ratio of the viewport area, e.g. "16/10" */
  ratio?: string;
  /** object-position helper for the screenshot, e.g. "object-top" */
  imgClassName?: string;
  className?: string;
};

/**
 * A clean mac-style window chrome that wraps a real screenshot so captures
 * read as premium, consistent product shots. Uses the refined-dark tokens.
 */
const BrowserFrame: FC<BrowserFrameProps> = ({
  src,
  alt,
  url,
  ratio = "16 / 10",
  imgClassName = "object-top",
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-neutral/10 bg-neutral-darker shadow-2xl shadow-black/40 ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-neutral/10 bg-black/40 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        {url && (
          <div className="ml-1 flex-1">
            <span className="inline-block max-w-full truncate rounded-md bg-white/[0.04] px-3 py-1 text-xs text-neutral-dark">
              {url}
            </span>
          </div>
        )}
      </div>

      {/* viewport */}
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: ratio }}>
        <img src={src} alt={alt} className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`} />
      </div>
    </div>
  );
};

export default BrowserFrame;
