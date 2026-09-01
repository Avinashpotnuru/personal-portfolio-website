import { educationDetails } from "@/src/Data";
import Reveal from "../Reveal";
import EducationDetail from "../EducationDetail";
import { memo } from "react";

const educationCount = educationDetails.length;

const EducationComponent = () => {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10 md:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <span className="section-kicker mb-3">Background</span>
          </Reveal>
          <Reveal
            as="h1"
            className="mt-3 text-3xl font-bold tracking-tight text-[#0863bf] font-roboto-slab md:text-5xl"
          >
            Education Details<span className="text-[#0c7fb0]">.</span>
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 tabular-nums"
        >
          <span aria-hidden="true" className="h-px w-8 bg-slate-300" />
          {educationCount} Credentials
        </Reveal>
      </div>

      <Reveal
        delay={0.05}
        className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8 md:mt-16"
      >
        <div className="divide-y divide-slate-100">
          {educationDetails.map((val, index) => (
            <EducationDetail val={val} idx={index} key={index} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

const Education = memo(EducationComponent);

export default Education;