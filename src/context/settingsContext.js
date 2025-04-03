"use client";
import themeConfig from "@/configurations/theme/themeConfig";
import {
  getSettingsStorage,
  setSettingsStorage,
} from "@/helpers/settingsStorage";
import { createContext, useState } from "react";

const settings = getSettingsStorage();

if (settings === null) {
  setSettingsStorage(themeConfig);
}

export const SettingsContext = createContext({
  settings: getSettingsStorage(),
  saveSettings: () => null,
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({ ...getSettingsStorage() });

  const saveSettings = (updateSettings) => {
    if (updateSettings?.reset) {
      setSettingsStorage({
        ...themeConfig,
        autoNative: updateSettings.autoNative,
      });
    } else {
      setSettingsStorage(updateSettings);
    }
    setSettings(getSettingsStorage());
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
export const SettingsConsumer = SettingsContext.Consumer;
