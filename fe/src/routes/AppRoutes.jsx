import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import TestCharacter from '@/pages/TestCharacter';
import Login from '@/pages/Login';
import ResultPage from '@/pages/TestResult';
import Guess from '@/pages/Suggest_friend';
import PaymentPage from '@/pages/Payment';
import Package from '@/pages/Package';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="testcharacter" element={<TestCharacter />} />
                <Route path="result-page" element={<ResultPage />} />
                <Route path="guess-friend" element={<Guess />} />
                <Route path="payment" element={<PaymentPage />} />
                <Route path="package" element={<Package />} />

            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;