import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import useChartData from '../hooks/useChartData';

const SimpleLinechart = () => {
    
    const [chartData,setChartData] = useChartData();
    console.log(chartData)
  
    return (
        <div>
            
            <LineChart width={500} height={400} data={chartData}>
    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }}/>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip/>
    <CartesianGrid strokeDasharray="3 3" />
    <Legend></Legend>
  </LineChart>
        </div>
    );
};

export default SimpleLinechart;