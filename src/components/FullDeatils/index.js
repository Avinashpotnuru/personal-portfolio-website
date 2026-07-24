import dynamic from "next/dynamic";
import React, { useCallback, useState,useMemo } from "react";
import Loader from "../Loader";

const Experience = dynamic(() => import("../Experience"), {
  loading: () => <Loader />,
});

const Skills = dynamic(() => import("../Skills"), {
  loading: () => <Loader />,
});

const Education = dynamic(() => import("../Education"), {
  loading: () => <Loader />,
});

const TabButton = dynamic(() => import("../TabButton"), {
  loading: () => <Loader />,
});

const tabs = [
  { id: 1, label: "Experience", component: <Experience /> },
  { id: 2, label: "Skills", component: <Skills /> },
  { id: 3, label: "Education", component: <Education /> },
];

const FullDetails = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

   const tabComponents = useMemo(() => {
    return tabs.reduce((acc, tab) => {
      acc[tab.id] = tab.component;
      return acc;
    }, {});
  }, []);

  const handleTabClick = useCallback((index) => {
    setSelectedTabIndex(index);
  }, []);

  return (
    <div className="py-5">
      <div className="flex justify-around items-center w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] mx-auto">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            label={tab.label}
            index={tab.id}
            activeTab={selectedTabIndex}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="tab-content">{tabComponents[selectedTabIndex]}</div>
    </div>
  );
};

export default FullDetails;
