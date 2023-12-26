import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signup, isAutenticated, errors: RegisterErrors } = useAuth()

    console.log(isAutenticated);
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
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

            {
                RegisterErrors.length >= 1 ? RegisterErrors.map((item, i) => <div key={i} className='bg-red-500 p-2 text-white'>{item}</div>) : ''
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='email'
                    {...register('email', { required: true })}
                    className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                {errors.email && <p className='text-red-500'>emial is required</p>}
                <input
                    type='password'
                    {...register('password', { required: true })}
                    className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                    placeholder='Password'
                />
                {errors.password && <p className='text-red-500'>password is required</p>}
                <input
                    type='text'
                    {...register('username', { required: true })}
                    className='w-full bg-zinc-700 text-black px-4 py-2 rounded-md my-2'
                    placeholder='Username'
                />
                {errors.username && <p className='text-red-500'>username is required</p>}

                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
