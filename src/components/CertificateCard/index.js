// third party imports
import { motion } from "framer-motion";
import Image from "next/image";

const CertificateCard = ({ data, id }) => {
  const animationDelay = id * 0.08;
  const animationDuration = 0.6;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: animationDelay, duration: animationDuration }}
      className="card h-[330px] sm:h-auto lg:h-[320px]"
    >
      <Image
        width={500}
        height={500}
        src={`/certificates/certificate${id + 1}.jpeg`}
        alt=""
        loading="lazy"
      />

      <div className="flex flex-col items-center justify-center mx-auto info">
        <h1 className="my-5 text-2xl font-bold text-center text-black font-Lexend">
          {data?.name}
        </h1>

        <a
          href={data?.link}
          target="_blank"
          className="text-black duration-500 hover:font-medium hover:border-t-2 hover:border-b-2 hover:py-1 hover:border-black hover:transition-all"
        >
          Certification Link
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
