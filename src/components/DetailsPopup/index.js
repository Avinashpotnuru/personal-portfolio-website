"use client";

import { useState } from "react";
// import axios from "axios";
import Modal from "../UI/Model";
import emailjs from "@emailjs/browser";

// third party imports
import { AiOutlineClose } from "react-icons/ai";
import { closeDetailsPopup } from "@/src/store/slices/popup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";

const DetailsPopup = () => {
  const dispatch = useDispatch();
  const [isToggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const detailToggle = useSelector(
    (state) => state.popSlice.detailsPopup.status
  );

  const details = useSelector(
    (state) => state.popSlice.detailsPopup.helperData
  );

 
const postToBackend = () => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error(
        "Email service is not configured. Please add the EmailJS environment variables and redeploy."
      );
      return;
    }

    if (!details) {
      toast.error("No contact details found. Please fill in the form again.");
      return;
    }

    setLoading(true);
    emailjs
      .send(serviceID, templateID, details, { publicKey })
      .then(
        (result) => {
          setLoading(false);
          if (result.status === 200 && result.text === "OK") {
            toast.success("Details sent successfully");
            setToggle(true);
          } else {
            toast.error("Something went wrong");
          }
        },
        (error) => {
          setLoading(false);
          console.warn(error);
          toast.error(error?.text || "Failed to send details");
        },
      );
  };
  const detailList = [
    { label: "Name", value: details?.firstName },
    { label: "Email", value: details?.email },
    { label: "Phone Number", value: details?.number },
    { label: "Message", value: details?.message },
  ];

  return (
    <Modal
      isOpen={detailToggle}
      parentClasses={"flex justify-center items-center  w-full m-auto"}
    >
      <div className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg h-[450px] w-[80%] sm:w-[50%] lg:w-[30%]  relative">
        <div
          onClick={() => {
            dispatch(closeDetailsPopup());
            setToggle(false);
          }}
          className="absolute bg top-4 right-4 sm:top-7 sm:right-7"
        >
          <AiOutlineClose />
        </div>

        <div className="p-6 sm:p-4 mx-auto w-[80%]">
          {!isToggle ? (
            <>
              <h2 className="mb-4 text-xl font-bold text-center"> Details</h2>
              <dl>
                {detailList.map(({ label, value }) => (
                  <div className="mb-4" key={label}>
                    <dt className="font-bold">{label}:</dt>
                    <dd className="text-gray-800">{value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-center">
                  <button onClick={postToBackend} className="submitbutton">
                    {loading ? "Sending..." : "Confirm Details"}
                  </button>
                </div>
              </dl>
            </>
          ) : (
            <Image
            className="mx-auto"
              width={200}
              height={200}
              priority
              alt="img1"
              src="https://t3.ftcdn.net/jpg/02/91/52/22/360_F_291522205_XkrmS421FjSGTMRdTrqFZPxDY19VxpmL.jpg"
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default DetailsPopup;
