import QueryCardView from "@/components/QueryCardView";
import { Col, Flex, Image, Row, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;
const CardHomeField = () => {
  return (
    <>
      {/* <QueryCardView trasparent={0.5}>
        <div
          style={{
            padding: "10px 30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Flex justify="center" style={{ width: "100%" }}>
            <Title
              level={3}
              style={{
                color: "white",
                margin: 0,
                marginTop: "8px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              PORTFOLIO
            </Title>
          </Flex>
        </div>
      </QueryCardView> */}
      <Image src="/Portfolio.jpg" style={{ borderRadius: 20 }} />
    </>
  );
};

export default CardHomeField;
