import Loader from "@/src/components/Loader";
import dynamic from "next/dynamic";

const CourseCertificate = dynamic(
  () => import("@/src/components/CourseCertificate"),
  { ssr: false, loading: () => <Loader /> }
);

const CourseCertificates = () => {
  return (
    <div className="mt-24 overflow-hidden">
      <CourseCertificate />
    </div>
  );
};

export default CourseCertificates;
