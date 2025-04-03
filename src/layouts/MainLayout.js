import ThemeComponent from "@/themes";
import { Breadcrumb, Col, Flex, FloatButton, Layout, Row } from "antd";
import Navbar from "@/components/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { useSettings } from "@/hook/useSettings";
import Navigations from "@/configurations/Navigations/Navigations";
import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import ContentContainer from "./components/ContentContainer";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Palette from "@/themes/palette";
import CardProfile from "@/components/CardProfile";
import CardMenu from "@/components/CardMenu";

const { Header, Content, Sider, Footer } = Layout;
const MainLayout = ({ children }) => {
  const { settings } = useSettings();
  const pathname = usePathname();
  const router = useRouter();
  const sidebarMode = settings.mode === "Semi" ? "Dark" : settings.mode;
  const contentMode = settings.mode === "Semi" ? "Light" : settings.mode;
  const currentPath = Navigations.find((nav) => nav.key === pathname);
  const [openSidebar, setOpenSidebar] = useState(false);
  const collapsedWidth =
    settings.navigationCollapse && !settings.navbar ? "80" : "0";
  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const breadcrumbItems = [
    {
      title: <HomeOutlined onClick={() => router.push("/")} />,
    },
  ];

  if (currentPath) {
    breadcrumbItems.push({ title: currentPath.label });
  }
  const handleChangeRoute = ({ key }) => {
    router.push(key);
  };
  const { mode } = settings;
  const palettes = Palette(settings?.palette, mode);
  return (
    <ThemeComponent settings={settings} mode={sidebarMode}>
      <div
        style={{
          background: `linear-gradient(135deg, ${palettes.primaryGradientStart} 0%, ${palettes.primaryGradientMiddle} 50%, ${palettes.primaryGradientEnd} 100%)`,
          // minHeight: "100vh",
          transition: "background 1.5s ease-in-out",
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          {!settings?.autoNative ? (
            <Sider
              trigger={null}
              width={230}
              collapsedWidth={collapsedWidth}
              collapsible
              collapsed={
                settings.navbar ||
                settings?.autoNative ||
                settings.navigationCollapse
              }
            >
              <Sidebar
                openSidebar={openSidebar}
                onCloseSidebar={handleCloseSidebar}
                onChangeRoute={handleChangeRoute}
              />
            </Sider>
          ) : (
            <Sidebar
              openSidebar={openSidebar}
              onCloseSidebar={handleCloseSidebar}
              onChangeRoute={handleChangeRoute}
            />
          )}
          <ThemeComponent
            settings={settings}
            mode={settings.navbar ? sidebarMode : contentMode}
          >
            <Layout>
              <Header
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 999,
                  display: "flex",
                  alignItems: "center",
                  background: " rgba(56, 56, 61, 0.6) ",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <Navbar
                  handleOpenSidebar={handleOpenSidebar}
                  onChangeRoute={handleChangeRoute}
                />
              </Header>
              <ThemeComponent settings={settings} mode={contentMode}>
                <Layout style={{ alignItems: "center" }}>
                  <ContentContainer>
                    <Content style={{ padding: "1.5rem 8px" }}>
                      {/* {pathname !== "/" && (
                        <Breadcrumb
                          items={breadcrumbItems}
                          style={{ marginBottom: 16 }}
                        />
                      )} */}
                      <Row gutter={[20, 20]}>
                        <Col xs={24} sm={24} md={8} lg={8} xxl={10}>
                          <Row
                            gutter={[20, 20]}
                            style={{
                              position: "sticky",
                              top: "75px",
                              zIndex: 888,
                            }}
                          >
                            <Col xs={24} sm={12} md={24} lg={24} xxl={24}>
                              <CardProfile />
                            </Col>
                            <Col xs={24} sm={12} md={24} lg={24} xxl={24}>
                              <CardMenu />
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24} sm={24} md={16} lg={16} xxl={14}>
                          <Flex vertical gap={20}>
                            {children}
                          </Flex>
                        </Col>
                      </Row>
                    </Content>
                    <Footer
                      style={{
                        fontSize: 12,
                        textAlign: "center",
                        background: "inherit",
                      }}
                    >
                      {`© ${new Date().getFullYear()}, ${
                        process.env.NEXT_PUBLIC_APP_NAME
                      }`}
                      {` by `}{" "}
                      <a target="_blank" href="www.google.com">
                        <b>Mr. Nattakit Jinakul </b>
                      </a>
                    </Footer>
                  </ContentContainer>
                </Layout>
              </ThemeComponent>
            </Layout>
          </ThemeComponent>
        </Layout>
      </div>
    </ThemeComponent>
    //   <div
    //   style={{
    //     background: `linear-gradient(135deg, ${palettes.primaryGradientStart} 0%, ${palettes.primaryGradientMiddle} 50%, ${palettes.primaryGradientEnd} 100%)`,
    //     minHeight: "100vh",
    //     transition: "background 0.5s ease-in-out",
    //   }}
    // >
    //   <h1 style={{ color: "white", textAlign: "center", padding: "20px" }}>
    //    {children}
    //   </h1>
    // </div>
  );
};
export default MainLayout;
