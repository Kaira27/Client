import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IciciHome, Login, Profile, Settings, SuperAdminHome, Tickets, UserManage } from '../constants/index.js';

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin" element={<SuperAdminHome />}>
          <Route path="ticket" element={<Tickets />} />
          <Route path="users" element={<UserManage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="icici" element={<IciciHome />}>
          <Route path="ticket" element={<Tickets />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;