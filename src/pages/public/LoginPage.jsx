import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks';
import { backendApi } from '../../api';
import { UserContext } from '../../context/UserContext';

const initialState = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { formState, email, password, onInputChange, onResetForm } = useForm(initialState);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      
      const response = await backendApi.post('/login', formState);

      if (response.status !== 200) {
        alert('Error al iniciar sesión');
      }

      setUser(response.data.user);
      navigate('/accoun', { replace: true });


    } catch (error) {
      console.log(error.message);
      alert('Error al iniciar sesión');
    }

  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form
          onSubmit={handleSubmit} 
          className='max-w-md mx-auto'>
          <input
            name='email'
            value={email}
            onChange={onInputChange} 
            type="email" 
            placeholder='your@email.com' 
            />
          <input
            name='password'
            value={password}
            onChange={onInputChange} 
            type="password" 
            placeholder='password' 
            />
          <button type='submit' className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            ¿No tienes cuenta? <Link to='/register' className='underline text-black'>Registrate</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
