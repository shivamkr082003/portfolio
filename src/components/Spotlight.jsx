import React from "react";

// Card that tracks the cursor so .card can paint a glow; also gets the animated gradient border
const Spotlight = ({ as: Tag = "div", className = "", children, ...rest }) => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag onMouseMove={handleMove} className={`card rounded-3xl ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Spotlight;
