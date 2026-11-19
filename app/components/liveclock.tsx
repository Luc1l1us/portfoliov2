"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const currentTime = time.toLocaleTimeString("en-US", {
    timeStyle: "medium",
  });
  const currentDate = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <div>
      <span className="font-ubuntu relative h-8 w-12 flex items-center justify-center rotate-90 text-xs">
        ENG
      </span>
      <div className="relative h-18 w-12 flex items-center justify-center">
        <div
          className="absolute flex flex-col items-center
                      whitespace-nowrap font-ubuntu text-xs
                      rotate-90"
        >
          <span>{currentTime}</span>
          <span>{currentDate}</span>
        </div>
      </div>
    </div>
  );
}
