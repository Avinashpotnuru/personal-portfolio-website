import CertificateCard from "../CertificateCard";

import { certificateData } from "@/src/Data";

const CourseCertificate = () => {
  return (
    <div className="w-[95%] mx-auto py-8">
      <div className="flex flex-col items-center justify-center mb-6 md:my-8">
        <span className="section-kicker mb-2">Credentials</span>
        <h1 className="text-3xl md:text-5xl font-bold text-[#0863bf] text-center font-roboto-slab">
          My Certificates
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 my-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificateData.map((item, idx) => (
          <CertificateCard key={idx} data={item} id={idx} />
        ))}
      </div>
    </div>
  );
};

export default CourseCertificate;
