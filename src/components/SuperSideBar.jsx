import React from 'react';
import { dashboard, profile, settings, ticket, user } from '../constants';
import { useNavigate } from 'react-router-dom';

const SuperSideBar = ({ superadmin }) => {
  const navigate = useNavigate();

  return (
    <div className='w-[60px] h-[calc(100vh-70px)] bg-gradient-to-b from-[#001677] to-[#353B55]
     ml-5 pb-4 fixed flex flex-col items-center rounded-[12px]'>
      <div className="flex flex-col items-center p-2 py-5 px-4">
        <button className="mb-6" onClick={() => superadmin ? navigate('/admin') : navigate('/icici')}>
          <img src={dashboard} alt="Dashboard Icon" className="w-[35px] h-[35px] object-contain" />
        </button>
        <span className="w-[60px] h-[1px] bg-white mb-6 mx-auto"></span>
        <button className="mb-6" onClick={() => navigate('ticket')}>
          <img src={ticket} alt="Ticket Icon" className="w-[35px] h-[35px] object-contain" />
        </button>
        <div className="w-[60px] h-[1px] bg-white mb-6 mx-auto"></div>
        {superadmin && (
          <>
            <button className="mb-6" onClick={() => navigate('users')}>
              <img src={user} alt="user" className="w-[35px] h-[35px] object-contain" />
            </button>
            <div className="w-[60px] h-[1px] bg-white mb-6 mx-auto"></div>
          </>
        )}
        <button className="mb-6" onClick={() => navigate('settings')}>
          <img src={settings} alt="Settings Icon" className="w-[35px] h-[35px] object-contain" />
        </button>
      </div>
      <div className="mt-auto bottom-0">
        <button onClick={() => navigate('profile')}>
          <img src={profile} alt="Profile Icon" />
        </button>
      </div>
    </div>
  );
};

export default SuperSideBar;