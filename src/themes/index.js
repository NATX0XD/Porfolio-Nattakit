import { App, ConfigProvider, theme } from "antd";
import Palette from "./palette";
import Components from "./components";
import Breakpoints from "./breakpoint";
import thTH from "antd/lib/locale/th_TH";
import enUS from "antd/lib/locale/en_US";
import React from "react";
import localFont from "next/font/local";
const miSansThai = localFont({
  src: [
    {
      path: "../fonts/MiSansLatin-Normal.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/MiSansThai.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

const ThemeComponent = ({ children, mode, settings }) => {
  const palette = Palette(settings?.palette, mode);
  const { darkAlgorithm, defaultAlgorithm } = theme;
  const themes = {
    token: {
      ...palette,
      ...Breakpoints(),
      fontFamily: miSansThai.style.fontFamily,
    },
    components: Components({ mode }),
    algorithm: mode === "Dark" ? darkAlgorithm : defaultAlgorithm,
  };
  return (
    <ConfigProvider
      theme={themes}
      locale={settings.locale === "th" ? thTH : enUS}
    >
      <App component={false} notification={{ placement: "bottomRight" }}>
        {children}
      </App>
    </ConfigProvider>
  );
};

export default ThemeComponent;
