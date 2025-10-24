import Fade from "@/src/components/Fade";
import dynamic from "next/dynamic";
import React from "react";

const FullDetails = dynamic(() => import("@/src/components/FullDeatils"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MyDetails = dynamic(() => import("@/src/components/MyDetails"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const AboutPage = () => {
  return (
    <Fade>
      <div className="mt-24">
        <MyDetails />
        <FullDetails />
      </div>
    </Fade>
  );
};

export default AboutPage;
