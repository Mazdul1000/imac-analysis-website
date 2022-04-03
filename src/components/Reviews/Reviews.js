import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
   
    const [reviews,setReviews] = useReviews();
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className="text-6xl my-10">Reviews</h1>
            <div className="grid grid-cols-3 gap-10">
                {reviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
            
        </div>
    );
};

export default Reviews;