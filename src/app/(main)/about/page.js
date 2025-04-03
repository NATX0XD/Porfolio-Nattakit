import React, { Suspense } from "react";
import LoadingAbout from "./loading";
import CardAboutView from "@/view/About";

const page = () => {
  return (
    <Suspense fallback={<LoadingAbout />}>
      <CardAboutView />
    </Suspense>
  );
};

export default page;
