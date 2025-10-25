
import { motion } from "framer-motion";
const ExperienceInfo = ({ val, index }) => (
  <motion.div
    initial={{
      scale: 0,
      opacity: 0,
      translateX: index % 2 == 1 ? "-100vh" : "100vh",
    }}
    whileInView={{ scale: 1, opacity: 1, translateX: 0 }}
    transition={{ delay: 0.8, duration: 1.1 }}
    key={val.id}
    className="px-4 py-5 mx-4 border-2 border-gray-400 rounded-md"
  >
    <h1 className="text-[23px] font-bold my-2 text-[#0863bf]">{val.role}</h1>
    <h1 className="my-2 text-xl font-medium">{val.company}</h1>
    <h1 className="my-2 text-base font-medium">{val.duration}</h1>
    <ul className="mx-4 text-gray-700 list-disc ">
      {val.description.map((item, idx) => (
        <li className="my-2" key={idx}>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceInfo;
