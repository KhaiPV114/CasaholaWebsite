import React from 'react';
import { Layout, Row, Col, Button, Typography, Flex, Card } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Meta } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => (
    <Layout style={{ minHeight: '100vh', padding: "0px" }}>
        <Content>
            <Row gutter={24} style={{ paddingTop: "50px" }}>
                <Col span={12} style={{ paddingLeft: "50px" }}>
                    <Title level={1} style={{ color: '#ff6600', fontWeight: "bolder" }}>TÌM BẠN Ở GHÉP SIÊU CHẤT LƯỢNG!</Title>
                    <Paragraph style={{ color: '#333' }}>
                        Không còn nỗi lo ở ghép với người không phù hợp, đã có CasaHola giúp bạn.
                    </Paragraph>
                    <Button type="primary" size="large" style={{ backgroundColor: '#ff6600' }}>
                        BẮT ĐẦU NGAY
                    </Button>
                    <Row style={{ marginTop: '20px' }}>
                        <Flex vertical>
                            <Col style={{ marginTop: "10px" }}>
                                <CheckCircleOutlined style={{ color: '#ff6600', fontSize: '20px' }} /> Uy tín, chất lượng
                            </Col >
                            <Col style={{ marginTop: "10px" }}>
                                <ClockCircleOutlined style={{ color: '#ff6600', fontSize: '20px' }} /> Ghép nối nhanh chóng, thuận tiện
                            </Col>
                            <Col style={{ marginTop: "10px" }}>
                                <UserOutlined style={{ color: '#ff6600', fontSize: '20px' }} /> Bảo mật thông tin người dùng
                            </Col>
                        </Flex>
                    </Row>
                </Col>
                <Col span={12} style={{ textAlign: 'center' }}>
                    <img src="./Penguin.png" style={{ height: '400px' }} alt="Penguin" />
                </Col>
            </Row>

            <Row style={{ marginTop: '50px', backgroundColor: '#ff6600', padding: '30px' }}>
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Title level={2} style={{ color: 'white' }}>TÍNH NĂNG TÌM BẠN Ở GHÉP CỦA CASAHOLA</Title>
                    <Paragraph style={{ color: 'white', fontSize: "15px" }}>
                        CASA HOLA dựa trên tính cách và nhu cầu cá nhân giúp bạn dễ dàng trong việc tìm kiếm bạn ở ghép trực tuyến!
                    </Paragraph>
                    <Row gutter={24} justify="center">
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="" src="./TestCharacter.png" />}
                            >
                                <Paragraph>TRẮC NGHIỆM TÍNH CÁCH MIỄN PHÍ</Paragraph>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" block>XÁC ĐỊNH YẾU TỐ TRONG BẢN ĐỒ SAO CÁ NHÂN</Button>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" block>LỌC NHU CẦU, GHÉP TÌM NHANH CHÓNG</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Content>
    </Layout>
);

export default Home;
