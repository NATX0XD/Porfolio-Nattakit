import QueryCardView from "@/components/QueryCardView";
import { useSettings } from "@/hook/useSettings";
import Palette from "@/themes/palette";
import {
  BookOutlined,
  DownCircleOutlined,
  DownOutlined,
  SolutionOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import { Button, Divider, Flex, Image, Typography } from "antd";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
const { Title, Text } = Typography;

const CardEducationsDetail = () => {
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
  const QueryBoxDetail = ({
    title,
    extraTitle,
    detail,
    titleBoxBelow,
    extraTitleBoxBelow,
    childrenImages,
    index,
  }) => {
    return (
      <>
        <Flex justify="space-between" align="center" style={{ width: "100%" }}>
          <Text
            style={{
              color: "white",
              margin: 0,
              fontSize: "16px",
              fontWeight: "bold",
              color: themeColor.colorPrimary,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "white",
              margin: 0,
              fontSize: "16px",
              fontWeight: "bold",
              color: themeColor.colorPrimary,
            }}
          >
            {extraTitle}
          </Text>
        </Flex>
        <Flex justify="space-between" align="center" style={{ width: "100%" }}>
          <Text
            style={{
              color: "white",
              margin: 0,
              fontSize: "16px",
              whiteSpace: "pre-line",
            }}
          >
            {detail}
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
              openStates[index] ? <UpCircleOutlined /> : <DownCircleOutlined />
            }
          />
        </Flex>
        {openStates[index] && (
          <Flex
            vertical
            align="center"
            gap={4}
            style={{
              width: "100%",
            }}
          >
            <Divider
              style={{
                ...styleDivider,
              }}
            />
            <Text
              style={{
                color: "white",
                margin: 8,
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <SolutionOutlined /> {titleBoxBelow}{" "}
              <span style={{ color: themeColor.colorPrimary }}>
                {extraTitleBoxBelow}
              </span>
            </Text>

            <Flex gap={8} wrap="wrap">
              {childrenImages.map((item, idx) => (
                <Flex
                  vertical
                  align="center"
                  gap={4}
                  key={idx}
                  style={{ textAlign: "center" }}
                >
                  <Image src={item.imageSrc} alt={item.imageAlt} width={150} />
                  <Text
                    style={{
                      margin: 8,
                      color: "white",
                    }}
                  >
                    {item.imageAlt}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}
        <Divider
          style={{
            ...styleDivider,
          }}
        />
      </>
    );
  };

  const styleDivider = {
    borderColor: "rgba(90, 90, 90, 0.6)",
    color: "white",
    margin: 0,
  };
  const itemsEducations = [
    {
      key: "Educations01",
      title: "ประกาศนียบัตรวิชาชีพชั้นสูง",
      years: "2566 - 2568",
      detail: `วิทยาลัยพณิชยการธนบุรี\n - สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล \n- สาขางาน โมบายแอปพลิเคชั่นทางธุรกิจ`,
      titleGrade: "ผลการเรียน",
      grade: "เกรดเฉลี่ยสะสม 3.98",
      imageGrades: [
        {
          imageSrc: "/images/Grades/HightVocationalCertificate1.jpg",
          imageAlt: "เกรด ปวส ปี1",
        },
        {
          imageSrc: "/images/Grades/HightVocationalCertificate2.jpg",
          imageAlt: "เกรด ปวส ปี2",
        },
      ],
    },
    {
      key: "Educations02",
      title: "ประกาศนียบัตรวิชาชีพ ",
      years: "2563 - 2566",
      detail:
        "วิทยาลัยพณิชยการธนบุรี\n -  สาขาวิชาคอมพิวเตอร์ธุรกิจ\n - สาขางาน คอมพิวเตอร์ธุรกิจ",
      titleGrade: "ผลการเรียน",
      grade: "เกรดเฉลี่ยสะสม 3.96",
      imageGrades: [
        {
          imageSrc: "/images/Grades/Vocationalcertificate1.jpg",
          imageAlt: "เกรด ปวช ปี1",
        },
        {
          imageSrc: "/images/Grades/Vocationalcertificate2.jpg",
          imageAlt: "เกรด ปวช ปี2",
        },
        {
          imageSrc: "/images/Grades/Vocationalcertificate3.jpg",
          imageAlt: "เกรด ปวช ปี3",
        },
      ],
    },
  ];
  const itemsIntership = [
    {
      key: "Intership01",
      title: "บริษัท นิติรัฐ ลอว์ แอนด์ คอลเลคชั่น จํากัด",
      years: "กันยายน ถึง กุมภาพันธ์ ",
      detail: `ตำแหน่งหน้าที่ \n - Frontend Developer `,
      titleIntership: "ภาพเพิ่มเติม",
      role: "Frontend Developer",
      imageIntership: [
        {
          imageSrc: "/images/Interships/Intership (3).jpg",
          imageAlt: "รับรองการฝึกงาน",
        },
        {
          imageSrc: "/images/Interships/Intership (2).jpg",
          imageAlt: "นิเทศฝึกงาน",
        },
        {
          imageSrc: "/images/Interships/Intership01.jpg",
          imageAlt: "นิเทศฝึกงาน",
        },
      ],
    },
    {
      key: "Intership02",
      title: "โรงพยาบาลบางไผ่",
      years: "พฤษภาคม ถึง กันยายน ",
      detail: `ตำแหน่งหน้าที่ \n - IT Support `,
      titleIntership: "ภาพเพิ่มเติม",
      role: "IT Support",
      imageIntership: [
        {
          imageSrc: "/images/Interships/Intership (6).jpg",
          imageAlt: "นิเทศฝึกงาน",
        },
        {
          imageSrc: "/images/Interships/Intership (5).jpg",
          imageAlt: "นิเทศฝึกงาน",
        },
        {
          imageSrc: "/images/Interships/Intership (4).jpg",
          imageAlt: "นิเทศฝึกงาน",
        },
      ],
    },
  ];
  const cardItems = [
    {
      key: "Educations",
      title: "ประวัติการศึกษา",
      subtitle: "ประวัติการศึกษา ปวช - ปวส",
      icon: <FaGraduationCap />,
      color: "#1890ff",
      content: (
        <Flex
          vertical
          align="start"
          gap={4}
          style={{
            width: "100%",
          }}
        >
          {itemsEducations.map((item) => (
            <QueryBoxDetail
              key={item.key}
              title={item.title}
              extraTitle={item.years}
              detail={item.detail}
              titleBoxBelow={item.titleGrade}
              extraTitleBoxBelow={item.grade}
              childrenImages={item.imageGrades}
              index={item.key}
            />
          ))}
        </Flex>
      ),
    },

    {
      key: "Intership",
      title: "ประวัติการฝึกงาน",
      subtitle: "ประวัติการฝึกงาน ปวช - ปวส",
      icon: <BookOutlined />,
      color: "#52c41a",
      content: (
        <Flex
          vertical
          align="start"
          gap={4}
          style={{
            width: "100%",
          }}
        >
          {itemsIntership.map((item) => (
            <QueryBoxDetail
              key={item.key}
              title={item.title}
              extraTitle={item.years}
              detail={item.detail}
              titleBoxBelow={item.titleIntership}
              extraTitleBoxBelow={item.role}
              childrenImages={item.imageIntership}
              index={item.key}
            />
          ))}
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

export default CardEducationsDetail;
