import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const SimpleAreaChart = () => {
    const [chartData] = useChartData();
    return (
        <div>
            
           
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" activeDot={{ r: 8 }} />
          <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }}/>
          <Legend></Legend>
        </AreaChart>
        </div>
    );
};

export default SimpleAreaChart;