import QueryCardView from "@/components/QueryCardView";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";
import {
  AppstoreAddOutlined,
  DesktopOutlined,
  DownCircleOutlined,
  MobileOutlined,
  TeamOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Divider, Flex, Image, Typography } from "antd";
import React, { useState } from "react";
const { Title, Text } = Typography;

const CardProject = () => {
  const QueryBoxCard = ({ label, iframe, video, images }) => {
    const { settings } = useSettings();
    const { mode } = settings;
    const themeColor = Palette(settings?.palette, mode);
    const [openStates, setOpenStates] = useState({});

    const handleToggle = (index) => {
      setOpenStates((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
    const styleDivider = {
      borderColor: "rgba(90, 90, 90, 0.6)",
      color: "white",
      margin: 0,
    };
    return (
      <Flex
        vertical
        align="start"
        gap={4}
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            color: themeColor.colorPrimary,
            margin: 0,
            fontSize: "16px",
          }}
        >
          รายละเอียด
        </Text>
        <Text
          style={{
            color: "white",
            margin: 0,
            fontSize: "16px",
            whiteSpace: "pre-line",
          }}
        >
          {label}
        </Text>
        <Divider
          style={{
            ...styleDivider,
          }}
        />
        {iframe &&
          iframe.map((iframe, index) => (
            <React.Fragment key={`iframeSrc${index}`}>
              <Flex
                justify="space-between"
                align="center"
                style={{ width: "100%" }}
              >
                <Text
                  style={{
                    color: themeColor.colorPrimary,
                    margin: "10px 0",
                    fontSize: "16px",
                  }}
                >
                  ผลงาน {iframe.extraTitle}
                </Text>
                <Button
                  size="large"
                  type="text"
                  shape="circle"
                  onClick={() => handleToggle(index)}
                  style={{
                    fontSize: 20,
                    color: themeColor.colorPrimary,
                  }}
                  icon={
                    openStates[index] ? (
                      <UpCircleOutlined />
                    ) : (
                      <DownCircleOutlined />
                    )
                  }
                />
              </Flex>

              {openStates[index] && (
                <>
                  <iframe
                    src={iframe.iframeSrc}
                    title="Project Website"
                    width="100%"
                    height="500px"
                    style={{
                      borderRadius: 14,
                      border: "none",
                    }}
                  />
                  <Divider
                    style={{
                      ...styleDivider,
                    }}
                  />
                </>
              )}
              <Divider
                style={{
                  ...styleDivider,
                }}
              />
            </React.Fragment>
          ))}

        {video &&
          video.map((video, index) => (
            <>
              <React.Fragment key={`iframeSrc${index}`}>
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Text
                    style={{
                      color: themeColor.colorPrimary,
                      margin: "10px 0",
                      fontSize: "16px",
                    }}
                  >
                    ผลงาน {video.extraTitle}
                  </Text>
                  <Button
                    size="large"
                    type="text"
                    shape="circle"
                    onClick={() => handleToggle(index)}
                    style={{
                      fontSize: 20,
                      color: themeColor.colorPrimary,
                    }}
                    icon={
                      openStates[index] ? (
                        <UpCircleOutlined />
                      ) : (
                        <DownCircleOutlined />
                      )
                    }
                  />
                </Flex>
                {openStates[index] && (
                  <>
                    <video width="100%" height="300" controls>
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <Divider
                      style={{
                        ...styleDivider,
                      }}
                    />
                  </>
                )}
                <Divider
                  style={{
                    ...styleDivider,
                  }}
                />
              </React.Fragment>
            </>
          ))}
        {images &&
          images.map((image, index) => (
            <>
              <React.Fragment key={`imageSrc${index}`}>
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ width: "100%" }}
                >
                  <Text
                    style={{
                      color: themeColor.colorPrimary,
                      margin: "10px 0",
                      fontSize: "16px",
                    }}
                  >
                    ผลงาน {image.extraTitle}
                  </Text>
                  <Button
                    size="large"
                    type="text"
                    shape="circle"
                    onClick={() => handleToggle(index)}
                    style={{
                      fontSize: 20,
                      color: themeColor.colorPrimary,
                    }}
                    icon={
                      openStates[index] ? (
                        <UpCircleOutlined />
                      ) : (
                        <DownCircleOutlined />
                      )
                    }
                  />
                </Flex>
                {openStates[index] && (
                  <>
                    <Flex
                      wrap="wrap"
                      justify="center"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Image
                        src={image.imageSrc}
                        style={{
                          height: 400,
                          width: "100%",
                        }}
                      />
                    </Flex>
                    <Divider
                      style={{
                        ...styleDivider,
                      }}
                    />
                  </>
                )}
                <Divider
                  style={{
                    ...styleDivider,
                  }}
                />
              </React.Fragment>
            </>
          ))}
      </Flex>
    );
  };
  const itemProject01 = [
    {
      label:
        "- Presentation เว็บไซต์ รองรับทุกอุปกรณ์ Responsive.\n -  ระบบจัดการเนื้อหาข้อมูลเว็บไซต์ Dashboard สําหรับ Admin \n - พัฒนาด้วย React Next.js Database Mongodb.",
      iframe: [
        {
          iframeSrc: "https://www.tpdgroup.co.th/",
          extraTitle: "หน้าบ้าน",
        },
        {
          iframeSrc: "https://manage.tpdgroup.co.th/",
          extraTitle: "หลังบ้าน",
        },
      ],
      video: false,
      images: false,
    },
  ];
  const itemProject02 = [
    {
      label:
        "Fruit juice Shop App \n - Application ขายน้ำผลไม้ .\n - พัฒนาด้วย Mit app Invertor",
      iframe: false,
      images: false,
      video: [
        {
          videoSrc: "/images/Project/PorjectAPP02.mp4",
          extraTitle: "การใช้งาน",
        },
        {
          videoSrc: "/images/Project/PorjectAPP01.mp4",
          extraTitle: "หน้าแรกสินค้า",
        },
        {
          videoSrc: "/images/Project/PorjectAPP.mp4",
          extraTitle: "การซื้อขาย",
        },
      ],
    },
  ];
  const itemProject03 = [
    {
      label:
        "- โปรเจคนี้สําหรับผู้สูงอายุ 60 ปีขึ้นไป (เป็นโปรเจคในการแข่งขัน) \n - เกี่ยวกับการให้คําแนะนํา ปรึกษา และเป็นกระทู้ให้ผู้สูงอายุถามตอบกัน  มีระบบสมัครสมาชิก\n - พัฒนาด้วย Html CSS Bootstrap phpMyAdmin.",
      iframe: false,
      video: false,
      images: [
        {
          imageSrc: "/images/Project/images.png",
          extraTitle: "60Plus society",
        },
      ],
    },
  ];

  const cardItems = [
    {
      key: "Project01",
      title: "TPD ENGINEERING WEBAPP",
      subtitle: "โปรเจค Webapp",
      icon: <DesktopOutlined />,
      color: "#1890ff",
      content: (
        <>
          {itemProject01.map((item, index) => (
            <QueryBoxCard
              key={index}
              label={item.label}
              iframe={item.iframe}
              video={item.video}
              images={item.images}
            />
          ))}
        </>
      ),
    },
    {
      key: "Project02",
      title: "Applications",
      subtitle: "โปรเจค Applications",
      icon: <MobileOutlined />,
      color: "#52c41a",
      content: (
        <>
          {itemProject02.map((item, index) => (
            <QueryBoxCard
              key={index}
              label={item.label}
              iframe={item.iframe}
              video={item.video}
              images={item.images}
            />
          ))}
        </>
      ),
    },
    {
      key: "Project03",
      title: "60Plus Society",
      subtitle: "โปรเจคแข่งทักษะ",
      icon: <TeamOutlined />,
      color: "#faad14",
      content: (
        <>
          {itemProject03.map((item, index) => (
            <QueryBoxCard
              key={index}
              label={item.label}
              iframe={item.iframe}
              video={item.video}
              images={item.images}
            />
          ))}
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

export default CardProject;
