import QueryCardView from "@/components/QueryCardView";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";
import {
  ExportOutlined,
  GlobalOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Flex, Row, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const CardProfileDetail = () => {
  const { settings } = useSettings();
  const { mode } = settings;
  const themeColor = Palette(settings?.palette, mode);
  const styleDivider = {
    borderColor: "rgba(90, 90, 90, 0.6)",
    color: "white",
    margin: 0,
  };

  const itemsProfiles = [
    {
      title: "ชื่อ - นามสกุล",
      lebel: "นาย ณัฐกิตติ์ จินากูล",
      link: false,
    },
    {
      title: "ชื่อเล่น",
      lebel: "นัท",
      link: false,
    },
    {
      title: "อายุ",
      lebel: "20 ปี",
      link: false,
    },
    {
      title: "วัน-เดือน-ปี เกิด",
      lebel: "วันจันทร์ที่ 9 สิงหาคม 2547",
      link: false,
    },
    {
      title: "เบอร์โทร",
      lebel: "083 946 7368",
      link: "tel:+66839467368",
    },
    {
      title: "อีเมลล์",
      lebel: "MrNattakit.ji@gmail.com",
      link: "mailto:MrNattakit.ji@gmail.com",
    },
  ];
  const itemsSocial = [
    {
      title: "Facebook",
      icon: <FaFacebook />,
      color: "#3b5998",
      link: "https://www.facebook.com/nattakit98.nat/",
      lebel: "Nattakit",
    },
    {
      title: "Line",
      icon: <FaLine />,
      color: "#00c300",
      link: "https://www.facebook.com/nattakit98.nat/",
      lebel: "Nat_Nattakit",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      color: "#e4405f",
      link: "https://www.instagram.com/nn_nattakit_/",
      lebel: "nn_nattakit_",
    },
    {
      title: "XTwitter",
      icon: <FaSquareXTwitter />,
      color: "#1da1f2",
      link: "https://x.com/NATX_0XD",
      lebel: "NATX_0XD",
    },
  ];

  const cardItems = [
    {
      key: "Profiles",
      title: "รายละเอียดส่วนตัว",
      subtitle: "โปรไฟล์",
      icon: <UserOutlined />,
      color: "#1890ff",
      content: (
        <>
          {
            <Flex
              vertical
              align="start"
              gap={4}
              style={{
                width: "100%",
              }}
            >
              {itemsProfiles.map((item, index) => (
                <>
                  <Flex
                    justify="space-between"
                    align="center"
                    style={{ width: "100%" }}
                  >
                    <div>
                      <Text
                        style={{ color: "white", margin: 0, fontSize: "16px" }}
                      >
                        {item.title}
                      </Text>
                      {item.link && (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              type="link"
                              icon={<ExportOutlined />}
                              style={{ color: "white", marginLeft: "8px" }}
                            />
                          </a>
                        </>
                      )}
                    </div>
                    <Text
                      style={{ color: "white", margin: 0, fontSize: "16px" }}
                    >
                      {item.lebel}
                    </Text>
                  </Flex>

                  <Divider
                    style={{
                      ...styleDivider,
                    }}
                  />
                </>
              ))}
            </Flex>
          }
        </>
      ),
    },

    {
      key: "Address",
      title: "ที่อยู่ปัจจุบัน",
      subtitle: "ที่อยู่",
      icon: <HomeOutlined />,
      color: "#52c41a",
      content: (
        <>
          <Flex
            vertical
            align="start"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Text style={{ color: "white", margin: 0, fontSize: "16px" }}>
              4 ซอยเอกชัย 73 ถนนเอกชัย เขต บางบอน แขวง บางบอน กรุงเทพมหานครฯ
              10150
            </Text>
            <Divider
              style={{
                ...styleDivider,
              }}
            />
            {/* <Text style={{ color: "white", margin: 0, fontSize: "16px" }}>
              Google Map
            </Text> */}

            <iframe
              style={{
                border: "none",
                borderRadius: 16,
              }}
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d299.44880854224994!2d100.43223057801329!3d13.67652951587413!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1743674923617!5m2!1sth!2sth"
              width="100%"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Divider
              style={{
                ...styleDivider,
              }}
            />
          </Flex>
        </>
      ),
    },
    {
      key: "Social",
      title: "โซเชียลมีเดีย",
      subtitle: "โปรไฟล์ โซเชียล",
      icon: <GlobalOutlined />,
      color: "#faad14",
      content: (
        <Flex justify="center" style={{ width: "100%" }}>
          <Row gutter={[16, 16]} justify="center">
            {itemsSocial.map((item, index) => (
              <Col key={index} xs={12} sm={12} md={12} lg={6} xxl={6}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    minWidth: 120,
                  }}
                >
                  <Flex
                    align="center"
                    gap={8}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.86)",
                      padding: "10px",
                      borderRadius: "8px",
                      flexGrow: 1,
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        color: item.color,
                        fontSize: "24px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <Flex vertical style={{ width: "100%" }}>
                      <Text style={{ color: "black", fontWeight: "bold" }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "12px",
                          width: "100%",
                        }}
                      >
                        {item.lebel}
                      </Text>
                    </Flex>
                  </Flex>
                </a>
              </Col>
            ))}
          </Row>
        </Flex>
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
    </Flex>
  );
};

export default CardProfileDetail;
