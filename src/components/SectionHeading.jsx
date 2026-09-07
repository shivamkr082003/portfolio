import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ index, title, description, align = "center" }) => {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`mb-16 ${isCenter ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-sm text-blue-600 dark:text-blue-400 tracking-wider">
          {index}
        </span>
        <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-purple-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {title}
        </span>
      </div>
      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
      >
        {description.heading}
      </h2>
      {description.body && (
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {description.body}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
