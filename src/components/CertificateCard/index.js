// third party imports
import { motion } from "framer-motion";
import { memo } from "react";
import Image from "next/image";

const CertificateCard = ({ data, id }) => {
  const ANIMATION_DELAY_MULTIPLIER = 0.08;
  const IMAGE_DIMENSIONS = 500;
  const ANIMATION_DURATION = 0.5; // Assuming this was defined elsewhere

  // Simple calculation without useMemo
  const getAnimationDelay = (id) => id * ANIMATION_DELAY_MULTIPLIER;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: getAnimationDelay(id),
        duration: ANIMATION_DURATION,
      }}
      className="card h-[330px] sm:h-auto lg:h-[320px]"
    >
      <Image
        width={IMAGE_DIMENSIONS}
        height={IMAGE_DIMENSIONS}
        src={`/certificates/certificate${id + 1}.jpeg`}
        alt={data?.name || "Certificate"}
        priority={id === 0}
        loading={id === 0 ? undefined : "lazy"}
      />

      <div className="flex flex-col items-center justify-center mx-auto info">
        <h1 className="my-5 text-2xl font-bold text-center text-black font-Lexend">
          {data?.name || "Certificate Name"}
        </h1>

        <a
          href={data?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black duration-500 hover:font-medium hover:border-t-2 hover:border-b-2 hover:py-1 hover:border-black hover:transition-all"
          aria-label={`View ${data?.name || "Certificate"} details`}
        >
          Certification Link
        </a>
      </div>
    </motion.div>
  );
};

export default memo(CertificateCard);
