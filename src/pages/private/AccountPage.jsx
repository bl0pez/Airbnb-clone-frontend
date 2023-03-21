import { useContext } from 'react';
import { backendApi } from '../../api';
import { UserContext } from '../../context/UserContext';

export const AccountPage = () => {

  const { user, setUser } = useContext(UserContext);

  const logout = async() => {
    const response = await backendApi.post('/logout');

    if(response.status !== 200) {
      alert('Error al cerrar sesión');
    }

    setUser(null);

  }

  return (
    <div className="text-center max-w-lg mx-auto flex flex-col">
        Logged in as {user.name} ({user.email})
        <button
          onClick={logout} 
          className='primary max-w-sm mt-2'>Logout</button>
    </div>    
  )
}
