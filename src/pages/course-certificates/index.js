import Loader from "@/src/components/Loader";
import dynamic from "next/dynamic";

const CourseCertificate = dynamic(
  () => import("@/src/components/CourseCertificate"),
  {  loading: () => <Loader /> }
);

const CourseCertificates = () => {
  return (
    <div className=" overflow-hidden">
      <CourseCertificate />
    </div>
  );
};

export default CourseCertificates;
