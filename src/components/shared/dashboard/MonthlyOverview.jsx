import React from 'react'

const MonthlyOverview = () => {
  return (
    <div className='lg:w-full h-full md:h-full bg-white rounded-[10px] p-8 py-5'>
      <div className="flex flex-col">
        <h1 className='font-bold text-[18px]'>Monthly Overview</h1>

        <div className='pt-5'>
          <div className='flex flex-col'>
            <h2>OPD DC</h2>
            <p>Created on May 01, 2024 00:00</p>
            <div className='flex-row'>
            </div>
          </div>
          <span className='w-[100%] border-[0.5px] border-gray block mt-1'></span>

          <div className='flex flex-col pt-3'>
            <h2>OPD Diagnostics</h2>
            <p>Created on May 01, 2024 00:00</p>
            <div className='flex-row'>
            </div>
          </div>
          <span className='w-[100%] border-[0.5px] border-gray block mt-1'></span>

          <div className='flex flex-col pt-3'>
            <h2>Prescription</h2>
            <p>Created on May 01, 2024 00:00</p>
            <div className='flex-row'>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MonthlyOverview