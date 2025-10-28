import React, { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { pages } from "@/src/Data";

const Fade = dynamic(() => import("@/src/components/Fade"), { ssr: false });

const ProjectDetailPage = dynamic(
  () => import("@/src/components/ProjectDetailPage"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const ProjectInfoPages = () => {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");

  const pageToRender = useMemo(
    () => ({
      "todo-list": pages?.todolist,
      movieszone: pages?.moviesZone,
      "movies-app": pages?.moviesApp,
      restaurant: pages?.RestaurantWebsite,
      "food-munch": pages?.FoodMunch,
      "type-master": pages?.typeMaster,
      portfolio: pages?.portfolio,
      "react-todolist": pages?.reacttodolist,
    }),
    []
  );

  useEffect(() => {
    if (!id) return;
    if (!pageToRender[id]) {
      router.push("/");
    }
  }, [id, router, pageToRender]);

  if (!pageToRender[id]) return null;

  return (
    <Fade>
      <div className="mt-24 min-h-[60vh]">
        {pageToRender[id] ? (
          <ProjectDetailPage data={pageToRender[id]} pageName={id} />
        ) : (
          <p>Page Not Found</p>
        )}
      </div>
    </Fade>
  );
};

export default ProjectInfoPages;
