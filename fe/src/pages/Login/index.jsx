import React, { useState } from "react";
import { Modal, Form, Input, Button, Divider, Typography } from "antd";
import { GoogleOutlined, FacebookOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ backgroundColor: "#FA6400", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        centered
        maskClosable={false} // Prevent closing when clicking outside
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#ccc", margin: "auto" }} />
          <Typography.Title level={3}>Log in</Typography.Title>
          <Typography.Text>Don't have an account? <a href="#">Sign up</a></Typography.Text>
        </div>

        <Button block icon={<FacebookOutlined />} style={{ marginBottom: 10 }}>
          Log in with Facebook
        </Button>
        <Button block icon={<GoogleOutlined />} style={{ marginBottom: 10 }}>
          Log in with Google
        </Button>
        
        <Divider>OR</Divider>

        <Form layout="vertical">
          <Form.Item label="Your email" name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Your password" name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
            <Input.Password
              placeholder="Enter your password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Typography.Text style={{ float: "right" }}>
            <a href="#">Forget your password?</a>
          </Typography.Text>

          <Button type="primary" block style={{ marginTop: 20 }}>Log in</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
