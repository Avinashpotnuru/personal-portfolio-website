import React from "react";

const ProjectsFilter = dynamic(
  () => import("@/src/components/ProjectsFilter"),
  { ssr: false },
  { loading: () => <p>Loading...</p> }
);

import Fade from "@/src/components/Fade";
import dynamic from "next/dynamic";

const ProjectsPage = () => {
  return (
    <Fade>
      <div className="mt-20">
        <ProjectsFilter />
      </div>
    </Fade>
  );
};

export default ProjectsPage;
