import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notFoundImage from '../../images/404.png'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full'>
            <img className='mx-auto mt-10' src={notFoundImage} alt="" />
            
           <button onClick={()=> navigate('/')} className='bg-gray-800 text-white px-10 py-4 font-bold text-2xl rounded-2xl mt-10 hover:scale-110' >Go Back To Home</button>
           </div>
    );
};

export default NotFound;