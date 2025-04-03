import QueryCardView from "@/components/QueryCardView";
import { StarOutlined, TrophyOutlined } from "@ant-design/icons";
import { Carousel, Col, Flex, Image, Row, Typography } from "antd";
import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
const { Title, Text } = Typography;
const CardCerProject = () => {
  const imagesCer01 = [
    {
      src: "/images/all/Image (3).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (19).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (4).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (21).jpg",
      title: "images01",
      label: "images01",
    },
  ];
  const imagesCer02 = [
    {
      src: "/images/all/Image (6).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (7).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (8).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (11).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (13).jpg",
      title: "images01",
      label: "images01",
    },
    {
      src: "/images/all/Image (14).jpg",
      title: "images01",
      label: "images01",
    },
  ];
  const QueryBoxImages = ({
    title,
    mainImageSrc,
    mainImageAlt,
    ImagesMap,
    detail,
    level,
  }) => {
    return (
      <Flex vertical align="center" justify="center" style={{ width: "100%" }}>
        <Text
          style={{
            color: "white",
            margin: 0,
            fontSize: "16px",
            paddingBottom: 20,
          }}
        >
          {title}
        </Text>
        <Row style={{ width: "100%", justifySelf: "center" }} gutter={[16, 16]}>
          <Col xs={24} sm={12} md={24} lg={12} xxl={12}>
            <Image
              src={mainImageSrc}
              alt={mainImageAlt}
              style={{
                borderRadius: 8,
                objectFit: "cover",
                minHeight: 150,
                minWidth: 150,
                maxWidth: 400,
                maxHeight: 300,
                width: "100%",
              }}
            />
          </Col>

          <Col xs={24} sm={12} md={24} lg={12} xxl={12}>
            <Carousel autoplay>
              {ImagesMap.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    style={{
                      overflow: "hidden",
                      borderRadius: 8,
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      maxHeight: 300,
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Text
          style={{
            color: "white",
            margin: 0,
            fontSize: "16px",
            paddingTop: 12,
          }}
        >
          <FaTrophy style={{ fontSize: "24px", color: "#FFD700" }} /> {detail}{" "}
          <span style={{ color: "#FFD700" }}> {level}</span>
        </Text>
      </Flex>
    );
  };

  const Items = [
    {
      title: "การพัฒนานวัตกรรมธุรกิจดิจิทัล ระดับชาติ ",
      subtitle: "การแข่งขันทักษะ ปีการศึกษา 2566 ",
      color: "#FFD700",
      icon: <StarOutlined />,
      content: (
        <QueryBoxImages
          title="การแข่งขันทักษะ การพัฒนานวัตกรรมธุรกิจดิจิทัล ระดับชาติ ปีการศึกษา2566"
          mainImageSrc="/images/Certifications/Certificate (2).jpg"
          mainImageAlt="การพัฒนานวัตกรรมธุรกิจดิจิทัล ระดับชาติ"
          ImagesMap={imagesCer01}
          detail="อันดับที่ 8 ด้วยคะแนน 84.44 คะแนน"
          level="มาตรฐานระดับเหรียญทอง"
        />
      ),
    },
    {
      title: "การพัฒนานวัตกรรมธุรกิจดิจิทัล ระดับภาคตะวันออกและกรุงเทพมหานคร ",
      subtitle: "การแข่งขันทักษะ ปีการศึกษา 2566 ",
      color: "#FFD700",
      icon: <StarOutlined />,
      content: (
        <QueryBoxImages
          title="การแข่งขันทักษะ การพัฒนานวัตกรรมธุรกิจดิจิทัล
            ระดับภาคตะวันออกและกรุงเทพมหานคร ปีการศึกษา 2566"
          mainImageSrc="/images/Certifications/Certificate (1).jpg"
          mainImageAlt="การพัฒนานวัตกรรมธุรกิจดิจิทัล ระดับภาคตะวันออกและกรุงเทพมหานคร"
          ImagesMap={imagesCer02}
          detail="อันดับที่ 1 ด้วยคะแนน 94.17 คะแนน"
          level="มาตรฐานระดับเหรียญทอง"
        />
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
      {Items.map((item, index) => (
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
    </Flex>
  );
};

export default CardCerProject;
