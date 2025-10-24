import { memo } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openContactPopup } from "@/src/store/slices/popup";
import { motion } from "framer-motion";

const iconVariants = { hover: { scale: 1.2, y: -5, color: "blue" } };
const cardIconVariants = {
  hover: { scale: 0.7, rotateX: 360, transition: { duration: 0.8 } },
};

const contactInfo = [
  { icon: FaUserAlt, label: "Avinash Potnuru" },
  { icon: MdCall, label: "8919016096" },
  { icon: HiOutlineMail, label: "potnuruavinash111@gmail.com" },
];

const socialLinks = [
  { icon: BsGithub, href: "https://github.com/Avinashpotnuru" },
  { icon: BsLinkedin, href: "https://www.linkedin.com/in/avinash-potnuru/" },
  { icon: BsInstagram, href: "https://www.instagram.com/potnuru_avinash/" },
  { icon: BsFacebook, href: "https://www.facebook.com/avinash.potnuru.18" },
];

const Contact = () => {
  const dispatch = useDispatch();

  return (
    <div className="px-3 md:w-[90%] md:mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1 }}
        className="text-2xl md:text-5xl font-bold text-[#0863bf] text-center mb-5 md:my-10 font-roboto-slab"
      >
        Get in touch
      </motion.h1>

      <div className="grid grid-cols-2 gap-4 mb-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-y-10 lg:gap-y-14">
        {contactInfo.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, x: "-100vh" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.8 + i * 0.2 }}
            className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5"
          >
            <motion.div
              variants={cardIconVariants}
              whileHover="hover"
              className="my-5"
            >
              <Icon size={window.innerWidth < 640 ? 30 : 50} />
            </motion.div>
            <h1 className="font-bold text-center sm:text-xl font-roboto">
              {label}
            </h1>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-100vh" }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 1.4 }}
          className="bg-[#e1e1e1] shadow-md flex flex-col justify-center items-center py-5"
        >
          <h1 className="my-4 font-semibold text-center sm:text-xl font-roboto">
            Follow
          </h1>
          <div className="flex justify-around items-center py-5 w-full sm:w-[60%]">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
              >
                <Icon size={25} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center my-3">
        <button
          onClick={() => dispatch(openContactPopup())}
          className="contact"
        >
          Contact US
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
        </button>
      </div>
    </div>
  );
};

export default memo(Contact);
