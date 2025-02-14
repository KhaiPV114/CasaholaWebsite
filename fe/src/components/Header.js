import React from "react";
import { Row, Col, Input, Avatar, Button, Typography, Dropdown } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined, LogoutOutlined, HistoryOutlined } from "@ant-design/icons";


const { Title } = Typography;
const menuItems = [
    { key: "profile", label: "Profile", icon: <UserOutlined /> },
    { key: "history", label: "Lịch Sử", icon: <HistoryOutlined /> },
    { key: "logout", label: "Đăng Xuất", icon: <LogoutOutlined />, danger: true },
  ];


const CustomHeader = () => {

    const handleMenuClick = (e) => {
        if (e.key === "logout") {
          console.log("Đăng xuất...");
        } else {
          console.log("Chọn:", e.key);
        }
      };


  return (
    <>

    <Row
      align="middle"
      style={{
        background: "#fff",
        height: "7vh", 
        padding: "0 5%", 
        display: "flex",
      }}
    >

      <Col style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src=""
          size={48} 
          style={{ marginRight: 20 }}
        />
        <Title
          level={2}
          style={{
            margin: 0,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            color: "#F57C00",
          }}
        >
          CASAHOLA
        </Title>
      </Col>


      <Col style={{ marginLeft: "5%" }}>
        <Input
          placeholder="Tìm kiếm..."
          suffix={<SearchOutlined style={{ color: "#F57C00", fontSize: 24 }} />}
          style={{
            width: "45vh",
            borderRadius: 40,
            padding: "8px 16px",
            border: "1px solid #ddd",
            backgroundColor: "#f5f5f5",
          }}
        />
      </Col>


      <Col style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={<BellOutlined style={{ fontSize: 20, color: "#F57C00" }} />}
          style={{ marginRight: 16 }}
        />
        <Dropdown menu={{ items: menuItems, onClick: handleMenuClick }} trigger={["click"]}>
          <Avatar src="URL_TO_USER_AVATAR" size={48} style={{ cursor: "pointer" }} />
        </Dropdown>
      </Col>
    </Row>
    </>
    
  );
};

export default CustomHeader;