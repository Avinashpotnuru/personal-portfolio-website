import Contact from "@/src/components/Contact";
import Fade from "@/src/components/Fade";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Avinash Potnuru for collaboration, opportunities, or any inquiries.",
};

const ContactUsPage = () => {
  return (
    <Fade>
      <div className="min-h-[65vh] w-full">
        <Contact />
      </div>
    </Fade>
  );
};

export default ContactUsPage;