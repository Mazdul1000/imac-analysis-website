import React from 'react';
import SimpleLinechart from '../../SimpleLineChart/SimpleLineChart';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';



const Dashboard = () => {
    return (
        <div>
            <h1>Hello</h1>
            <SimpleLinechart></SimpleLinechart>
            <SimpleAreaChart></SimpleAreaChart>
        </div>
    );
};

export default Dashboard;