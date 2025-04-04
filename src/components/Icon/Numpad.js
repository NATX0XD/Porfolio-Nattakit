import React from "react";

const NumpadIcon = () => {
  const colorSvg = "currentColor";
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 104 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="14" height="18" rx="8" fill="#F3F4F6" fillOpacity="0.1" />
      <circle cx="22" cy="26" r="10" fill={colorSvg} />
      <circle cx="52" cy="26" r="10" fill={colorSvg} />
      <circle cx="82" cy="26" r="10" fill={colorSvg} />
      <circle cx="22" cy="56" r="10" fill={colorSvg} />
      <circle cx="52" cy="56" r="10" fill={colorSvg} />
      <circle cx="82" cy="56" r="10" fill={colorSvg} />
      <circle cx="22" cy="86" r="10" fill={colorSvg} />
      <circle cx="52" cy="86" r="10" fill={colorSvg} />
      <circle cx="82" cy="86" r="10" fill={colorSvg} />
      <circle cx="52" cy="116" r="10" fill={colorSvg} />
    </svg>
  );
};

export default NumpadIcon;
