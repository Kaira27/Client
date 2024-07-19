import React, { useState } from 'react';
import { checkmed, message, notification, menu, cross } from '../constants';
import { navLinks } from '../constants';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#EBEEF5] p-4 py-5 sticky top-0 z-10">
      <div className="absolute mt-2 ml-3 items-center justify-start">
        <button>
          <img src={checkmed} alt="CheckMed Logo" className="w-[60px] h-[60px]" />
        </button>
      </div>
      <div className="ml-auto flex items-center space-x-4 pr-4">
        <div className="relative w-[28.84px] h-[30.36px]">
          <img src={notification} alt="Notifications" className="w-full h-full cursor-pointer text-black" />
        </div>
        <div className="relative w-[31px] h-[28px]">
          <img src={message} alt="Messages" className="w-full h-full cursor-pointer text-black" />
          <div className="absolute top-[42%] transform -translate-y-[50%] right-[18px] w-[2px] h-[2px] bg-[#000000] rounded-full"></div>
          <div className="absolute top-[42%] transform -translate-y-[50%] right-[12px] w-[2px] h-[2px] bg-[#000000] rounded-full"></div>
          <div className="absolute top-[42%] transform -translate-y-[50%] right-[6px] w-[3px] h-[2px] bg-[#000000] rounded-full"></div>
        </div>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? cross : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar shadow-lg`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                  <a href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[70px] left-2 right-2 border-b border-black" />
    </nav>
  );
};

export default Nav;
