import React from 'react'
import { Dashboard, SuperSideBar } from '../constants'
import { Outlet, useLocation } from 'react-router';

const IciciHome = () => {
  const location = useLocation();
  const isAdminRoot = location.pathname === '/icici' || location.pathname === '/icici/';

  return (
    <div className='h-fit min-h-screen pb-5 bg-[#EBEEF5]'>
      <div className='hidden lg:flex pt-2'>
        <SuperSideBar />
      </div>
      {isAdminRoot && (
        <>
          <Dashboard />
        </>
      )}
      <Outlet />
    </div>
  )
}

export default IciciHome