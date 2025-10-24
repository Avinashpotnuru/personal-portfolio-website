// third party imports

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Model";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import { closeContactPopup, openDetailsPopup } from "@/src/store/slices/popup";
import TextContainer from "../TextAnimationContainer";

const inputVariants = {
  hidden: {
    x: "-200vh",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.9,
      duration: 0.8,
    },
  },
};

const ContactPopup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const [, setData] = useState("");
  const contactToggle = useSelector(
    (state) => state.popSlice.contactPopup.status
  );

  const validatePhoneNumber = (value) => {
    const phoneNumber = value?.replace(/[^0-9]/g, "");
    return phoneNumber?.length === 10 || "Phone number must be 10 digits";
  };

  const onSubmit = (data) => {
    setData(data);
    dispatch(openDetailsPopup(data));
    dispatch(closeContactPopup());
    reset();
  };

  const handleClose = () => {
    dispatch(closeContactPopup());
    reset();
  };

  return (
    <Modal
      parentClasses={" flex justify-center items-center  w-full m-auto"}
      isOpen={contactToggle}
    >
      <div className="relative bg-slate-200   w-[95%] min-h-[90%] sm:h-[500px] sm:w-[500px] flex flex-col justify-center items-center">
        <div
          onClick={handleClose}
          className="absolute  top-7 right-7 hover:text-[20px]"
        >
          <AiOutlineClose />
        </div>
        <TextContainer
          text="Contact Us"
          className="text-3xl my-6 font-bold text-[#0863bf] "
        />

        <form
          className="flex flex-col justify-center items-center  w-[80%]  "
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col w-full ">
            <label
              className="block my-3 text-sm font-bold text-gray-700"
              for="firstName"
            >
              FULL NAME
            </label>
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              type="text"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="First name"
              aria-label="Full Name"
            />
            <p className="my-1 font-semibold text-red-600">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="flex flex-col w-full ">
            <label className="block my-3 text-sm font-bold text-gray-700">
              EMAIL
            </label>
            <motion.input
              variants={inputVariants}
              type="email"
              initial="hidden"
              animate="visible"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email formate",
                },
              })}
              placeholder="Enter your Email"
            />
            <p className="my-1 font-semibold text-red-600">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col w-full ">
            <label className="block my-3 text-sm font-bold text-gray-700">
              PHONE NUMBER
            </label>

            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("number", {
                required: "Phone number is required",
                validate: validatePhoneNumber,
              })}
              maxLength={10}
              placeholder="Enter your phone number"
            />

            {errors.number && (
              <p className="my-1 font-semibold text-red-600">
                {errors.number.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full ">
            <label className="block my-3 text-sm font-bold text-gray-700">
              MESSAGE
            </label>

            <motion.textarea
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
              placeholder="Enter your Message"
            />

            <p className="my-1 font-semibold text-red-600">
              {errors.message?.message}
            </p>
          </div>

          <input className="submitbutton " type="submit" />
        </form>
      </div>
    </Modal>
  );
};

export default ContactPopup;
