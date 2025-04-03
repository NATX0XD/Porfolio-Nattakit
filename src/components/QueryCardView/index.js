import { Avatar, Card, Flex, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
import {
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
  PictureOutlined,
  CloudOutlined,
  FileOutlined,
  EllipsisOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";

const QueryCardView = ({
  title,
  icon,
  subtitle,
  children,
  editable,
  color,
  trasparent,
  width,
}) => {
  const { settings } = useSettings();
  const { mode, palette } = settings;
  const themeColors = Palette(palette, mode);
  return (
    <Card
      style={{
        width: width || "100%",
        borderRadius: "16px",
        marginBottom: "8px",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.7)",
        background: "transparent",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "none",
        overflow: "hidden",
      }}
      headStyle={{
        backgroundColor: "rgba(26, 26, 26, 0.6)",
        borderRadius: "16px 16px 0 0",
        // backdropFilter: "blur(10px)",
        // WebkitBackdropFilter: "blur(10px)",
        padding: "12px 16px",
        border: "none",
        color: "white",
      }}
      bodyStyle={{
        padding: "0", // Remove default padding
        color: "white",
      }}
      title={
        title && (
          <Flex align="center" justify="space-between">
            <Flex align="center" gap={10}>
              {icon && (
                <Avatar
                  icon={icon}
                  style={{
                    backgroundColor: color || themeColors.colorPrimary,
                    color: "white",
                  }}
                  size="default"
                />
              )}
              <div>
                <Title level={5} style={{ color: "white", margin: 0 }}>
                  {title}
                </Title>
                {subtitle && (
                  <Text style={{ color: "#8E8E93", fontSize: "12px" }}>
                    {subtitle}
                  </Text>
                )}
              </div>
            </Flex>
          </Flex>
        )
      }
      // extra={editable && <EditOutlined style={{ color: "#3478F6" }} />}
    >
      <div
        style={{
          border: "none",
          marginTop: 0,
          background: `rgba(0, 0, 0, ${trasparent || 0.7})`,
        }}
      >
        {children}
      </div>
    </Card>
  );
};

export default QueryCardView;
