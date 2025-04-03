"use client";
import React, { useState } from "react";
import { Button, Flex, Typography, Drawer, Menu, Space, Dropdown } from "antd";
import {
  MenuOutlined,
  GlobalOutlined,
  MoonFilled,
  SunFilled,
  ClearOutlined,
  MoonOutlined,
  SunOutlined,
  SettingOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSettings } from "@/hook/useSettings";
import Navigations from "@/configurations/Navigations/Navigations";
import Palette from "@/themes/palette";

const Navbar = ({
  handleOpenSidebar = () => null,
  onChangeRoute = () => null,
}) => {
  const pathname = usePathname();
  const { settings, saveSettings } = useSettings();
  const [open, setOpen] = useState(false);

  const handleChange = (name, value) => {
    saveSettings({ ...settings, [name]: value });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Theme mode dropdown items
  const modeItem = [
    {
      label: "โหมดมืด",
      icon: <MoonOutlined />,
      key: "Dark",
      onClick: () => handleChange("mode", "Dark"),
    },
    {
      label: "โหมดสว่าง",
      icon: <SunOutlined />,
      key: "Light",
      onClick: () => handleChange("mode", "Light"),
    },
    // {
    //   label: "โหมดสผสม",
    //   icon: <ClearOutlined />,
    //   key: "Semi",
    //   onClick: () => handleChange("mode", "Semi"),
    // },
  ];

  // Language dropdown items
  const languageItem = [
    {
      label: "ภาษาไทย",
      key: "th",
      onClick: () => handleChange("locale", "th"),
    },
    {
      label: "English",
      key: "en",
      onClick: () => handleChange("locale", "en"),
    },
  ];
  const contentOptions = [
    {
      label: "เล็ก",
      key: "screenMD",
      onClick: () => handleChange("contentWidth", "screenMD"),
    },
    {
      label: "ใหญ่",
      key: "screenLG",
      onClick: () => handleChange("contentWidth", "screenLG"),
    },
    {
      label: "เต็ม",
      key: "screenXL",
      onClick: () => handleChange("contentWidth", "screenXL"),
    },
  ];
  const paletteOptions = [
    {
      label: "Normal",
      color: "linear-gradient(104deg, #123458 0%, #D4C9BE 50%, #F1EFEC 100%)",
      value: "Normal",
    },
    {
      label: "Forest",
      color: "linear-gradient(104deg, #196f3d 0%, #289656 50%, #4fdd8a 100%)",
      value: "Forest",
    },
    {
      label: "Cherry",
      color: "linear-gradient(104deg, #fc94ac 0%, #debef0 50%, #db94f7 100%)",
      value: "Cherry",
    },
    {
      label: "Snowy",
      color: "linear-gradient(104deg, #c8b6ff 0%, #b8e1ff 50%, #ddffdb 100%)",
      value: "Snowy",
    },
    {
      label: "Desert",
      color: "linear-gradient(104deg, #ff4200 0%, #ff8200 50%, #ffc200 100%)",
      value: "Desert",
    },
  ];

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const paletteItem = paletteOptions.map((option) => ({
    label: (
      <Flex align="center" gap="small">
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: option.color,
          }}
        />
        {option.label}
      </Flex>
    ),
    key: option.value,
    onClick: () => handleChange("palette", option.value),
  }));
  return (
    <>
      {settings?.navbar && !settings.autoNative ? (
        <>
          <Link
            style={{
              fontSize: "16px",
              whiteSpace: "nowrap",
              fontWeight: "bold",
              margin: "0px 8px",
              color: "white",
            }}
            href={"/"}
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
          <Menu
            style={{
              width: "100%",
              borderBottom: 0,
              backgroundColor: "initial",
              flex: 1,
              minWidth: 0,
              justifyContent: "center",
            }}
            mode="horizontal"
            selectedKeys={[pathname]}
            onClick={onChangeRoute}
            items={Navigations.map((item) => ({
              key: item.key,
              label: (
                <span
                  style={{
                    fontWeight: pathname === item.key ? "bold" : "normal",
                    color: "white",
                  }}
                >
                  {item.label}
                </span>
              ),
              // icon: item.icon,
              onTitleClick: item.children
                ? () => onChangeRoute({ key: item.key })
                : undefined,
              children: item.children?.map((child) => ({
                key: child.key,
                label: (
                  <span
                    style={{
                      color: "white",
                      fontWeight: pathname === child.key ? "bold" : "normal",
                    }}
                  >
                    {child.label}
                  </span>
                ),
              })),
            }))}
          />
        </>
      ) : (
        settings.autoNative && (
          <Flex style={{ flexGrow: 1 }}>
            <Button
              style={{ color: "white" }}
              icon={<MenuOutlined />}
              shape="default"
              type="text"
              size="large"
              onClick={handleOpenSidebar}
            />
          </Flex>
        )
      )}
      <Flex
        align="center"
        gap={4}
        style={{ flexGrow: settings?.navbar ? 0 : 1 }}
        justify="end"
      >
        <Dropdown
          menu={{
            items: contentOptions,
            selectable: true,
            selectedKeys: [settings?.contentWidth],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
        >
          <Button
            style={{ color: "white" }}
            icon={<LayoutOutlined />}
            type="text"
            size="large"
          />
        </Dropdown>

        <Dropdown
          menu={{
            items: modeItem,
            selectable: true,
            selectedKeys: [settings?.mode],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
        >
          <Button
            style={{ color: "white" }}
            icon={
              settings?.mode === "Dark" ? (
                <MoonFilled />
              ) : settings?.mode === "Light" ? (
                <SunFilled />
              ) : (
                <ClearOutlined />
              )
            }
            type="text"
            size="large"
          />
        </Dropdown>

        <Dropdown
          menu={{
            items: paletteItem,
            selectable: true,
            selectedKeys: [settings?.palette],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger={["click"]}
        >
          <Button
            style={{ color: "white" }}
            icon={<SettingOutlined />}
            type="text"
            size="large"
          />
        </Dropdown>
      </Flex>
    </>
  );
};

export default Navbar;
