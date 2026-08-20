import Fade from "@/src/components/Fade";
import ProjectsFilter from "@/src/components/ProjectsFilter";

export const metadata = {
  title: "Projects",
  description:
    "Explore the projects built by Avinash Potnuru using React.js, Next.js, TypeScript, Tailwind CSS, and modern web technologies.",
};

const ProjectsPage = () => {
  return (
    <Fade>
      <div className="mt-20 overflow-hidden">
        <ProjectsFilter />
      </div>
    </Fade>
  );
};

export default ProjectsPage;