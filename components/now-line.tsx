"use client";

import { useEffect, useState } from "react";

/**
 * A live local-time line. Updates every minute on the client; renders
 * a stable placeholder on the server to avoid hydration mismatch.
 */
export function NowLine({
  place,
  timezone,
}: {
  place: string;
  timezone: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    };
    tick();
    const ms = 60_000 - (Date.now() % 60_000);
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const t0 = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60_000);
    }, ms);
    return () => {
      clearTimeout(t0);
      if (intervalId) clearInterval(intervalId);
    };
  }, [timezone]);

  return (
    <span className="label inline-flex items-center gap-2">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-lime"
        aria-hidden
      />
      {place} — {time ?? "—:—"} local
    </span>
  );
}
