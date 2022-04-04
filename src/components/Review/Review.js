import React from 'react';

const Review = (props) => {
    const{name,avatar,message,rating,designation} = props.review;
    return (
        <div className='w-full bg-slate-300 p-5 rounded-lg shadow-2xl mt-5 hover:scale-105'>
            <img className='h-[90px] w-[90px] mx-auto rounded-[50%]' src={avatar} alt="" />
            <h1 className='mt-3 text-2xl text-[20px] font-semibold'>{name}</h1>
            <p className='font-semibold text-slate-700 text-[16px]'><small>{designation}</small></p>
            <p className='text-[18px]'>{message}</p>
            <p className='font-bold text-xl'><small>Rating: {rating}</small></p>
        </div>
    );
};

export default Review;