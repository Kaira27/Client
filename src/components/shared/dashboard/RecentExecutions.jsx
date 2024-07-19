import React from 'react';
import { download, menLogo } from '../../../constants';

const RecentExecutions = () => {
  const executions = [
    { name: 'febin', time: '4:41:44', status: 'Opened' },
    { name: 'Name Surname', time: '4:41:44', status: 'completed' },
    { name: 'Name Surname', time: '4:41:44', status: 'Opened' },
    { name: 'Name Surname', time: '4:41:44', status: 'Process' },
    { name: 'Name Surname', time: '4:41:44', status: 'Process' },
  ];

  return (
    <div className="bg-white bg-opacity-75 shadow-lg rounded-lg p-5 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Executions</h2>
        <div className="relative group">
          <button className="text-sm text-gray-500 relative">
            <img
              src={download}
              alt="Download Icon"
              className="w-5 h-5"
            />
          </button>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gray-700 text-white text-xs rounded py-1 px-2 z-10">
            Download in Excel
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center text-gray-600 mb-6">
        <span>Date</span>
        <span>Name</span>
        <span>Time</span>
        <span>Status</span>
      </div>
      <div className="relative mt-6">
        <div className="mt-10">
          {executions.map((execution, index) => (
            <div key={index}>
              <div className="flex items-center py-3 border-t border-gray-300">
                <div className="w-1/4 text-gray-600 text-center relative group">
                  <div className="h-[30.86px]">
                    <img
                      src={menLogo}
                      alt="avatar"
                      className="w-[30.86px] h-[30.86px] rounded-full mx-auto"
                    />
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-blue-700 text-white text-xs rounded py-1 px-2 z-10">
                      30 May 2024
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-700 rotate-45"></div>
                    </div>
                  )}
                </div>
                <div className="w-1/4 flex items-center justify-center">
                  <span className="whitespace-nowrap">{execution.name}</span>
                </div>
                <div className="w-1/4 text-gray-600 text-center">{execution.time}</div>
                <div className={`w-1/4 text-sm font-semibold text-center ${execution.status === 'Opened' ? 'text-blue-500' : execution.status === 'Process' ? 'text-red-500' : 'text-green-500'}`}>
                  {execution.status}
                </div>
              </div>
              <div className="border-b border-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentExecutions;