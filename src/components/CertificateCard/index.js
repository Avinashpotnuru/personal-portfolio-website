// third party imports
import { memo } from "react";
import Image from "next/image";
import Reveal from "../Reveal";

const CertificateCard = ({ data, id }) => {
  const ANIMATION_DELAY_MULTIPLIER = 0.06;
  const IMAGE_DIMENSIONS = 500;

  return (
    <Reveal
      delay={id * ANIMATION_DELAY_MULTIPLIER}
      className="card h-[260px] sm:h-auto md:h-[250px] lg:h-[320px] xl:h-[250px] px-5"
    >
      <Image
        width={IMAGE_DIMENSIONS}
        height={IMAGE_DIMENSIONS}
        src={`/certificates/certificate${id + 1}.jpeg`}
        alt={data?.name || "Certificate"}
        priority={id === 0}
        loading={id === 0 ? undefined : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      <div className="flex flex-col items-center justify-center mx-auto info">
        <h1 className="my-5 text-xl font-bold text-center text-white font-Lexend">
          {data?.name || "Certificate Name"}
        </h1>

        <a
          href={data?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200"
          aria-label={`View ${data?.name || "Certificate"} details`}
        >
          Certification Link
        </a>
      </div>
    </Reveal>
  );
};

export default memo(CertificateCard);