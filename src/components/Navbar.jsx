import { Link, useLocation, useParams } from 'react-router-dom';

export const Navbar = () => {

    //Seleccionamos el path
    const { pathname } = useLocation();

    //Funcion para darle estilo a los links
    const linkClasses = (link = '') => {
  
      if(link === pathname.split('/')[1]) {
        return 'py-2 px-6 mb-8 bg-primary text-white rounded-full';
      }
  
      return 'py-2 px-6 mb-8';
  
    }

    return (
        <nav className='w-full flex justify-center mt-8 gap-2'>
            <Link className={linkClasses('account')} to="/account">My profile</Link>
            <Link className={linkClasses('bookings')} to="/bookings">My bookings</Link>
            <Link className={linkClasses('places')} to="/places">My accommodations</Link>
        </nav>
    )
}
