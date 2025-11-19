import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * ChipMarquee
 * A compact, pill-style horizontal scroller of skill/company chips.
 * - Dark theme by default with subtle borders and translucent fill
 * - Auto-scrolls right -> left using requestAnimationFrame (10 px/s default)
 * - Pauses on hover/focus, respects prefers-reduced-motion
 * - On small/touch screens, falls back to native horizontal scroll
 *
 * Props
 * - chips: string[]
 * - speed?: number (pixels per second, default 10)
 * - autoScroll?: boolean (default true)
 * - glowOnHover?: boolean (default true)
 * - variant?: 'chips' | 'logos' (optional; default 'chips')
 */
export type ChipMarqueeProps = {
  chips: string[];
  speed?: number;
  autoScroll?: boolean;
  glowOnHover?: boolean;
  variant?: 'chips' | 'logos';
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ChipMarquee: React.FC<ChipMarqueeProps> = ({
  chips,
  speed = 10, // change default speed here (px/s)
  autoScroll = true,
  glowOnHover = true,
  variant = 'chips',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect reduced motion and touch capability
  useLayoutEffect(() => {
    setMotionReduced(prefersReducedMotion());
    setIsTouch(typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  }, []);

  // Duplicate the track content to create an infinite loop effect
  // We render children twice to allow seamless wrap-around
  const list = chips && chips.length ? chips : [];

  useEffect(() => {
    if (!autoScroll || motionReduced || isTouch) return; // Disable auto-scroll on touch devices

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let running = true;

    const step = (now: number) => {
      if (!running) return;

      if (lastTimeRef.current == null) {
        lastTimeRef.current = now;
      }

      const dt = (now - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = now;

      if (!isHovering) {
        offsetRef.current += speed * dt; // pixels
      }

      // Width of a single sequence (half of the track scrollWidth since it's duplicated)
      const sequenceWidth = track.scrollWidth / 2;

      // When offset passes one sequence width, wrap it
      if (sequenceWidth > 0) {
        offsetRef.current = offsetRef.current % sequenceWidth;
      }

      // Apply transform to the track. Negative X to move right->left visually.
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lastTimeRef.current = null;
    };
  }, [autoScroll, speed, isHovering, motionReduced, isTouch]);

  // Pause on hover/focus within container
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);
  const onFocusIn = () => setIsHovering(true);
  const onFocusOut = () => setIsHovering(false);

  const baseChipClass =
    // edit default chip styles here
    'h-10 px-4 py-2 inline-flex items-center rounded-full border border-gray-700/40 bg-gray-900/40 text-gray-200 text-sm font-medium whitespace-nowrap select-none';

  const glowClass = glowOnHover
    ? 'transition duration-200 will-change-transform hover:-translate-y-0.5 focus:-translate-y-0.5 hover:shadow-[0_0_0.5rem_var(--accent,theme(colors.indigo.500))] focus:shadow-[0_0_0.5rem_var(--accent,theme(colors.indigo.500))] hover:opacity-100 focus:opacity-100'
    : 'transition duration-200';

  const gapClass = 'gap-3'; // edit gap between chips here

  const chipEl = (label: string, idx: number) => (
    <span
      key={`${label}-${idx}`}
      className={`${baseChipClass} ${glowClass}`}
      role="listitem"
      aria-label={label}
      tabIndex={0}
    >
      {variant === 'chips' ? (
        label
      ) : (
        // logos variant: expecting label to be a URL or name mapping; here fallback to text
        <span className="opacity-90 grayscale hover:grayscale-0 focus:grayscale-0">{label}</span>
      )}
    </span>
  );

  return (
    <section
      aria-label="Skills and companies"
      className="relative w-full"
    >
      {/* Edge fades - edit gradient strength/width here */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />

      <nav
        aria-label="Scrollable chips"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocusIn}
        onBlur={onFocusOut}
        ref={containerRef}
        className={[
          'relative mx-auto w-full overflow-hidden',
          // On small screens, allow manual scroll by default. Auto-scroll disabled via hook on touch.
          'sm:overflow-hidden overflow-x-auto',
        ].join(' ')}
      >
        <div
          ref={trackRef}
          className={`flex ${gapClass} items-center py-4 will-change-transform`}
          // Inline style to start at transform 0
          style={{ transform: 'translate3d(0,0,0)' }}
          role="list"
        >
          {/* We duplicate the list to make the marquee loop seamless */}
          {[...list, ...list].map((label, i) => chipEl(label, i))}
        </div>
      </nav>
    </section>
  );
};

export default ChipMarquee;
