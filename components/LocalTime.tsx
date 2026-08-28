"use client";

import { useEffect, useState } from "react";
import { me } from "@/content/me";

const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: me.location.timeZone,
      }).format(new Date());

    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 1000 * 15);

    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

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
