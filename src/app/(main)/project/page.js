import CardProjectsView from "@/view/Project";
import React, { Suspense } from "react";
import LoadingProjects from "./loading";

const page = () => {
  return (
    <Suspense fallback={<LoadingProjects />}>
      <CardProjectsView />
    </Suspense>
  );
};

export default page;
