"use client";
import { useSettings } from "@/hook/useSettings";
import ThemeComponent from "@/themes";
import { Layout } from "antd";
const { Content } = Layout;

const ErrorLayout = ({ children }) => {
  const { settings } = useSettings();
  const mode = settings?.mode === "Semi" ? "Light" : settings?.mode;
  return (
    <ThemeComponent  mode={mode} settings={settings}>
      <Layout style={{ height: "100dvh" }}>
        <Content>{children}</Content>
      </Layout>
    </ThemeComponent>
  );
};

export default ErrorLayout;
