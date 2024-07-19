import React from 'react'
import { sort } from '../../constants'

const UserManage = () => {
  return (
    <div className='flex overflow-hidden lg:ml-[80px] p-4 min-h-screen'>
      <div className='flex flex-col lg:flex-row w-full rounded-[15px]'>
        <div className="bg-white shadow-lg w-full lg:w-[80%] h-full p-6 flex-grow rounded-[15px]">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold w-full lg:w-[173px] h-auto lg:h-[19px]">Clients Management</div>
            <div className="flex items-center">
              <span className="mr-2">Sort</span>
              <img src={sort} alt="Sort Icon" className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-4">
            {['ICICI Lombard', 'Varun'].map((client, index) => (
              <div key={index} className="border-b border-gray-300 p-4">
                <div className="font-semibold">{client}</div>
                <div className="text-sm text-gray-500">Created on May 01, 2024 00:00</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg w-full lg:w-[50%] h-full p-6 lg:ml-4 mt-4 lg:mt-0 flex-grow rounded-[15px]">
          <div className="text-lg font-semibold">Clients Details</div>
        </div>
      </div>
    </div>
  )
}

export default UserManage