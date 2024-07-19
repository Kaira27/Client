import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 202, label: 'Diagnostics' },
    { id: 1, value: 123, label: 'Consulting' },
    { id: 2, value: 102, label: 'Medicine' },
];

const COLORS = [
    '#5277DB',
    '#43588E',
    '#03206B',
];

const Piechart = () => {
    return (
        <div className="flex flex-col items-center shadow-lg rounded-lg
         bg-white bg-opacity-75 w-full lg:w-[350px] h-[300px] mx-auto lg:mx-0 pt-5">
            <PieChart
                height={100}
                series={[
                    {
                        data: data.map((item, index) => ({
                            ...item,
                            color: COLORS[index % COLORS.length],
                        })),
                        innerRadius: 80,
                        outerRadius: 40,
                        startAngle: 0,
                        endAngle: 360,
                    },
                ]}
            />
            <div className="mb-10 flex justify-around w-full px-0">
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex flex-col items-center mx-2">
                        <div className="flex items-center">
                            <div
                                className="w-4 h-4 mr-2"
                                style={{
                                    backgroundColor: COLORS[index % COLORS.length],
                                }}
                            />
                            <p className="text-black">
                                {entry.label}
                            </p>
                        </div>
                        <p className="text-lg font-bold text-black mt-1">
                            {entry.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Piechart;
