import QueryCardView from "@/components/QueryCardView";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";
import { Avatar, Flex, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
const ProfileCard = ({ name, email, subtitle, avatarSrc }) => {
  const { settings } = useSettings();
  const { mode } = settings;
  const themeColor = Palette(settings?.palette, mode);
  return (
    <Flex vertical align="flex-start" gap={8}>
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80px",
            height: "80px",
            backgroundColor: themeColor.primaryGradientMiddle,
            borderRadius: "50%",
            transform: "translateX(8px) translateY(8px)",
          }}
        />
        <Avatar
          src={avatarSrc}
          size={80}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>

      <Title
        level={3}
        style={{
          color: "white",
          margin: 0,
          marginTop: "8px",
          fontWeight: "600",
        }}
      >
        {name}
      </Title>
      <Text style={{ color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
        {email}
      </Text>
      <Text style={{ color: "rgba(255, 255, 255, 0.9)", margin: 0 }}>
        {subtitle}
      </Text>
    </Flex>
  );
};

const CardProfile = () => {
  return (
    <QueryCardView trasparent={0.5}>
      <div
        style={{
          padding: "10px 30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ProfileCard
          name="Nattakit Jinakul"
          email="MrNattakit.ji@gmail.com"
          subtitle="Portfolio "
          avatarSrc="/images/Profile.jpg"
        />
      </div>
    </QueryCardView>
  );
};

export default CardProfile;
