import { useSearchParams,useLocation  } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify'
import './styles.css'

const MoviesList = () => {
    const [searchParams] = useSearchParams();
    const [moviesArray, setMoviesArray] = useState([])
    const [loader,setLoader] = useState(false);
    const [prevValue, setPrevValue] = useState('')
    const location = useLocation();


    const queryValue = searchParams.get("query") ?? "";
    
    useEffect(() => {

        if(prevValue !== queryValue){
            setMoviesArray(prevState => [])
        }

        if(!queryValue || prevValue === queryValue){
            return
        }
        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

        setLoader(prevState => true)
            setTimeout(() =>{
                fetch(`${MAIN_URL}/3/search/movie?api_key=${URL_KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`)
            .then(result => result.json())
            .then(array => {
                if(array.results.length === 0){
                    return toast.error('Нажаль по вашому запиту нічого не знайдено', {
                        position: "top-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
            }
            console.log('movieList')
            setMoviesArray(prevState => [...prevState,...array.results])
            setPrevValue(prevState => queryValue)
        }
            ).catch(error => console.log(error))
            .finally(setLoader(prevState => false))
            },2000)
            
    },[queryValue, prevValue])

    if(loader){ 
        return(
            <div className='query_container'>
                <p className='reviews_author'>Loading... 🕓</p>
            </div>

        )
    }

    if(moviesArray.length > 0){
        return(
            <div className='query_container'>
                <ul className='query_list'>
                    {moviesArray.map(movie => 
                    <li className='query_item' id={movie.id} key={nanoid()}>
                        <NavLink
                         state={{ from: location }} to={`/movies/${movie.id}`} className='query_link'>- {movie.title ?? movie.name}
                        </NavLink>
                    </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default MoviesList