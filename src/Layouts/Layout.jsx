import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';
import { UserContext } from '../context/UserContext';

export const Layout = () => {

    const { user } = useContext(UserContext);

    return (
        <div className='p-4 flex flex-col min-h-screen'>
            <Header />
            {
                user && (
                   <Navbar />  
                )
            }
            <Outlet />
        </div>
    )
}
