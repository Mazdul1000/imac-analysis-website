import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const SimpleBarChart = () => {
    const [chartData] = useChartData();
    return (
        <div>
            <BarChart width={500} height={380} data={chartData}>
          <Bar dataKey="investment" stroke="#8884d8" fill="#8884d8"/>
          <Bar dataKey="revenue" stroke="#82ca9d" fill="#82ca9d"/>
          <XAxis dataKey='month'></XAxis>
          <YAxis></YAxis>
          <Legend></Legend>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default SimpleBarChart;