import { Link } from 'react-router-dom';
import { backendApi } from '../../api';
import { useForm } from '../../hooks';

const initialState = {
    name: '',
    email: '',
    password: ''
}

export const RegisterPage = () => {

    const { formState, name, email, password, onInputChange, onResetForm } = useForm(initialState);

    const handleSubmit = async(e) => {
        e.preventDefault();

        await backendApi.post('/register', formState)

        console.log('enviado');

    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
                    <input
                        name='name'
                        value={name}
                        onChange={onInputChange} 
                        type="text" 
                        placeholder='John Doe' />
                    <input
                        name='email'
                        value={email}
                        onChange={onInputChange}
                        type="email"
                        placeholder='your@email.com' />
                    <input
                        name='password'
                        value={password}
                        onChange={onInputChange} 
                        type="password" 
                        placeholder='password' 
                    />
                    <button type='submit' className='primary'>Register</button>
                    <div className='text-center py-2 text-gray-500'>
                        Ya tienes cuenta? <Link to='/login' className='underline text-black'>Inicia sesión</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
