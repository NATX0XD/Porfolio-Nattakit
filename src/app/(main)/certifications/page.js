import React, { Suspense } from "react";
import CardCertificationsView from "@/view/Certifications";
import LoadingCertifications from "./loading";

const page = () => {
  return (
    <Suspense fallback={<LoadingCertifications />}>
      <CardCertificationsView />
    </Suspense>
  );
};

export default page;
