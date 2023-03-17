import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto'>
          <input type="email" placeholder='your@email.com' />
          <input type="password" placeholder='password' />
          <button type='submit' className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            ¿No tienes cuenta? <Link to='/register' className='underline text-black'>Registrate</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
