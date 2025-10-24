import Fade from "@/src/components/Fade";
import Loader from "@/src/components/Loader";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/src/components/Contact"), {
  ssr: false,
  loading: () => <Loader />,
});

const ContactUsPage = () => {
  return (
    <Fade>
      <div className="mt-24 ">
        <Contact />
      </div>
    </Fade>
  );
};

export default ContactUsPage;
