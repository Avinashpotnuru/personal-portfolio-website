import { notFound } from "next/navigation";
import { pages } from "@/src/Data";
import Fade from "@/src/components/Fade";
import ProjectDetailPage from "@/src/components/ProjectDetailPage";

const slugToPage = {
  "todo-list": pages.todolist,
  movieszone: pages.moviesZone,
  "movies-app": pages.moviesApp,
  restaurant: pages.RestaurantWebsite,
  "food-munch": pages.FoodMunch,
  "type-master": pages.typeMaster,
  portfolio: pages.portfolio,
  "react-todolist": pages.reacttodolist,
  "cine-wave": pages.cineWave,
  "rc-parish": pages.rcParish,
};

export function generateStaticParams() {
  return Object.keys(slugToPage).map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = slugToPage[id];

  if (!data) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: data.title,
    description: data.description?.replace(/\s+/g, " ").trim().slice(0, 155),
  };
}

const ProjectInfoPage = ({ params }) => {
  const { id } = params;
  const data = slugToPage[id];

  if (!data) {
    notFound();
  }

  return (
    <Fade>
      <div>
        <ProjectDetailPage data={data} pageName={id} />
      </div>
    </Fade>
  );
};

export default ProjectInfoPage;