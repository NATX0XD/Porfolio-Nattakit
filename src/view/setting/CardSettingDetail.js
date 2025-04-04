import CollapseNavbarIcon from "@/components/Icon/CollapseNavbarIcon";
import FullContentIcon from "@/components/Icon/FullContentIcon";
import HorizontalNavbarIcon from "@/components/Icon/HorizontalNavbarIcon";
import LargeContentIcon from "@/components/Icon/LargeContentIcon";
import MediumContentIcon from "@/components/Icon/MediumContentIcon";
import VerticalNavbarIcon from "@/components/Icon/VerticalNavbarIcon";
import QueryCardView from "@/components/QueryCardView";
import themeConfigs from "@/configurations/theme/themeConfig";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";
import {
  BgColorsOutlined,
  BulbOutlined,
  ClearOutlined,
  ColumnWidthOutlined,
  ExportOutlined,
  GlobalOutlined,
  HomeOutlined,
  MenuOutlined,
  MoonOutlined,
  SettingFilled,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Divider, Flex, Row, Typography } from "antd";
import React, { useMemo } from "react";
const { Title, Text } = Typography;
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const CardSettingDetail = () => {
  const { settings, saveSettings } = useSettings();
  const { mode } = settings;
  const themeColor = Palette(settings?.palette, mode);
  const palette = Palette(settings?.palette);

  const handleChange = (name, value) => {
    saveSettings({ ...settings, [name]: value });
  };
  const handleResetSettings = () => {
    saveSettings({ ...settings, reset: true });
  };
  const isSettingsChange = useMemo(() => {
    const settingsFilter = Object.values(settings).filter(
      (_, index) => index !== 0
    );
    const themeConfigsFilter = Object.values(themeConfigs).filter(
      (_, index) => index !== 0
    );
    return (
      JSON.stringify(settingsFilter) === JSON.stringify(themeConfigsFilter)
    );
  }, [settings]);
  const styleDivider = {
    borderColor: "rgba(90, 90, 90, 0.6)",
    color: "white",
    margin: 0,
  };
  const paletteOptions = [
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
  const contentOptions = [
    {
      label: "กลาง",
      icon: <MediumContentIcon />,
      value: "screenMD",
    },
    {
      label: "ใหญ่",
      icon: <LargeContentIcon />,
      value: "screenLG",
    },
    {
      label: "เต็ม",
      icon: <FullContentIcon />,
      value: "screenXL",
    },
  ];
  const navbarOptions = [
    {
      label: "แนวนอน",
      icon: <HorizontalNavbarIcon />,
      value: true,
    },
    {
      label: "แนวตั้ง",
      icon: <VerticalNavbarIcon />,
      value: false,
    },
  ];
  const modeOptions = [
    {
      label: "โหมดสว่าง",
      icon: <SunOutlined style={{ fontSize: "25px" }} />,
      value: "Light",
    },
    {
      label: "โหมดมืด",
      icon: <MoonOutlined style={{ fontSize: "25px" }} />,
      value: "Dark",
    },
  ];
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };
  const cardStyle = (type, value) => ({
    width: "104px",
    lineHeight: "0",
    height: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    border:
      type === value
        ? "2px solid " + palette.colorPrimary
        : "2px solid rgb(230,230,241, 0.5)",
    background:
      type === value
        ? `rgba(${hexToRgb(palette.colorPrimary)}, 0.03)`
        : `rgba(${hexToRgb(palette.colorPrimary)}, 0.5)`,
  });
  const cardItems = [
    {
      key: "Theme",
      title: "การตั้งค่าธีม",
      subtitle: "ธีม",
      icon: <BgColorsOutlined />,
      color: "#52c41a",
      content: (
        <>
          <Flex
            vertical
            align="center"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Divider orientation="left" style={{ ...styleDivider }}>
              ตั้งค่าธีม
            </Divider>
            <Flex gap="large" justify="center">
              {paletteOptions.map((option) => (
                <Flex gap="small" vertical key={option.label}>
                  <div
                    style={{
                      padding: "8px",
                      borderRadius: "12px",
                      border:
                        settings.palette === option.value
                          ? "2px solid " + palette.colorPrimary
                          : "2px solid rgb(230,230,241, 0.5)",
                    }}
                  >
                    <Card
                      hoverable
                      onClick={() => handleChange("palette", option.value)}
                      style={{
                        width: "40px",
                        height: "40px",
                        background: option.color,
                        borderRadius: "8px",
                      }}
                    ></Card>
                  </div>
                  <span>{option.label}</span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </>
      ),
    },
    {
      key: "Mode",
      title: "การตั้งค่าโหมดความสว่าง",
      subtitle: "ความสว่าง",
      icon: <BulbOutlined />,
      color: "#eb2f96",
      content: (
        <>
          <Flex
            vertical
            align="center"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Divider orientation="left" style={{ ...styleDivider }}>
              ตั้งค่าธีม
            </Divider>
            <Flex gap="middle" justify="center">
              {modeOptions.map((option) => (
                <Flex gap="small" vertical key={option.label}>
                  <Card
                    hoverable
                    onClick={() => handleChange("mode", option.value)}
                    style={cardStyle(settings.mode, option.value)}
                  >
                    {option.icon}
                  </Card>
                  <span>{option.label}</span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </>
      ),
    },
    {
      key: "NavbarMode",
      title: "ประเภทเมนูนำทาง",
      subtitle: "เมนูนำทาง",
      icon: <MenuOutlined />,
      color: "#13c2c2",
      content: (
        <>
          <Flex
            vertical
            align="center"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Divider orientation="left" style={{ ...styleDivider }}>
              ประเภทเมนูนำทาง
            </Divider>
            <Flex gap="middle" justify="center">
              {navbarOptions.map((option) => (
                <Flex gap="small" vertical key={option.label}>
                  <Card
                    onClick={() => handleChange("navbar", option.value)}
                    hoverable
                    style={{
                      ...cardStyle(settings.navbar, option.value),
                      height: 66,
                    }}
                  >
                    {option.icon}
                  </Card>
                  <span>{option.label}</span>
                </Flex>
              ))}
              <Flex gap="small" vertical>
                <Card
                  onClick={() => {
                    if (!settings.navbar) {
                      handleChange(
                        "navigationCollapse",
                        settings.navbar ? false : !settings.navigationCollapse
                      );
                    }
                  }}
                  hoverable={!settings.navbar}
                  style={{
                    ...cardStyle(settings.navigationCollapse, true),
                    height: 66,
                  }}
                >
                  <CollapseNavbarIcon />
                </Card>
                <span>ย่อ</span>
              </Flex>
            </Flex>
          </Flex>
        </>
      ),
    },
    {
      key: "NavbarMode",
      title: "ความกว้างเนื้อหา",
      subtitle: "ความกว้าง",
      icon: <ColumnWidthOutlined />,
      color: "#722ed1",
      content: (
        <>
          <Flex
            vertical
            align="center"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Divider orientation="left" style={{ ...styleDivider }}>
              ประเภทเมนูนำทาง
            </Divider>
            <Flex gap="middle" justify="center">
              {contentOptions.map((option) => (
                <Flex gap="small" vertical key={option.label}>
                  <Card
                    onClick={() => handleChange("contentWidth", option.value)}
                    hoverable
                    style={{
                      ...cardStyle(settings.contentWidth, option.value),
                      height: 66,
                    }}
                  >
                    {option.icon}
                  </Card>
                  <span>{option.label}</span>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </>
      ),
    },
  ];

  return (
    <Flex
      vertical
      align="start"
      justify="center"
      gap={16}
      style={{ width: "100%" }}
    >
      {cardItems.map((item, index) => (
        <QueryCardView
          key={index}
          width="100%"
          title={item.title}
          icon={item.icon}
          subtitle={item.subtitle}
          editable
          color={item.color}
        >
          <Flex
            align="center"
            justify="start"
            style={{
              width: "100%",
              border: "none",
              padding: 20,
            }}
          >
            {item.content}
          </Flex>
        </QueryCardView>
      ))}
      <Flex justify="center" style={{ width: "100%" }}>
        <Button
          type="dashed"
          // type="text"
          icon={<ClearOutlined />}
          style={{
            boxShadow: `0px 4px 30px rgba(${hexToRgb(
              palette.colorError
            )}, 0.6)`,
            fontSize: "15px",
            width: "100%",
            padding: 20,
            borderRadius: 14,
          }}
          disabled={isSettingsChange}
          color="danger"
          variant="filled"
          onClick={handleResetSettings}
        >
          {!isSettingsChange && "มีการเปลี่ยนแปลง"}
          Reset ค่าเริ่มต้น
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardSettingDetail;
