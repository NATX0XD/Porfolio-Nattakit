import QueryCardView from "@/components/QueryCardView";
import ImagesItems from "@/configurations/itemsImages/ImagesItems";
import { TrophyOutlined } from "@ant-design/icons";
import { Flex, Image } from "antd";
import Item from "antd/es/list/Item";
import React from "react";

const CardCerImages = () => {
  return (
    <QueryCardView
      width="100%"
      title={"รูปเกียรติบัตร"}
      icon={<TrophyOutlined />}
      subtitle={"รูปเกียรติบัตรทั้งหมด"}
      editable
      color={"#eb2f96"}
    >
      <Flex
        className="CardCerImagesScroll"
        align="center"
        justify="center"
        wrap="wrap"
        gap={16}
        style={{
          width: "100%",
          border: "none",
          padding: "20px 0",
          height: 350,
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(150, 150, 150, 0.5) transparent",
        }}
      >
        {ImagesItems.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.title}
            width={150}
            height={150}
            style={{
              borderRadius: 8,
              objectFit: "cover",
            }}
          />
        ))}
      </Flex>
    </QueryCardView>
  );
};

export default CardCerImages;
