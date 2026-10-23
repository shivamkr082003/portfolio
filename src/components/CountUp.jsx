import React, { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

// Animates a number from 0 to `to` once it scrolls into view
const CountUp = ({ to, decimals = 0, suffix = "", duration = 1600 }) => {
  const [ref, isVisible] = useReveal(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(to * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
