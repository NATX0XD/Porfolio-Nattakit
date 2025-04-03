import Navigations from "@/configurations/Navigations/Navigations";
import { useSettings } from "@/hook/useSettings";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Menu } from "antd";
import Link from "next/link";
import { createStyles } from "antd-style";

const useSidebarStyle = createStyles(({ token, css }) => ({
  sidebar: css`
    && .ant-menu-item,
    .ant-menu-submenu-title {
      margin: 4px 0px;
      margin-right: -16px;
      border-radius: 0px 50px 50px 0px;
    }

    && .ant-menu-item-selected {
      border-radius: 0px 50px 50px 0px;
      background: linear-gradient(
        135deg,
        ${token.primaryGradientStart} 0%,
        ${token.primaryGradientMiddle} 68%,
        ${token.primaryGradientEnd} 100%
      );
      color: white;
    }

    && .ant-menu-item:hover,
    .ant-menu-submenu-title:hover {
      border-radius: 0px 50px 50px 0px;
    }

    && .ant-menu.ant-menu-sub.ant-menu-inline {
      background-color: unset;
    }
  `,
}));

const SidebarMode = ({
  children,
  title,
  settings,
  openSidebar,
  onCloseSidebar,
}) => {
  if (!settings?.autoNative) {
    return (
      <Flex align="center" vertical>
        {title}
        {children}
      </Flex>
    );
  } else {
    return (
      <Drawer
        width={240}
        title={title}
        onClose={onCloseSidebar}
        open={openSidebar}
        placement="left"
        key="left"
        closable={false}
        extra={
          <Button
            icon={<CloseOutlined />}
            onClick={onCloseSidebar}
            type="text"
          />
        }
        styles={{
          header: { padding: "8px 16px", borderBottom: "0px" },
          body: { padding: "0px 4px 0px 0px", overflow: "hidden" },
        }}
      >
        {children}
      </Drawer>
    );
  }
};
const Sidebar = ({
  openSidebar,
  onCloseSidebar,
  onChangeRoute = () => null,
}) => {
  const pathname = usePathname();
  const { settings } = useSettings();
  const { styles } = useSidebarStyle();
  const collapsedWidth = useMemo(
    () => (settings.navigationCollapse && !settings.navbar ? 80 : 230),
    [settings]
  );
  const defaultOpenKeys =
    !settings.navbar &&
    !settings.navigationCollapse &&
    Navigations.find((item) =>
      item.children && item.children.length > 0
        ? item.children.find((child) => child.key === pathname)
        : item.key === pathname
    );
  return (
    <SidebarMode
      openSidebar={openSidebar}
      onCloseSidebar={onCloseSidebar}
      settings={settings}
      title={
        <Flex align="center">
          {((settings.autoNative &&
            (settings.navigationCollapse || !settings.navigationCollapse)) ||
            (!settings.navigationCollapse && !settings.navbar)) && (
            <Link
              style={{
                fontSize: "16px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                margin: "0px 8px",
              }}
              href={"/"}
            >
              {process.env.NEXT_PUBLIC_APP_NAME}
            </Link>
          )}
        </Flex>
      }
    >
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={[defaultOpenKeys.key]}
        style={{
          height: "calc(100dvh - 50px)",
          width: collapsedWidth,
          borderRight: 0,
          overflow: "auto",
          padding: "0px 0px 24px",
          backgroundColor: "inherit",
        }}
        className={styles.sidebar}
        onClick={onChangeRoute}
        items={Navigations.map((item) => ({
          key: item.key,
          label: (
            <span
              style={{
                fontWeight: pathname === item.key ? "bold" : "normal",
              }}
            >
              {item.label}
            </span>
          ),
          icon: item.icon,
          onTitleClick: item.children
            ? () => onChangeRoute({ key: item.key })
            : undefined,
          children: item.children?.map((child) => ({
            key: child.key,
            label: (
              <span
                style={{
                  fontWeight: pathname === child.key ? "bold" : "normal",
                }}
              >
                {child.label}
              </span>
            ),
          })),
        }))}
      />
    </SidebarMode>
  );
};

export default Sidebar;
