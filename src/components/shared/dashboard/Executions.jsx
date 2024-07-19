import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography, useMediaQuery } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const data = [
  { date: '20-May', diagnostics: 8, consulting: 5, medicine: 7 },
  { date: '21-May', diagnostics: 10, consulting: 6, medicine: 9 },
  { date: '22-May', diagnostics: 15, consulting: 7, medicine: 10 },
  { date: '23-May', diagnostics: 18, consulting: 8, medicine: 14 },
  { date: '24-May', diagnostics: 23, consulting: 12, medicine: 17 },
];

const series = [
  { dataKey: 'diagnostics', color: ['#C5D3F7', '#5277DB'] },
  { dataKey: 'consulting', color: ['#5A75BE', '#293658'] },
  { dataKey: 'medicine', color: '#03206B' },
];

const Executions = () => {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  const isMdUp = useMediaQuery('(min-width: 768px)');
  const isSmUp = useMediaQuery('(min-width: 640px)');

  const chartHeight = isLgUp ? 300 : isMdUp ? 250 : 200;
  const chartWidth = isLgUp ? 600 : isMdUp ? 500 : 300;

  return (
    <div className='lg:w-[55vw] h-[250px] md:h-[350px] bg-white rounded-[10px]'>
      <div className="flex">
        <div className="flex items-center pl-20 pt-3">
          <Typography variant="h6" className="text-black pr-5 font-semibold text-[17px] lg:text-[20px]">
            Executions
          </Typography>
          <Typography variant="body2" className="text-gray-500 ml-[40px]">
            Last 7 Days
          </Typography>
          <ArrowDropDownIcon className="text-gray-500 ml-1" />
        </div>
      </div>
      <div className='flex justify-center flex-center'>
        <BarChart
          dataset={data}
          xAxis={[
            {
              dataKey: 'date',
              scaleType: 'band',
              tickValues: ['20-May', '21-May', '22-May', '23-May', '24-May'],
              label: 'Date of Execution',
              tickLabelColor: '#000000',
              tickSize: 5,
              labelMargin: 10,
            },
          ]}
          yAxis={[
            {
              tickValues: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
              label: 'Execution Count',
              tickLabelColor: '#000000',
              tickSize: 5,
              labelMargin: 20,
              labelOffset: 30,
            },
          ]}
          series={series}
          height={chartHeight}
          width={chartWidth}
        />
      </div>
    </div>
  );
};

export default Executions;
