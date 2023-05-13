import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

const Reviews = () =>{
    const [loader,setLoader] = useState(true)
    const [reviews, setReviews] = useState([])

    const {movieID} = useParams()

        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

    useEffect(() => {

        setLoader(prevState => true)
            setTimeout(() => {
                fetch(`${MAIN_URL}/3/movie/${movieID}/reviews?api_key=${URL_KEY}&language=en-US`)
            .then(result => result.json())
            .then(array =>  setReviews(prevState => array.results))
            .catch(error => console.log(error))
            .finally(setLoader(prevState => false))
            },2000)
    },[movieID])

    if(loader){
        return(
            <div className='cast_container'>
                <p className='big_info_title'>Loading... 🕓</p>
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

    if(reviews.length === 0){
        return(
            <div className='reviews_container'>   
                <p className='big_info_title'>No reviews found 😥</p>
            </div>
        )
    }

    
}

export default Reviews
