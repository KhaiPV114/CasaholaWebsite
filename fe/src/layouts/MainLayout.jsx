import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
    <div className="main-layout">
        <header>Main Header</header>
        <main>
            <Outlet />
        </main>
    </div>
);

export default MainLayout;