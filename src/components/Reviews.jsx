import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

const Reviews = () =>{

    const [reviews, setReviews] = useState([])

    const {movieID} = useParams()

        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

    useEffect(() => {
            fetch(`${MAIN_URL}/3/movie/${movieID}/reviews?api_key=${URL_KEY}&language=en-US`)
            .then(result => result.json())
            .then(array =>  setReviews(prevState => array.results))
    },[])

    if(reviews.length === 0){
        return(
            <div className='reviews_container'>   
                <p className='reviews_author'>No reviews found 😥</p>
            </div>
        )
    }

    if(reviews.length > 0){
        return(
            <div className='reviews_container'>
                <ul className='reviews_list'>
                    {reviews.map(review =>
                        <li key={nanoid()} className='reviews_item'>
                            <p className='reviews_author'>{review.author}</p>
                            <p className='reviews_content'>{review.content}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Reviews
