import React from "react";
import { useReveal } from "../hooks/useReveal";

const Reveal = ({ delay = 0, className = "", children, ...rest }) => {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;
