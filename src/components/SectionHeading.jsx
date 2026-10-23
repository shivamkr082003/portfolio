import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ index, title, heading, accent, body }) => {
  return (
    <Reveal className="mb-14 md:mb-20 max-w-4xl">
      <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 mb-7 text-sm font-medium text-muted">
        <span className="text-gradient font-semibold">{index}</span>
        <span className="h-3.5 w-px bg-line-strong" />
        {title}
      </div>
      <h2 className="text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-bold tracking-[-0.045em] text-fg">
        {heading}{" "}
        {accent && <span className="text-gradient-animated">{accent}</span>}
      </h2>
      {body && (
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
          {body}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
