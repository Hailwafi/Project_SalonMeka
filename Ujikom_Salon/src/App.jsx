import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

import Navbar from './components/Navbar';
import NavbarAdmin from './components/NavbarAdmin';
import Footer from './components/Footer';
import withAuthenticationAdmin from './service/withAuthenticationAdmin';

// Lazy load halaman-halaman
const Index = lazy(() => import('./pages'));
const Admin = lazy(() => import('./pages/Admin/Index'));
const AllSv = lazy(() => import('./pages/Admin/AllSv'));
const AllUser = lazy(() => import('./pages/Admin/AllUser'));
const AllCategory = lazy(() => import('./pages/Admin/AllCategory'));
const AllBookingS = lazy(() => import('./pages/Admin/AllBookingS'));
const AllPayment = lazy(() => import('./pages/Admin/AllPayment'));
const AddCt = lazy(() => import('./pages/Admin/Add/AddCt'));
const AddSv = lazy(() => import('./pages/Admin/Add/AddSv'));

const User = lazy(() => import('./pages/User/Index'));
const DetailLy = lazy(() => import('./pages/User/DetailLy'));
const Booking = lazy(() => import('./pages/User/Booking'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));

// Komponen pembungkus agar bisa akses location
const AppWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/Admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/User" element={<User />} />
          <Route path="/User/DetailLy" element={<DetailLy />} />
          <Route path="/User/Booking" element={<Booking />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Admin/*" element={<AdminLayout />} />
        </Routes>
      </Suspense>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

// Layout khusus Admin
const AdminLayout = withAuthenticationAdmin(() => {
  return (
    <div>
      <NavbarAdmin />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/AllSv" element={<AllSv />} />
          <Route path="/AllUser" element={<AllUser />} />
          <Route path="/AllCategory" element={<AllCategory />} />
          <Route path="/AllBookingS" element={<AllBookingS />} />
          <Route path="/AllPayment" element={<AllPayment />} />
          <Route path="/Add/AddCt" element={<AddCt />} />
          <Route path="/Add/AddSv" element={<AddSv />} />
        </Routes>
      </Suspense>
    </div>
  );
});

export default App;
