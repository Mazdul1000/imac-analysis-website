import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews] = useReviews();
    const navigate = useNavigate();
    const cutReviews = reviews.slice(0,3);

    return (
        <div>
          <div>
              <h1 className='text-4xl'>Product Demo</h1>
          </div>
            
            <div className='my-10'>
              <h1 className='text-2xl font-semibold'>Product Reviews</h1>
              <div className='grid grid-cols-3 gap-10 p-10'>
                  {cutReviews.map(review =><Review key ={review.id} review={review}></Review>)}
              </div>
              <button onClick={()=> navigate('/reviews')} className='text-3xl mt-10 font-mono font-semibold'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;