import { SettingsProvider } from "@/context/settingsContext";

export const Providers = ({ children }) => {
  return <SettingsProvider>{children}</SettingsProvider>;
};
