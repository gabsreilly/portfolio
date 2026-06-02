"use client";

import { useEffect, useRef, useState } from "react";

/**
 * TweetEmbed — renders an official X / Twitter post card by status id.
 *
 * Uses X's widgets.js (loaded once, lazily) and createTweet so we render
 * into a container we control instead of leaving a raw blockquote behind.
 * dnt:true keeps it tracking-light. The card is width-capped and centered
 * so it never bleeds the page on mobile.
 *
 *   <TweetEmbed id="1897748002480984218" />
 */
declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          id: string,
          target: HTMLElement,
          options?: Record<string, unknown>,
        ) => Promise<HTMLElement | undefined>;
      };
    };
  }
}

let widgetsPromise: Promise<void> | null = null;

function loadWidgets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.twttr?.widgets) return Promise.resolve();
  if (widgetsPromise) return widgetsPromise;
  widgetsPromise = new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://platform.twitter.com/widgets.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
  return widgetsPromise;
}

export function TweetEmbed({
  id,
  theme = "light",
}: {
  id: string;
  theme?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadWidgets().then(() => {
      if (cancelled || !ref.current || !window.twttr) return;
      ref.current.innerHTML = "";
      window.twttr.widgets
        .createTweet(id, ref.current, {
          theme,
          dnt: true,
          align: "center",
          conversation: "none",
        })
        .then(() => {
          if (!cancelled) setReady(true);
        });
    });
    return () => {
      cancelled = true;
    };
  }, [id, theme]);

  return (
    <div className="mt-8 w-full">
      <div ref={ref} className="mx-auto w-full max-w-[550px] [&_iframe]:!mx-auto" />
      {!ready && (
        <div className="mx-auto h-72 w-full max-w-[550px] animate-pulse rounded-sm bg-ink/[0.06] ring-1 ring-line" />
      )}
    </div>
  );
}
