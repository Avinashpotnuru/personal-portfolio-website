import { memo } from "react";
import { FaSchool, FaCalendarAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { motion } from "framer-motion";
import { TiLocation } from "react-icons/ti";

const EducationDetailComponent = ({ val, idx }) => (
  <motion.div
    initial={{ x: "-100vh" }}
    animate={{ x: 0 }}
    transition={{ duration: 0.7, delay: idx * 0.4 }}
    key={idx}
    className="p-3"
  >
    <div className="flex items-center my-2 lg:my-3">
      <FaSchool className="sm:text-[30px] mx-4" />
      <h1 className="text-[#0863bf] font-bold font-roboto-slab text-lg sm:text-xl">
        {val.name}
      </h1>
    </div>
    <div className="flex items-center">
      <FaCalendarAlt className="sm:text-[30px] mx-4" />
      <h1>{val.duration}</h1>
    </div>
    <div className="flex items-center my-2 lg:my-3">
      <HiAcademicCap className="sm:text-[30px] mx-4" />
      <h1 className="text-base font-semibold sm:text-lg">{val.course}</h1>
    </div>
    <div className="flex items-center">
      <TiLocation className="sm:text-[30px] mx-4" />
      <h1>{val.location}</h1>
    </div>
  </motion.div>
);

const EducationDetail = memo(EducationDetailComponent);
export default EducationDetail;
