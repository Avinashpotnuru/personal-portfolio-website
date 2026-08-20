import CourseCertificate from "@/src/components/CourseCertificate";

export const metadata = {
  title: "Course Certificates",
  description:
    "Certifications earned by Avinash Potnuru in full-stack development, React.js, responsive web design, and more.",
};

const CourseCertificates = () => {
  return (
    <div className="overflow-hidden">
      <CourseCertificate />
    </div>
  );
};

export default CourseCertificates;