import Fade from "@/src/components/Fade";
import Loader from "@/src/components/Loader";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/src/components/Contact"), {
 
  loading: () => <Loader />,
});

const ContactUsPage = () => {
  return (
    <Fade>
      <div className="min-h-[65vh] md:flex md:items-center md:justify-center w-full">
        <Contact />
      </div>
    </Fade>
  );
};

export default ContactUsPage;
