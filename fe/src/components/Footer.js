import React from "react";
import { Layout, Row, Col, Typography, Space, Avatar, Image } from "antd";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        background: "#F57C00",
        color: "#fff",
        padding: "4% 10% 0 10%",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Row gutter={[40, 20]} align="top">
        <Col xs={24} sm={12} md={6}>
          <Title level={1} style={{ color: "#fff", fontFamily: "'Poppins', sans-serif" }}>
            CASAHOLA
          </Title>
          <Text style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif" }}>
            Book your trip in minute, get full <br /> control for much longer.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={4}>
          <Title level={5} style={{ color: "#080809", fontFamily: "'Poppins', sans-serif" }}>Company</Title>
          <Space direction="vertical">
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>About</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Careers</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Mobile</Link>
          </Space>
        </Col>


        <Col xs={24} sm={12} md={4}>
          <Title level={5} style={{ color: "#080809", fontFamily: "'Poppins', sans-serif" }}>Contact</Title>
          <Space direction="vertical">
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Help/FAQ</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Press</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Affiliates</Link>
          </Space>
        </Col>


        <Col xs={24} sm={12} md={4}>
          <Title level={5} style={{ color: "#080809", fontFamily: "'Poppins', sans-serif" }}>More</Title>
          <Space direction="vertical">
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Airline Fees</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Airline</Link>
            <Link style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", display: "block" }}>Low Fare Tips</Link>
          </Space>
        </Col>


        <Col xs={24} sm={12} md={6}>
          <Space size="large">
            <Avatar size={40} style={{ background: "#fff" }} />
            <Avatar size={40} src="URL_TO_USER_AVATAR" />
            <Avatar size={40} style={{ background: "#fff" }} />
          </Space>
          <Title level={5} style={{ color: "#5E6282", fontFamily: "'Poppins', sans-serif", marginTop: 10 }}>
            Discover our app
          </Title>
          <Space size="middle">
            <Image src="URL_TO_GOOGLE_PLAY" width={120} preview={false} />
            <Image src="URL_TO_APP_STORE" width={120} preview={false} />
          </Space>
        </Col>
      </Row>


      <Row justify="center" style={{ marginTop: "auto" }}>
        <Col>
          <Text style={{ color: "#5E6282", textAlign: "center", display: "block" }}>
            All rights from casahola.contact@gmail.com
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;