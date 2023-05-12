import './styles.css'
import { useState } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";


const SearchBox = ({ searchQuery}) =>{
    const [currentValue, setCurrentValue] = useState('')
    const [prevValue, setPrevValue] = useState('')

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
                theme: "colored",
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
                theme: "colored",
                });  
        }
        setPrevValue(currentValue)
        searchQuery(currentValue)
    }
    const changeCurrentValue = e => {
        setCurrentValue(e.currentTarget.value.toLowerCase().trim())
    }
    return(
        <div className='qwery_Container'>
            <form className='formQwery' onSubmit={searchQweryFunc}>
            <label>
                <input 
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