import React, { Suspense } from "react";
import LoadingSetting from "./loading";
import CardSettingView from "@/view/setting";

const page = () => {
  return (
    <Suspense fallback={<LoadingSetting />}>
      <CardSettingView />
    </Suspense>
  );
};

export default page;
