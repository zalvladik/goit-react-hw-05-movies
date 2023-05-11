import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";

const Home = () => {

const [trendingMoviesToday, setTrendingMoviesToday] = useState([]) 

    useEffect(() => {
        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

            fetch(`${MAIN_URL}/3/trending/all/day?api_key=${URL_KEY}`)
            .then(result => result.json())
            .then(array => setTrendingMoviesToday(prevState =>[...array.results]))
    },[])
    
    return (
      <main>
        <div className='trending_container'>
            <ul className='trending_list'>
            {trendingMoviesToday.map(movie =>
                <li className='trending_item' key={nanoid()} id={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} className='trending_link'>- {movie.title ?? movie.name}</NavLink>
                </li>)}
            </ul>
        </div>
      </main>
    );
  };


export default Home
  