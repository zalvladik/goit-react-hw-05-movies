import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import './styles.css'

const MoviesList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesArray, setMoviesArray] = useState([])
    const [buttonPlusPage, setButtonPlusPage] = useState(1)

    const queryValue = searchParams.get("query") ?? "";
    
    useEffect(() => {

        console.log(queryValue)
        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

            fetch(`${MAIN_URL}/3/search/movie?api_key=${URL_KEY}&language=en-US&query=${queryValue}&page=${buttonPlusPage}&include_adult=false`)
            .then(result => result.json())
            .then(array => setMoviesArray(prevState => [...prevState,...array.results]))
            
    },[buttonPlusPage,queryValue])


    return(
        <div className='query_container'>
            <ul className='query_list'>
                {moviesArray.map(movie => 
                <li className='query_item' id={movie.id} key={nanoid()}>
                    <NavLink
                     to={`/movies/${movie.id}`} className='query_link'>- {movie.title ?? movie.name}
                    </NavLink>
                </li>)
                }
            </ul>
            <div className='button_Container'>
                <button className='buttonPlusPage' onClick={() => {setButtonPlusPage(buttonPlusPage+1)}}> Click me!</button>
            </div>
        </div>
    )
}

export default MoviesList