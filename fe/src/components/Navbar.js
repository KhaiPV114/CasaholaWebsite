import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { MenuOutlined, HomeOutlined, MessageOutlined, UserOutlined, TeamOutlined, ExperimentOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const CustomNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const menuWidth = "25vh"; 
  const menuHeight = "5vh"; 

  return (
    <div style={{ position: "relative" }}>

      <div
        style={{
          position: "absolute",
          zIndex: 1100,
          width: menuWidth,
          height: menuHeight,
          background: collapsed ? "transparent" : "#fff",
          boxShadow: collapsed ? "none" : "0px 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24, color: "#000", padding: "36px" }} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "transparent",
            border: "none",
            paddingLeft: "30px",
            paddingTop: "20px",
          }}
        />
      </div>

      <Sider
        theme="light"
        width={menuWidth}
        collapsedWidth={0}
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{
          position: "absolute",
          top: `calc(${menuHeight})`, 
          height: "100vh",
          background: "#fff",
          zIndex: 1100,
          transition: "width 0.3s ease-in-out",
        }}
      >
        <Menu mode="vertical" defaultSelectedKeys={["1"]} style={{ fontSize: "16px", fontWeight: 500 }}>
          <Menu.Item key="1" icon={<HomeOutlined style={{ color: "#F57C00", fontSize: 24 }} />}>TRANG CHỦ</Menu.Item>
          <Menu.Item key="2" icon={<ExperimentOutlined style={{ color: "#F57C00", fontSize: 24 }} />}>TEST TÍNH CÁCH</Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined style={{ color: "#F57C00", fontSize: 24 }} />}>TÌM BẠN Ở GHÉP</Menu.Item>
          <Menu.Item key="4" icon={<MessageOutlined style={{ color: "#F57C00", fontSize: 24 }} />}>TIN NHẮN</Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined style={{ color: "#F57C00", fontSize: 24 }} />}>DỮ LIỆU TÍNH CÁCH</Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default CustomNavbar;
