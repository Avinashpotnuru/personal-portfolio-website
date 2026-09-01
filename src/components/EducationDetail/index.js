import { memo } from "react";
import { FaSchool, FaCalendarAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import Reveal from "../Reveal";
import { TiLocation } from "react-icons/ti";

const EducationDetailComponent = ({ val, idx }) => (
  <Reveal
    delay={(idx % 3) * 0.08}
    className="group flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
  >
    <div className="flex items-start gap-4 sm:gap-5">
      <span
        aria-hidden="true"
        className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eef6fb] text-[#0c7fb0] transition-colors duration-300 group-hover:bg-[#0c7fb0] group-hover:text-white"
      >
        <FaSchool
          size={20}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      </span>

      <div>
        <h3 className="text-lg font-bold text-[#0b2230] font-roboto-slab transition-colors duration-300 group-hover:text-[#0863bf]">
          {val.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-gray-600">
          <HiAcademicCap
            aria-hidden="true"
            className="shrink-0 text-[#0c7fb0]"
          />
          {val.course}
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
          <TiLocation aria-hidden="true" className="shrink-0 text-[#0c7fb0]" />
          {val.location}
        </p>
      </div>
    </div>

    <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold tabular-nums text-gray-500 transition-colors duration-300 group-hover:border-[#0c7fb0]/30 group-hover:bg-[#eef6fb] group-hover:text-[#0863bf] sm:self-center">
      <FaCalendarAlt aria-hidden="true" className="text-[#0c7fb0]" />
      {val.duration}
    </span>
  </Reveal>
);

const EducationDetail = memo(EducationDetailComponent);
export default EducationDetail;