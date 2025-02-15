import FooterLayout from '@/components/FooterLayout';
import HeaderLayout from '@/components/HeaderLayout';
import Navbar from '@/components/Navbar';
import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from "../components/Header";
import CustomFooter from '@/components/Footer';
const MainLayout = () => (
    <div className="main-layout">
        <Layout>
            <HeaderLayout />
            <Layout style={{ display: 'flex' }}>
                <Navbar />
                <main style={{ flexGrow: 1, marginLeft: '80px', transition: 'margin-left 0.3s' }}>
                    <Outlet />
                </main>
            </Layout>
            <FooterLayout/>
        </Layout>
    </div>
);

export default MainLayout;