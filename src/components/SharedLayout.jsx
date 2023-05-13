import { Outlet, NavLink, useParams } from "react-router-dom";
import'./styles.css'

export const SharedLayout = () => {
  const {movieID} = useParams()
  
  return (
    <div className='body'>
      <header className='header'>
           <div className='nav_list'>
            <NavLink className='nav_link' to='/'>Home</NavLink >
            <NavLink className='nav_link' to='/movies'>Movies</NavLink >  
            {movieID && <NavLink className='nav_link' to='/'>Go back</NavLink > }  
           </div>
      </header>
      <Outlet />
    </div>
  );
};