import React from 'react';

const MainLayout = ({ children }) => (
    <div className="main-layout">
        <header>Main Header</header>
        <main>{children}</main>
    </div>
);

export default MainLayout;