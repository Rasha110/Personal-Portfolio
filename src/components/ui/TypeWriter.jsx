"use client";

import { useEffect, useState } from "react";

export default function TypeWriter({ text, speed = 32, startDelay = 300, className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      {!done && <span className="animate-blink">_</span>}
    </span>
  );
}
