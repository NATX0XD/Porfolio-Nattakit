import { HiHome, HiUser, HiAcademicCap, HiCog } from "react-icons/hi";
import { LuBadgeCheck } from "react-icons/lu";

const Navigations = [
  {
    key: "/about",
    label: "About",
    icon: <HiUser />,
  },
  {
    key: "/certifications",
    label: "Certifications",
    icon: <LuBadgeCheck />,
  },
  {
    key: "/education",
    label: "Education",
    icon: <HiAcademicCap />,
  },
  {
    key: "/project",
    label: "Project",
    icon: <HiCog />,
  },
];
export default Navigations;

//   {
//     name: "Experience",
//     src: "/experience",
//     icon: <HiBriefcase />,
//   },
//   {
//     name: "Contact",
//     src: "/contact",
//     icon: <HiMail />,
//   },
