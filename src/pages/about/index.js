import Fade from "@/src/components/Fade";
import dynamic from "next/dynamic";
import React from "react";

const FullDetails = dynamic(() => import("@/src/components/FullDeatils"), {
 
  loading: () => <p>Loading...</p>,
});

const MyDetails = dynamic(() => import("@/src/components/MyDetails"), {
  
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
