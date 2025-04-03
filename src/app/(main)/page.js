"use client";

import React from "react";
import loadingHome from "./loadingHome";
import dynamic from "next/dynamic";
const CardHomeField = dynamic(() => import("@/view/Home/"), {
  ssr: false,
  loading: loadingHome,
});
const page = () => {
  return <CardHomeField />;
};

export default page;
