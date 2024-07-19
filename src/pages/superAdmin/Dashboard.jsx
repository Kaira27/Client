import React from 'react';
import { Executions, MonthlyOverview, PieChart, RecentExecutions } from '../../constants';

const Dashboard = () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden'>
      <div className='flex-1 lg:ml-[80px] p-4 flex flex-col'>
        <Executions />
        <div className="mt-3 flex flex-col lg:flex-row gap-3">
          <PieChart />
          <MonthlyOverview />
        </div>
      </div>

      <div className='lg:mt-3 flex-1 px-5 lg:px-3 lg:flex lg:flex-col'>
        <RecentExecutions />
      </div>
    </div>
  );
}

export default Dashboard;
