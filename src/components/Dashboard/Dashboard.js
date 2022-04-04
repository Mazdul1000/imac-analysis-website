import React from 'react';
import SimpleLinechart from '../../SimpleLineChart/SimpleLineChart';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';



const Dashboard = () => {
    return (
        <div>
            

            <div className="grid grid-cols-2 gap-10 p-5">
                <div>
                    <h1 className='text-2xl mb-3 font-bold  text-[#8884d8]'>Month Wise Sell</h1>
                    <SimpleLinechart></SimpleLinechart>
                </div>
                <div>
                    <h1 className='text-2xl mb-3 font-bold  text-[#8884d8]'>Investment vs Sell</h1>
                    <SimpleAreaChart></SimpleAreaChart>
                </div>
                <div>
                    <h1 className='text-2xl mb-3 font-bold  text-[#8884d8]'>Investment vs Sell</h1>
                    <SimpleBarChart></SimpleBarChart>
                </div>




            </div>

        </div>
    );
};

export default Dashboard;