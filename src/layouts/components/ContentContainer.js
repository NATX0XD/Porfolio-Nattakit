import { useSettings } from "@/hook/useSettings";
import Breakpoints from "@/themes/breakpoint";
import { Grid, Layout } from "antd";
import { useEffect } from "react";

const ContentContainer = ({ children }) => {
  const { settings, saveSettings } = useSettings();
  const { useBreakpoint } = Grid;
  const mediaQuery = useBreakpoint();
  const { breakpoints } = Breakpoints();

  useEffect(() => {
    saveSettings({ ...settings, autoNative: !mediaQuery.lg ? true : false });
  }, [mediaQuery]);

  return (
    <Layout
      style={{
        width: "calc(100% - 10px)",
        maxWidth: breakpoints["screenLG"], //settings?.contentWidth
      }}
    >
      {children}
    </Layout>
  );
};

export default ContentContainer;
