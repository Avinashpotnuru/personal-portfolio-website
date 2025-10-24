import dynamic from "next/dynamic";



const CourseCertificate = dynamic(
  () => import("@/src/components/CourseCertificate"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const CourseCertificates = () => {
  return (
    <div className="mt-24 overflow-hidden">
      <CourseCertificate />
    </div>
  );
};

export default CourseCertificates;
