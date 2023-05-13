import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import noImage from '../images/noImage.jpg'

const Cast = () =>{
    const [loader,setLoader] = useState(true)
    const [castArray, setCastArray] = useState([])

    const {movieID} = useParams()

        const MAIN_URL = 'https://api.themoviedb.org';
        const URL_KEY = 'fb40b3f9c120ec573db898c0235ca89c';

    useEffect(() => {
        if(castArray.length > 0){
            return
        }

        setLoader(prevState => true)
            setTimeout(() =>{
                fetch(`${MAIN_URL}/3/movie/${movieID}/credits?api_key=${URL_KEY}&language=en-US`)
            .then(result => result.json())
            .then(cast => setCastArray(prevState => cast.cast))
            .catch(error => console.log(error))
            .finally(setLoader(prevState => false))
            console.log('castArray')
            },2000)
    },[castArray.length, movieID])

    if(loader){
        return(
            <div className='cast_container'>
                <p className='big_info_title'>Loading... 🕓</p>
            </div>
        )
    }

    if(castArray.length > 0){
        return(
            <div className='cast_container'>
                <ul className='cast_list'>
                    {castArray.map(cast => 
                        <li key={nanoid()} className='cast_item'>
                            <div className='cast_photo-container'>
                            {cast.profile_path ? (
                                <img className='cast_photo' alt={cast.name} src={'https://www.themoviedb.org/t/p/w138_and_h175_face'+cast.profile_path}></img>
                            ) : (
                                <img className='NOcast_photo' alt={cast.name} src={noImage}></img>)
                                }
                            </div>
                            <div className='cast_text-container'>
                                <p className='cast_name'>{cast.name}</p>
                                <p className='cast_text'>Character:{cast.character} </p>
                            </div>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
    
    if(castArray.length === 0){
        return(
            <div className='cast_container'>
                <p className='big_info_title'>No casts found 😥</p>
            </div>
        )
    }

    
}

export default Cast