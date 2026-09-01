import React, { memo } from "react";

import { experienceData } from "@/src/Data";
import Reveal from "../Reveal";
import ExperienceInfo from "../ExperienceInfo";

const rolesCount = experienceData.length;

const ExperienceComponent = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10 md:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <span className="section-kicker mb-3">Career</span>
          </Reveal>
          <Reveal
            as="h1"
            className="mt-3 text-3xl font-bold tracking-tight text-[#0863bf] font-roboto-slab md:text-5xl"
          >
            Experience<span className="text-[#0c7fb0]">.</span>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 tabular-nums"
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-slate-300"
          />
          {rolesCount} Roles &middot; 5+ Years
        </Reveal>
      </div>

      <div className="relative mt-12 md:mt-16">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-4 top-2 w-px bg-gradient-to-b from-[#0c7fb0]/50 via-slate-200 to-transparent lg:left-5"
        />
        {experienceData.map((val, index) => (
          <ExperienceInfo key={val.id} val={val} index={index} />
        ))}
      </div>
    </section>
  );
};

const Experience = memo(ExperienceComponent);

export default Experience;