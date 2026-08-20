import Fade from "@/src/components/Fade";
import FullDeatils from "@/src/components/FullDeatils";
import MyDetails from "@/src/components/MyDetails";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Avinash Potnuru, a Frontend Developer with 5+ years of experience crafting responsive, accessible, and user-friendly web interfaces using React.js, Next.js, TypeScript, and JavaScript.",
};

const AboutPage = () => {
  return (
    <Fade>
      <div className="">
        <MyDetails />
        <FullDeatils />
      </div>
    </Fade>
  );
};

export default AboutPage;