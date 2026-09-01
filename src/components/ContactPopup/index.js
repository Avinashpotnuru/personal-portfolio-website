// third party imports

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI/Model";
import { AiOutlineClose } from "react-icons/ai";

import { closeContactPopup, openDetailsPopup } from "@/src/store/slices/popup";
import TextContainer from "../TextAnimationContainer";

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
      <div className="relative bg-white w-[95%] min-h-[90%] sm:h-auto max-h-[92vh] overflow-y-auto sm:w-[500px] flex flex-col justify-center items-center rounded-2xl shadow-2xl border border-slate-200">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close contact form"
          className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-[#0863bf] hover:scale-110 transition-all duration-200 p-2"
        >
          <AiOutlineClose aria-hidden="true" />
        </button>
        <TextContainer
          text="Contact Us"
          className="text-3xl my-6 font-bold text-[#0863bf] font-roboto-slab"
        />

        <form
          className="flex flex-col justify-center items-center w-[85%] pb-8"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col w-full">
            <label
              className="block my-3 text-sm font-semibold text-gray-700"
              htmlFor="firstName"
            >
              FULL NAME
            </label>
            <input
              id="firstName"
              type="text"
              aria-invalid={errors.firstName ? "true" : "false"}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className="w-full px-3 py-2.5 leading-tight text-gray-800 border rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0c7fb0]/50 focus:border-[#0c7fb0] transition-all"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              placeholder="First name"
            />
            {errors.firstName && (
              <p id="firstName-error" role="alert" className="my-1 font-semibold text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label
              className="block my-3 text-sm font-semibold text-gray-700"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-3 py-2.5 leading-tight text-gray-800 border rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0c7fb0]/50 focus:border-[#0c7fb0] transition-all"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="my-1 font-semibold text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              className="block my-3 text-sm font-semibold text-gray-700"
              htmlFor="number"
            >
              PHONE NUMBER
            </label>

            <input
              id="number"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              aria-invalid={errors.number ? "true" : "false"}
              aria-describedby={errors.number ? "number-error" : undefined}
              className="w-full px-3 py-2.5 leading-tight text-gray-800 border rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0c7fb0]/50 focus:border-[#0c7fb0] transition-all"
              {...register("number", {
                required: "Phone number is required",
                validate: validatePhoneNumber,
              })}
              maxLength={10}
              placeholder="Enter your phone number"
            />

            {errors.number && (
              <p id="number-error" role="alert" className="my-1 font-semibold text-red-600">
                {errors.number.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label
              className="block my-3 text-sm font-semibold text-gray-700"
              htmlFor="message"
            >
              MESSAGE
            </label>

            <textarea
              id="message"
              rows={4}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full px-3 py-2.5 leading-tight text-gray-800 border rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0c7fb0]/50 focus:border-[#0c7fb0] transition-all"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
              })}
              placeholder="Enter your Message"
            />

            {errors.message && (
              <p id="message-error" role="alert" className="my-1 font-semibold text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <button type="submit" className="submitbutton">Send Message</button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactPopup;
