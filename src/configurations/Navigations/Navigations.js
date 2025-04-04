import { HiHome, HiUser, HiAcademicCap, HiCog } from "react-icons/hi";
import { LuBadgeCheck } from "react-icons/lu";

const Navigations = [
  {
    key: "/about",
    label: "About",
    icon: <HiUser style={{ color: "white" }} />,
  },
  {
    key: "/certifications",
    label: "Certifications",
    icon: <LuBadgeCheck style={{ color: "white" }} />,
  },
  {
    key: "/education",
    label: "Education",
    icon: <HiAcademicCap style={{ color: "white" }} />,
  },
  {
    key: "/project",
    label: "Project",
    icon: <HiCog style={{ color: "white" }} />,
  },
  {
    key: "/setting",
    label: "Setting",
    icon: <HiCog style={{ color: "white" }} />,
  },
];
export default Navigations;
