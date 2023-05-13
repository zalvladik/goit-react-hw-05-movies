import { useParams,Outlet,Link } from "react-router-dom";
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
            .catch(error => console.log(error))
            console.log(movieInfo)
    },[])

    const genres = () =>{
        
        const arrayGenres = movieInfo.genres
        let result = ''
        if(arrayGenres){
            for (const genre of arrayGenres) {
                result = result + ' '+genre.name
              }
        }
        return result
    }
    console.log(movieInfo)

    const getYear = movieDate => {
        const date = new Date(movieDate);
        return date.getFullYear();
      };
    
    
    return(

        <div className='main_info_movie'>
            <div className='movie_info_container'>
                <div className='poster_container'>
                    <img className='poster' src={'https://image.tmdb.org/t/p/w500'+movieInfo.poster_path}></img>
                </div>

                <ul className='movie_info_list'>
                    <li className='movie_info_item'>
                        <p className='big_info_title'>{movieInfo.title ?? movieInfo.name} ({getYear(movieInfo.release_date)})</p>
                        <p className='movie_score text'>User Score:{Math.round(movieInfo.vote_average*10) + '%'}</p>
                    </li>
                    <li className='movie_info_item'>
                        <p className='big_info_title'>Overview</p>
                        <p className='movie_Overview-text text'>{movieInfo.overview}</p>
                    </li>
                    <li className='movie_info_item'>
                        <p className='big_info_title'>Genres</p>
                        <p className='movie_genres text'>{genres()}</p>
                    </li>
                </ul>
            </div>
            <div className='additional_info_container'>
                <p className='big_info_title'>Additional information :</p>
                    <ul className='additional_info_list'>
                        <li className='trending_item'> <Link className='trending_link' to="cast"> - Cast</Link> </li>
                        <li className='trending_item'> <Link className='trending_link' to="reviews"> - Reviews</Link> </li>
                    </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default MoviesDetails