import SearchBox from '../components/SearchBox'
import MoviesList from '../components/MoviesList'
import'./pagesStyled.css'

const Movies = () =>{
     

    return(
        <main>
            <SearchBox/>
              <MoviesList />
        </main>
        )
}


export default Movies