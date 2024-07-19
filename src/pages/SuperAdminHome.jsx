// src/pages/SuperAdminHome.jsx
import React from 'react';
import { Dashboard, SuperSideBar } from '../constants';
import { Outlet, useLocation } from 'react-router-dom';

const SuperAdminHome = () => {
  const location = useLocation();
  const isAdminRoot = location.pathname === '/admin' || location.pathname === '/admin/';

  return (
    <div data-testid="super-admin-home" className='h-fit min-h-screen pb-5 bg-[#EBEEF5]'>
      <div className='hidden lg:flex pt-2'>
        <SuperSideBar superadmin={true} data-testid="super-sidebar" />
      </div>
      {isAdminRoot && (
        <>
          <Dashboard data-testid="dashboard" />
        </>
      )}
      <Outlet data-testid="outlet" />
    </div>
  );
};

export default SuperAdminHome;
