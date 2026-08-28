"use client";

import { useEffect, useState } from "react";
import { me } from "@/content/me";

/**
 * A live clock in my timezone. A static "UTC+7" is a fact; a clock
 * that ticks while you read is a reminder there's someone on the
 * other end of it, probably awake, probably not.
 */
const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: me.location.timeZone,
      }).format(new Date());

    // Deferred rather than set synchronously here: the first value has
    // to come from the client (the server has no way to know the
    // viewer's clock without risking a hydration mismatch), and setting
    // state directly in an effect body triggers a cascading render.
    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 1000 * 15);

    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  // null on the server and the first client paint, so the markup matches.
  if (!time) {
    return <span className="text-ink-faint tabular-nums">--:--</span>;
  }

  return (
    <span className="tabular-nums text-ink-muted">
      {time} <span className="text-ink-faint">local</span>
    </span>
  );
};

export default LocalTime;
