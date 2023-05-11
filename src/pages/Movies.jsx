import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import SearchBox from '../components/SearchBox'
import MoviesList from '../components/MoviesList'
import'./pagesStyled.css'

const Movies = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get("query") ?? "";
    
    const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);

  };

    

    return(
        <main>
            <SearchBox searchQuery={updateQueryString} />
            { queryValue !== '' &&
              <MoviesList />}
        </main>
        )
}

export default Movies