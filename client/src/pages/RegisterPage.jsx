import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signup, isAutenticated, errors: RegisterErrors } = useAuth()



    useEffect(() => {
        if (isAutenticated) navigate('/task')
    }, [isAutenticated])



    const onSubmit = async (values) => {
        try {
            signup(values)
        } catch (error) {
            console.error(error);
        }
    };







    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {
                    RegisterErrors.length >= 1 ? RegisterErrors.map((item, i) => <div key={i} className='bg-red-500 p-2 text-white'>{item}</div>) : ''
                }
                <h1 className='text-3xl font-bold'>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='text'
                        {...register('username', { required: true })}
                        className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                        placeholder='Username'
                        autoComplete='off'
                        defaultValue='' // Campo de valor vacío

                    />
                    {errors.username && <p className='text-red-500'>username is required</p>}
                    <input
                        type='email'
                        {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                        placeholder='Email'
                        autoComplete='off'
                        defaultValue='' // Campo de valor vacío
                    />
                    {errors.email && <p className='text-red-500'>email is required</p>}
                    <input
                        type='password'
                        {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                        autoComplete='off'
                        defaultValue='' // Campo de valor vacío
                    />
                    {errors.password && <p className='text-red-500'>password is required</p>}


                    <button type='submit' className='bg-sky-500 text-white px-7 py-2 rounded-md my-2'>Register</button>
                </form>
                <p className='flex gap-x-2 justify-between'>Already have acount? <Link className='text-sky-500' to={'/login'}>Login</Link> </p>
            </div>
        </div>
    );
};

export default RegisterPage;
