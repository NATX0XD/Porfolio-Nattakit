import React from "react";

const BackspaceIcon = ({background = "#fff", color = "#000"}) => {
  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 104 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="36" height="32" rx="8" fill="#F3F4F6" fillOpacity="0.1" /> */}

      <path
        d="M20 66L40 46H94C96.2091 46 98 47.7909 98 50V82C98 84.2091 96.2091 86 94 86H40L20 66Z"
        fill={background}
      />

      <line
        x1="57"
        y1="56"
        x2="77"
        y2="76"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="77"
        y1="56"
        x2="57"
        y2="76"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BackspaceIcon;
