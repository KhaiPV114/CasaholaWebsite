import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { BarChartOutlined, DatabaseOutlined, FileSearchOutlined, HomeOutlined, MessageOutlined } from "@ant-design/icons";

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
            style={{ position: "fixed", height: "100vh", background: "#d9d9d9", transition: "width 0.3s", width: collapsed ? "80px" : "200px", zIndex: 1000 }}
        >
            <Menu mode="vertical" className="side-menu" style={{ background: "#d9d9d9", width: collapsed ? "80px" : "200px" }}>
                <Menu.Item key="home" icon={<HomeOutlined />}>{!collapsed && "Trang chủ"}</Menu.Item>
                <Menu.Item key="test" icon={<BarChartOutlined />}>{!collapsed && "Test tính cách"}</Menu.Item>
                <Menu.Item key="match" icon={<FileSearchOutlined />}>{!collapsed && "Tìm bạn ở ghép"}</Menu.Item>
                <Menu.Item key="news" icon={<MessageOutlined />}>{!collapsed && "Tin nhắn"}</Menu.Item>
                <Menu.Item key="data" icon={<DatabaseOutlined />}>{!collapsed && "Dữ liệu tính cách"}</Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Navbar;