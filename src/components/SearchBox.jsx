import './styles.css'
import { useState } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from 'react-router-dom';

const SearchBox = () =>{
    const [prevValue, setPrevValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query');
    const [currentValue, setCurrentValue] = useState(() => searchQuery || '')

    const searchQweryFunc = e =>{
        e.preventDefault()
        if(currentValue === ''){
            return toast.error('Будь ласка введіть назву фільму', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });     
        }

        if(prevValue === currentValue){
            return toast.error(`Ви уже зробили пошук ${currentValue}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });  
        }
        setPrevValue(currentValue)
        setSearchParams({ query: currentValue });
    }
    const changeCurrentValue = e => {
        setCurrentValue(e.currentTarget.value)
    }
    return(
        <div className='qwery_Container'>
            <form className='formQwery' onSubmit={searchQweryFunc}>
            <label>
                <input 
                    value={currentValue}
                    className='inputSearch'
                    type="text"
                    onChange={changeCurrentValue}
                >
                </input>
            </label>
            
                <button className='submitButton' type="submit"> <FaSearch className='button_icon'/> </button>
            </form>
        </div>
    )
}

export default SearchBox