import CardEducationsView from "@/view/Education";
import React, { Suspense } from "react";
import LoadingEducations from "./loading";

const page = () => {
  return (
    <Suspense fallback={<LoadingEducations />}>
      <CardEducationsView />
    </Suspense>
  );
};

export default page;
