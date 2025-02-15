import CustomNavbar from '@/components/Navbar';
import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const TestCharacter = () => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <CustomNavbar />
            <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', marginBottom: '40px' }}>
                <Text strong style={{ fontSize: '24px', color: '#666' }}>Chưa có ảnh</Text>
            </div>


            <div style={{ padding: '0 15vh 5vh 15vh', textAlign: 'center' }}>
                <Row style={{ marginBottom: '40px' }}>
                    <Col span={18} style={{ textAlign: 'left' }}>
                        <Title level={1} strong style={{ color: '#FA6400', marginBottom: '16px', fontFamily: "'Anton', sans-serif" }}>TRẮC NGHIỆM TÍNH CÁCH MIỄN PHÍ. KHÁM PHÁ BẠN LÀ AI?</Title>
                        <Row style={{ marginBottom: '3vw' }}>
                            <Col style={{ marginRight: '5vw' }}>
                                <Text strong style={{ fontSize: '32px', color: '#000000', display: 'block', marginBottom: '5px' }}>
                                    154 người
                                </Text>
                                <Text >đã tham gia trắc nghiệm. </Text>
                            </Col>
                            <Col >
                                <Text strong style={{ fontSize: '32px', color: '#7DBEFF', display: 'block', marginBottom: '5px' }}>
                                    65 người
                                </Text>
                                <Text >đã tham gia trắc nghiệm. </Text>
                            </Col>
                        </Row>


                        <Text style={{ fontSize: '14px', display: 'block', marginBottom: '5vh', width: "80%", color: '#000000' }}>
                            Kết quả trắc nghiệm tính cách giúp bạn hiểu rõ điểm mạnh, điểm yếu và động lực của bản thân. Từ đó CASAHOLA sẽ đưa ra gợi ý cho bạn về những kiểu tính cách tương hợp giúp bạn tìm được bạn cùng phòng ưng ý và tránh rủi ro cao nhất.
                        </Text>
                        <Button type="primary" size="large" style={{ backgroundColor: '#FA6400', borderColor: '#FA6400', fontWeight: 'bold', width: '50%', borderRadius: 30, padding: 20 }}>
                            Làm Trắc Nghiệm
                        </Button>
                    </Col>
                    <Col span={6}>
                        <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                            <Text strong style={{ fontSize: '20px', color: '#666' }}>Chưa có ảnh</Text>
                        </div>
                    </Col>
                </Row>
            </div>

            <div style={{ padding: '0 15vh 15vh 15vh' }}>
                    <Title level={3} style={{ marginTop: '40px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
                        CÁC KIỂU TÍNH CÁCH ENNEAGRAM
                    </Title>
                    <Row gutter={[100, 50]} style={{ marginTop: '40px' }} justify="center">
                        {["Cầu Toàn", "Giúp Đỡ", "Thành Đạt", "Cá Tính", "Nghiên Cứu"].map((name, index) => (
                            <Col key={index} xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                                <div style={{ backgroundColor: '#FA6400', color: 'white', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>

                                </div>
                                <Text strong style={{ color: '#333', fontSize: '16px', display: 'block' }}>Nhóm {index + 1}</Text>
                                <Text style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Người {name}</Text>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={[100, 50]} style={{ margin: '15vh' }} justify="center">
                        {["Trung Thành", "Nhiệt Tình", "Thử Thách", "Hòa Bình"].map((name, index) => (
                            <Col key={index} xs={12} sm={8} md={6} lg={4} style={{ textAlign: 'center' }}>
                                <div style={{ backgroundColor: '#FA6400', color: 'white', borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>

                                </div>
                                <Text strong style={{ color: '#333', fontSize: '16px', display: 'block' }}>Nhóm {index + 1}</Text>
                                <Text style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Người {name}</Text>
                            </Col>
                        ))}
                    </Row>
             </div>
        </div>
    );
};

export default TestCharacter;