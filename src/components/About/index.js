import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import TextContainer from "../TextAnimationContainer";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[95%] lg:w-[92%] mx-auto justify-center items-center my-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0, x: "100vh" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="order-2 p-5 mx-auto sm:w-1/2 sm:order-1 md:p-2"
      >
        <motion.h1
          whileHover={{ scale: 1.2, originX: 0 }}
          className="my-1 text-base font-semibold uppercase"
        >
          hello,
        </motion.h1>

        <TextContainer
          className="text-[#0863bf] typing-animation text-3xl font-roboto-slab   font-bold my-1 lg:text-[40px] lg:my-2"
          text="Avinash Potnuru"
        />

        <h1 className="my-1 text-xl font-medium lg:my-2">FrontEnd Developer</h1>
        <h1 className="my-1 text-base">
          Hi, I&apos;m Avinash Potnuru, a Frontend Developer with 5+ years of
          experience building fast, responsive, and user-focused web
          applications. I specialize in React.js, Next.js, TypeScript, Tailwind
          CSS, and Material UI, and I create clean, accessible UIs with a focus
          on performance and usability.
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center my-3 lg:w-[90%] lg:space-x-4  mx-auto ">
          <Link
            className="button-background-move w-[70%] lg:w-1/2  text-center  my-3 "
            href={"/contact-us"}
            passHref
          >
            <button>Contact Us</button>
          </Link>
          <a
            className="button-background-move w-[70%] lg:w-1/2 text-center  my-3"
            href="/AvinashPotnurufrontenddeveloper.docx"
            download
            rel="noopener noreferrer"
          >
            <button>Download Resume</button>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center justify-center order-1 sm:w-1/2 sm:order-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, staggerChildren: 0.08 }}
          className=" md:rounded-[50%] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px] flex justify-center items-center"
        >
          <Image
            src="/certificates/profile-pic1.png"
            alt="Profile picture"
            width={400}
            height={400}
            priority
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
