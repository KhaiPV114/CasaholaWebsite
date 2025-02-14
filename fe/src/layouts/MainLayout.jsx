import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomHeader from "../components/Header";
import CustomFooter from '@/components/Footer';
const MainLayout = () => (
    <div className="main-layout">
        <CustomHeader />
        <main>
            <Outlet />
        </main>
        <CustomFooter />
    </div>
);

export default MainLayout;