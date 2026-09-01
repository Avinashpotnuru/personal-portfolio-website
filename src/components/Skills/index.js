import React, { memo } from "react";

import Reveal from "../Reveal";
import Image from "next/image";
import { skillsData } from "@/src/Data";

const skillsCount = Array.isArray(skillsData) ? skillsData.length : 0;

const SkillsComponent = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10 md:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <span className="section-kicker mb-3">Capabilities</span>
          </Reveal>
          <Reveal
            as="h1"
            className="mt-3 text-3xl font-bold tracking-tight text-[#0863bf] font-roboto-slab md:text-5xl"
          >
            Technical Skills<span className="text-[#0c7fb0]">.</span>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 tabular-nums"
        >
          <span aria-hidden="true" className="h-px w-8 bg-slate-300" />
          {skillsCount} Tools &amp; Technologies
        </Reveal>
      </div>

      <Reveal className="skill-grid mt-10 md:mt-16">
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5">
          {Array.isArray(skillsData) && skillsData.length > 0
            ? skillsData.map((item, idx) => (
                <div
                  key={idx}
                  style={{ "--i": Math.min(idx, 9) }}
                  className="skill-tile group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef6fb] p-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Image
                      width={40}
                      height={40}
                      src={`/skills/skills${idx + 1}.png`}
                      alt={item}
                      loading="lazy"
                      sizes="40px"
                      className="h-auto w-auto object-contain"
                    />
                  </span>
                  <span className="text-center text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#0863bf]">
                    {item}
                  </span>
                </div>
              ))
            : null}
        </div>
      </Reveal>
    </section>
  );
};

const Skills = memo(SkillsComponent);

export default Skills;