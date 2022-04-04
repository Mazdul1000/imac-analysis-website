import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
   
    const [reviews] = useReviews();
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className="text-4xl my-10 font-semibold">Customer Reviews ({reviews.length})</h1>
            <div className="grid grid-cols-3 gap-10">
                {reviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
            
        </div>
    );
};

export default Reviews;