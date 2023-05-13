import { Outlet, NavLink} from "react-router-dom";
import'./styles.css'

export const SharedLayout = () => {
  
  return (
    <div className='body'>
      <header className='header'>
           <div className='nav_list'>
            <NavLink className='nav_link' to='/'>Home</NavLink >
            <NavLink className='nav_link' to='/movies'>Movies</NavLink >  
           </div>
      </header>
      <Outlet />
    </div>
  );
};