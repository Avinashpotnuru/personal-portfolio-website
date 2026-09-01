import { memo } from "react";
import Reveal from "../Reveal";

const ExperienceInfo = ({ val, index }) => {
  const isCurrent = index === 0;

  return (
    <Reveal
      delay={(index % 2) * 0.06}
      className="relative border-t border-slate-100 py-9 pl-12 first:border-t-0 first:pt-0 last:pb-0 lg:pl-16"
    >
      <span
        aria-hidden="true"
        className="absolute left-4 top-6 flex h-3.5 w-3.5 -translate-x-1/2 first:top-0 lg:left-5"
      >
        {isCurrent && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0c7fb0]/40" />
        )}
        <span
          className={`relative inline-flex h-3.5 w-3.5 rounded-full ring-4 ring-white ${
            isCurrent ? "bg-[#0c7fb0]" : "bg-slate-300"
          }`}
        />
      </span>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 tabular-nums">
        {val.duration}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          aria-hidden="true"
          className="font-roboto-slab text-sm font-bold tabular-nums text-[#0c7fb0]/25"
        >
          0{index + 1}
        </span>
        <h3 className="font-roboto-slab text-2xl font-bold tracking-tight text-[#0b2230] md:text-[26px]">
          {val.role}
        </h3>
      </div>

      <h4 className="mt-2 flex items-center gap-2 font-roboto text-base font-semibold text-[#0863bf]">
        <span aria-hidden="true" className="h-px w-6 bg-[#0863bf]/40" />
        {val.company}
      </h4>

      <ul className="mt-4 space-y-2.5 first:mt-0">
        {val.description.map((item, idx) => (
          <li key={idx} className="flex gap-3 leading-relaxed text-gray-600">
            <span
              aria-hidden="true"
              className="mt-[10px] h-px w-4 shrink-0 bg-[#0c7fb0]/50"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default memo(ExperienceInfo);