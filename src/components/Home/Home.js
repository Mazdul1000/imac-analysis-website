import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import bannerImg from '../../images/banner.jpg';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';


const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const cutReviews = reviews.slice(0, 3);

    return (
        <div>
            <div>
                <div className='grid grid-cols-2 my-10'>

                    <div className='mt-[80px]'>
                        <h1 className='text-6xl font-bold mt-10'><span className='text-[#10505B]' >Say</span> <span className='text-[#D48207]'>hello</span> <span className='text-[#E77F5E]'>to</span> <span className='text-[#B72C31]'>the</span> <span className='text-[#353A71]'> new</span> <span className='text-[#25476D]'>iMac.</span> </h1>
                        <p className='text-4xl p-10 text-[#1D1D1F] font-bold font-mono'>Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.</p>

                    </div>
                    <div className='w-full'>
                        <img className='mx-auto' src="https://www.apple.com/v/imac-24/e/images/overview/color_front_silver__cwewcn8oo9qq_large.jpg" alt="" />
                        <img className='mx-auto' src="https://www.apple.com/v/imac-24/e/images/overview/color_back_silver__rx2vhewqhn2u_large.jpg" alt="" />
                    </div>
                </div>

                <div className='w-full my-[50px]'><img className='w-[80%] mx-auto rounded-lg' src={bannerImg} alt="" /></div>
                <div>
                    <h2 className="mt-4 text-3xl font-mono font-bold text-[#1D1D1F]">The premium attractive screen world have never seen before</h2>
                </div>
            </div>

            <div className='my-10'>
                <h1 className='text-2xl font-semibold'>Product Reviews ({reviews.length})</h1>
                <div className='grid grid-cols-3 gap-10 p-10'>
                    {cutReviews.map(review => <Review key={review.id} review={review}></Review>)}
                </div>
                <div className='flex h-full w-full justify-center'>
                    <button onClick={() => navigate('/reviews')} className='text-3xl mt-10 font-mono font-semibold flex h-full items-center hover:scale-105'><span>See All Reviews</span> <span><ArrowNarrowRightIcon className='h-[30px] w-[40px]'></ArrowNarrowRightIcon></span></button>
                </div>
                
            </div>
        </div>
    );
};

export default Home;