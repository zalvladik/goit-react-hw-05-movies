import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import './pagesStyled.css'

const MoviesDetails = ({}) =>{
    const [movieInfo, setMovieInfo] = useState([])

    const {movieID} = useParams()

        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

    useEffect(() => {

            fetch(`${MAIN_URL}/3/movie/${movieID}?api_key=${URL_KEY}&language=en-US`)
            .then(result => result.json())
            .then(movie => setMovieInfo(prevState => movie))
    },[movieID])

    const genres = () =>{
        const arrayGenres = movieInfo.genres
        console.log(arrayGenres)
        if(arrayGenres){
            for (const genre of arrayGenres) {
                return console.log(genre.name)
              }
        }
    }
    genres()
    
    
    return(

        <div className='main_info_movie'>
            <div className='poster_container'>
                <img className='poster' src={'https://www.themoviedb.org/t/p/w220_and_h330_face'+movieInfo.poster_path}></img>
            </div>

            <ul className='movie_info_list'>
                <li className='movie_info_item'>
                    <p className='big_info_title'>{movieInfo.title ?? movieInfo.name}</p>
                    <p className='movie_score'>User Score:{movieInfo.vote_average}</p>
                </li>
                <li className='movie_info_item'>
                    <p className='big_info_title'>Overview</p>
                    <p className='movie_Overview-text'>{movieInfo.overview}</p>
                </li>
                <li className='movie_info_item'>
                    <p className='big_info_title'>Genres</p>
                    <p className='movie_genres'></p>
                </li>
            </ul>
        </div>
    )
}

export default MoviesDetails