import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import TestCharacter from '@/pages/TestCharacter';
import Login from '@/pages/Login';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="testcharacter" element={<TestCharacter />}/>
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;