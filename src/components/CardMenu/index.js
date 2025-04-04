import QueryCardView from "@/components/QueryCardView";
import React from "react";
import { Avatar, Card, Col, Flex, Row, Typography } from "antd";
const { Title, Text } = Typography;
import {
  UserOutlined,
  FolderOpenOutlined,
  BookOutlined,
  TrophyOutlined,
  ProjectOutlined,
  ToolOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { color } from "framer-motion";
import Link from "next/link";

const CardMenu = () => {
  const items = [
    {
      icon: <HomeOutlined />,
      label: "Home",
      color: "#13c2c2",
      href: "/",
    },
    {
      icon: <UserOutlined />,
      label: "โปรไฟล์",
      color: "#1890ff",
      href: "/about",
    },
    {
      icon: <FolderOpenOutlined />,
      label: "ผลงาน",
      color: "#52c41a",
      href: "/project",
    },
    {
      icon: <BookOutlined />,
      label: "การศึกษา",
      color: "#faad14",
      href: "/education",
    },
    {
      icon: <TrophyOutlined />,
      label: "เกียรติบัตร",
      color: "#eb2f96",
      href: "/certifications",
    },
    {
      icon: <SettingOutlined />,
      label: "ตั้งค่า",
      color: "#722ed1",
      href: "/setting",
    },
  ];
  return (
    // <div
    //   style={{
    //     background: "linear-gradient(135deg, #0b1a36 0%, #050d1c 100%)",
    //     padding: "20px",
    //     minHeight: "100vh",
    //   }}
    // >
    <QueryCardView>
      <Flex
        align="center"
        justify="center"
        style={{
          borderBottom: "1px solid rgba(60, 60, 67, 0.3)",
          paddingBottom: "16px",
          paddingTop: "16px",
        }}
      >
        <Row gutter={[16, 16]}>
          {items.map((item, index) => (
            <Col span={8} key={index}>
              <Link href={item.href}>
                <Flex vertical align="center" gap={4}>
                  <Avatar
                    icon={item.icon}
                    style={{ backgroundColor: item.color, color: "white" }}
                  />
                  <Text style={{ color: "white", fontSize: "12px" }}>
                    {item.label}
                  </Text>
                </Flex>
              </Link>
            </Col>
          ))}
        </Row>
      </Flex>
    </QueryCardView>
  );
};

export default CardMenu;
